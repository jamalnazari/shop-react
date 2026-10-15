import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faTruckFast,
  faHeadset,
  faMoneyBillWave,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { ROUTES } from "../../constants/routes";

// ویژگی‌های فروشگاه
const FEATURES = [
  { icon: faTruckFast, title: "ارسال سریع" },
  { icon: faHeadset, title: "پشتیبانی 24 ساعته" },
  { icon: faMoneyBillWave, title: "پرداخت در محل" },
  { icon: faShieldHalved, title: "ضمانت اصل بودن کالا" },
];

// فقط صفحه‌هایی که واقعاً در سایت وجود دارند
const QUICK_LINKS = [
  { to: `${ROUTES.HOME}/`, label: "صفحه‌ی اصلی" },
  { to: ROUTES.CART, label: "سبد خرید" },
  { to: ROUTES.LOGIN, label: "ورود | ثبت‌نام" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // max-lg:pb-12 => جا برای نوار پایینی موبایل تا روی فوتر را نپوشاند
    <footer dir="rtl" className="w-full border-t border-slate-200 bg-white max-lg:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* لوگو و دکمه‌ی رفتن به بالا */}
        <div className="flex items-center justify-between gap-4 pt-8">
          <img
            src={`${import.meta.env.BASE_URL}digikala-logo.svg`}
            alt="دیجی‌کالا"
            className="h-auto w-[130px] md:w-[170px]"
          />
          <button
            type="button"
            onClick={scrollToTop}
            className="flex shrink-0 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-600 transition-colors duration-200 hover:bg-slate-50"
          >
            رفتن به بالا
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
        </div>

        {/* اطلاعات تماس */}
        <div className="mt-5 flex flex-col gap-2 text-xs text-slate-500 md:flex-row md:items-center md:gap-4">
          <p>
            تلفن پشتیبانی:{" "}
            <span dir="ltr" className="font-medium text-slate-700">021-61930000</span>
            <span className="mx-2 text-slate-300">|</span>
            <span dir="ltr" className="font-medium text-slate-700">021-91000100</span>
          </p>
          <span className="hidden text-slate-300 md:inline">|</span>
          <p>هفت روز هفته، 24 ساعته پاسخگو هستیم</p>
        </div>

        {/* ویژگی‌های فروشگاه */}
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center gap-3 rounded-xl bg-slate-50 px-3 py-5 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-600">
                <FontAwesomeIcon icon={feature.icon} />
              </span>
              <span className="text-xs text-slate-600">{feature.title}</span>
            </li>
          ))}
        </ul>

        {/* دسترسی سریع */}
        <nav aria-label="دسترسی سریع" className="mt-8">
          <h2 className="mb-3 text-sm font-bold text-slate-700">دسترسی سریع</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-slate-500 transition-colors duration-200 hover:text-red-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* نوار پایینی */}
        <div className="mt-8 border-t border-slate-200 py-5 text-center text-xs leading-6 text-slate-400">
          <p>این سایت یک پروژه‌ی آموزشی است و هیچ ارتباطی با فروشگاه دیجی‌کالا ندارد.</p>
          <p>ساخته‌شده با React و Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};