import { useEffect, useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCircleCheck,
  faSearch,
  faPhone,
  faShieldHalved,
  faUserCheck,
  faRotateRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { userService } from "../../../api/userService";
import Button from "../../../shared/components/buttons/button";
import Input from "../../../shared/components/input";

export default function UsersUi() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const data = await userService.getAll();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("خطا در دریافت لیست کاربران:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const phone = user.phone || "";
      const id = String(user.id || "");
      return (
        phone.includes(searchQuery.trim()) || id.includes(searchQuery.trim())
      );
    });
  }, [users, searchQuery]);

  return (
    <div className="space-y-6">
      {/* کارت‌های آماری کاربران */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* کل کاربران */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">کل کاربران ثبت‌نامی</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {users.length} <span className="text-xs font-normal text-slate-400">کاربر</span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <FontAwesomeIcon icon={faUsers} className="text-xl" />
          </div>
        </div>

        {/* کاربران فعال */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">حساب‌های فعال و معتبر</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {users.length} <span className="text-xs font-normal text-slate-400">نفر</span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <FontAwesomeIcon icon={faUserCheck} className="text-xl" />
          </div>
        </div>

        {/* ضریب تایید */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">احراز هویت شده</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              100% <span className="text-xs font-normal text-slate-400">تکمیل</span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
            <FontAwesomeIcon icon={faCircleCheck} className="text-xl" />
          </div>
        </div>
      </div>

      {/* نوار جستجو و ابزار */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Input
            type="text"
            variant="default"
            placeholder="جستجو بر اساس شماره موبایل یا شناسه کاربر..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10 pl-3 py-2 text-sm rounded-xl"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
          />
        </div>

        <Button
          variant="none"
          size="sm"
          onClick={fetchUsers}
          title="تازه‌سازی"
          className="border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 px-4 py-2 rounded-xl text-xs flex items-center gap-2 self-end sm:self-auto"
        >
          <FontAwesomeIcon icon={faRotateRight} className={isLoading ? "animate-spin" : ""} />
          <span>تازه‌سازی لیست</span>
        </Button>
      </div>

      {/* جدول کاربران */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/70 px-6 py-4">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span>👥 لیست کاربران سیستم</span>
            <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-700">
              {filteredUsers.length} کاربر
            </span>
          </h3>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <FontAwesomeIcon icon={faRotateRight} className="animate-spin text-3xl mb-3 text-indigo-500" />
            <p className="text-sm">در حال بارگذاری مشخصات کاربران...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <FontAwesomeIcon icon={faUsers} className="text-4xl mb-3 text-slate-300" />
            <p className="text-base font-medium text-slate-600">کاربری با این مشخصات یافت نشد!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-50/50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3.5">کاربر</th>
                  <th className="px-6 py-3.5">شماره موبایل</th>
                  <th className="px-6 py-3.5">نقش کاربری</th>
                  <th className="px-6 py-3.5">وضعیت حساب</th>
                  <th className="px-6 py-3.5">شناسه یکتا</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user, idx) => (
                  <tr
                    key={user.id || idx}
                    className="hover:bg-slate-50/80 transition-colors duration-150"
                  >
                    {/* آواتار و نام کاربری */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-slate-700 to-slate-900 text-white font-bold text-xs shadow-sm">
                          {user.phone ? user.phone.slice(-2) : `U${idx + 1}`}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">
                            کاربر {user.id ? `#${user.id}` : idx + 1}
                          </p>
                          <p className="text-xs text-slate-400">عضو وب‌سایت</p>
                        </div>
                      </div>
                    </td>

                    {/* شماره موبایل */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        dir="ltr"
                        className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg"
                      >
                        <FontAwesomeIcon icon={faPhone} className="text-xs text-slate-400" />
                        {user.phone || "ثبت‌نشده"}
                      </span>
                    </td>

                    {/* نقش کاربری */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-blue-50 border border-blue-200 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-[10px]" />
                        مشتری عادی
                      </span>
                    </td>

                    {/* وضعیت */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-medium text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        فعال و تایید شده
                      </span>
                    </td>

                    {/* شناسه یکتا */}
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-400 font-mono">
                      ID: {user.id || `USR-${idx + 100}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
