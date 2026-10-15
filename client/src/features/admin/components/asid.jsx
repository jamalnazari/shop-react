import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faUsers,
  faStore,
  faArrowRightFromBracket,
  faXmark,
  faShieldHalved,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { ROUTES } from "../../../constants/routes";
import { useAuth } from "../../../context/AuthContext";

export default function Asid({ isMobileOpen, setIsMobileOpen }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("آیا برای خروج از پنل مدیریت اطمینان دارید؟")) {
      logout();
      navigate(ROUTES.HOME);
    }
  };

  const closeMobile = () => {
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  const navItems = [
    {
      to: ROUTES.ADMIN_PRODUCTS,
      label: "مدیریت محصولات",
      icon: faBoxesStacked,
      badge: "انبار",
    },
    {
      to: ROUTES.ADMIN_USERS,
      label: "مدیریت کاربران",
      icon: faUsers,
      badge: "مشتریان",
    },
  ];

  return (
    <>
      {/* بک‌دراپ برای حالت موبایل */}
      {isMobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* ستون کناری (سایدبار) */}
      <aside
        dir="rtl"
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-72 flex-col justify-between bg-slate-900 text-slate-100 shadow-2xl transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* بخش بالایی سایدبار */}
        <div>
          {/* هدر سایدبار */}
          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 to-rose-400 text-white shadow-lg shadow-red-500/30">
                <FontAwesomeIcon icon={faShieldHalved} className="text-lg" />
              </div>
              <div>
                <h1 className="text-base font-bold text-white leading-tight">
                  پنل مدیریت
                </h1>
                <p className="text-xs text-slate-400">فروشگاه دیجی‌کالا</p>
              </div>
            </div>

            {/* دکمه بستن در موبایل */}
            <button
              onClick={closeMobile}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden transition-colors"
              aria-label="بستن منو"
            >
              <FontAwesomeIcon icon={faXmark} className="text-lg" />
            </button>
          </div>

          {/* منوی ناوبری */}
          <nav className="mt-6 px-4 space-y-1.5">
            <p className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              مدیریت سامانه
            </p>

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-base transition-transform group-hover:scale-110"
                  />
                  <span>{item.label}</span>
                </div>
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-normal text-slate-300">
                  {item.badge}
                </span>
              </NavLink>
            ))}

            <div className="pt-4">
              <p className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                دست‌انداز سریع
              </p>
              <Link
                to={ROUTES.HOME}
                onClick={closeMobile}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faStore} className="text-base text-emerald-400" />
                  <span>مشاهده فروشگاه</span>
                </div>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xs text-slate-500"
                />
              </Link>
            </div>
          </nav>
        </div>

        {/* بخش پایینی سایدبار - اطلاعات ادمین و خروج */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center justify-between rounded-xl bg-slate-800/80 p-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow">
                {(user?.phone?.slice(-2)) || "اد"}
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-800 bg-emerald-500" />
              </div>
              <div className="overflow-hidden">
                <p className="truncate text-xs font-bold text-white" dir="ltr">
                  {user?.phone || "09120000000"}
                </p>
                <span className="inline-block rounded bg-red-500/20 px-1.5 py-0.5 text-[10px] font-medium text-red-300">
                  مدیر سیستم
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="خروج از سیستم"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
