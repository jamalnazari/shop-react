import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStore,
  faCircleCheck,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Asid from "../components/asid";
import { ROUTES } from "../../../constants/routes";

export default function Admin() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes("/admin/users")) {
      return "مدیریت کاربران و مشتریان";
    }
    return "مدیریت و انبار محصولات";
  };

  return (
    <div dir="rtl" className="flex min-h-screen bg-slate-100 font-sans text-slate-800">
      {/* سایدبار ناوبری */}
      <Asid isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      {/* بخش اصلی محتوا */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* هدر بالای پنل */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8 shadow-sm">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* دکمه منوی همبرگری موبایل */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 lg:hidden transition-colors"
              aria-label="باز کردن منو"
            >
              <FontAwesomeIcon icon={faBars} className="text-lg" />
            </button>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {getPageTitle()}
              </h2>
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
                <span>داشبورد مدیریت</span>
                <span>/</span>
                <span className="text-red-600 font-medium">دیجی‌کالا</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* وضعیت آنلاین بودن سیستم */}
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>سیستم فعال</span>
            </div>

            {/* دکمه رفتن به فروشگاه */}
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
            >
              <FontAwesomeIcon icon={faStore} className="text-slate-500" />
              <span className="hidden sm:inline">فروشگاه</span>
            </Link>
          </div>
        </header>

        {/* محتوای صفحات داخلی */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
