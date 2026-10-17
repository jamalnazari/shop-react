import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faStar,
  faShieldHalved,
  faTruckFast,
  faRotateLeft,
  faCreditCard,
  faShoppingCart,
  faStore,
  faChevronLeft,
  faHeart,
  faShareNodes,
  faCheck,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../cart/context/cartcontext";
import { ROUTES } from "../../../constants/routes";
import Button from "../../../shared/components/buttons/button";

const CATEGORY_NAMES = {
  mobile: "گوشی موبایل",
  laptop: "لپ‌تاپ و اولترابوک",
  poushak: "مد و پوشاک",
  digital: "کالای دیجیتال",
};

export default function ProductUi({ data }) {
  const { items, addToCart, removeFromCart } = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // overview | specs | reviews
  const [copied, setCopied] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const isInCart = items.some((item) => item.id === data.id);

  const colors = [
    { name: "مشکی مات", hex: "bg-slate-900", border: "border-slate-900" },
    { name: "نقره‌ای تیتانیوم", hex: "bg-slate-300", border: "border-slate-400" },
    { name: "آبی نفتی", hex: "bg-blue-600", border: "border-blue-600" },
  ];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const categoryTitle =
    CATEGORY_NAMES[data.category] || data.category || "کالای دیجیتال";

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* نوار مسیر دسترسی (Breadcrumb) */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto py-2">
          <Link to={ROUTES.HOME} className="hover:text-red-600 transition-colors">
            صفحه اصلی
          </Link>
          <FontAwesomeIcon icon={faChevronLeft} className="text-[10px] text-slate-400" />
          <Link
            to={ROUTES.CATEGORY(data.category || "all")}
            className="hover:text-red-600 transition-colors"
          >
            {categoryTitle}
          </Link>
          <FontAwesomeIcon icon={faChevronLeft} className="text-[10px] text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md">
            {data.name}
          </span>
        </nav>

        {/* کادر اصلی محصول (چیدمان ۳ ستونه دیجی‌کالایی) */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* ستون ۱: تصویر و گالری (۴ ستون در دسکتاپ) */}
            <div className="lg:col-span-4 flex flex-col items-center">
              {/* کادر تصویر اصلی با اکشن‌های سریع */}
              <div className="relative w-full aspect-square max-w-sm rounded-2xl border border-slate-100 bg-slate-50/50 p-6 flex items-center justify-center group overflow-hidden">
                {/* دکمه‌های لایک و اشتراک‌گذاری */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    title="افزودن به علاقه‌مندی‌ها"
                    className={`h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                      isLiked
                        ? "bg-red-50 text-red-600"
                        : "bg-white text-slate-400 hover:text-red-600 hover:bg-slate-50"
                    }`}
                  >
                    <FontAwesomeIcon icon={faHeart} className="text-sm" />
                  </button>

                  <button
                    onClick={handleShare}
                    title="اشتراک‌گذاری لینک کالا"
                    className="h-9 w-9 rounded-full bg-white text-slate-400 hover:text-slate-700 flex items-center justify-center transition-all duration-200 shadow-sm"
                  >
                    <FontAwesomeIcon icon={faShareNodes} className="text-sm" />
                  </button>
                </div>

                {/* پیام کپی شدن لینک */}
                {copied && (
                  <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg z-20 flex items-center gap-1.5 animate-fade-in">
                    <FontAwesomeIcon icon={faCheck} className="text-emerald-400" />
                    <span>لینک کپی شد!</span>
                  </div>
                )}

                {/* برچسب اصالت کالا */}
                <div className="absolute bottom-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                  ضمانت ۱۰۰٪ اصالت کالا
                </div>

                {/* تصویر با زوم هاور */}
                <img
                  src={data.image}
                  alt={data.name}
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}digikala-logo.svg`;
                  }}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ۳ تامب‌نیل کوچک زیر تصویر */}
              <div className="flex items-center gap-3 mt-4">
                {[0, 1, 2].map((idx) => (
                  <div
                    key={idx}
                    className={`h-16 w-16 rounded-xl border p-1 bg-white cursor-pointer transition-all ${
                      idx === 0
                        ? "border-red-500 shadow-sm"
                        : "border-slate-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={data.image}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ستون ۲: اطلاعات، مشخصات و نقد اجمالی (۵ ستون در دسکتاپ) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                {/* بج دسته‌بندی */}
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-red-50 text-red-600 border border-red-100 px-2.5 py-1 text-xs font-semibold mb-3">
                  <FontAwesomeIcon icon={faTag} className="text-[10px]" />
                  {categoryTitle}
                </span>

                {/* عنوان کالا */}
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {data.name}
                </h1>

                {/* امتیاز و دیدگاه‌ها */}
                <div className="flex items-center gap-3 mt-3 pb-4 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <FontAwesomeIcon icon={faStar} />
                    <span>۴.۷</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-500">۱۴۸ دیدگاه ثبت‌شده کاربران</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-emerald-600 font-medium">۸۹٪ رضایت خریداران</span>
                </div>

                {/* انتخاب رنگ */}
                <div className="mt-5 space-y-2">
                  <p className="text-xs font-semibold text-slate-700">
                    رنگ انتخابی:{" "}
                    <span className="text-slate-900 font-bold">
                      {colors[selectedColor].name}
                    </span>
                  </p>
                  <div className="flex items-center gap-2.5">
                    {colors.map((c, i) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(i)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                          selectedColor === i
                            ? "border-red-500 bg-red-50/50 shadow-sm ring-1 ring-red-500"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <span className={`h-3.5 w-3.5 rounded-full ${c.hex} border border-black/10`} />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ویژگی‌های کلیدی کالا */}
                <div className="mt-6 space-y-2.5">
                  <p className="text-xs font-bold text-slate-800">ویژگی‌های برجسته محصول:</p>
                  <ul className="space-y-2 text-xs text-slate-600 pr-4 list-disc marker:text-red-500 leading-relaxed">
                    <li>دسته‌بندی اصلی: {data.category}</li>
                    <li>گارانتی رسمی و پشتیبانی ۲۴ ساعته شرکتی</li>
                    <li>کد محصول در انبار: <span className="font-mono text-slate-800">{data.id}</span></li>
                    <li className="line-clamp-2">
                      {data.description || "دارای متریال درجه یک و بسته‌بندی پلمپ کارخانه‌ای"}
                    </li>
                  </ul>
                </div>
              </div>

              {/* ۴ نشان مزایای خرید */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100 text-center">
                <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-50">
                  <FontAwesomeIcon icon={faTruckFast} className="text-red-500 text-base" />
                  <span className="text-[11px] font-medium text-slate-600">تحویل اکسپرس</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-50">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-blue-500 text-base" />
                  <span className="text-[11px] font-medium text-slate-600">ضمانت اصل بودن</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-50">
                  <FontAwesomeIcon icon={faRotateLeft} className="text-emerald-500 text-base" />
                  <span className="text-[11px] font-medium text-slate-600">۷ روز بازگشت</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-50">
                  <FontAwesomeIcon icon={faCreditCard} className="text-purple-500 text-base" />
                  <span className="text-[11px] font-medium text-slate-600">پرداخت امن</span>
                </div>
              </div>
            </div>

            {/* ستون ۳: باکس خرید دیجی‌کالایی (۳ ستون در دسکتاپ) */}
            <div className="lg:col-span-3">
              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-5 shadow-sm">
                <h3 className="text-xs font-bold text-slate-800 pb-3 border-b border-slate-200 flex items-center justify-between">
                  <span>اطلاعات فروشنده و خرید</span>
                  <FontAwesomeIcon icon={faStore} className="text-red-500" />
                </h3>

                {/* اطلاعات فروشنده */}
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">فروشنده:</span>
                    <span className="font-bold text-slate-800">دیجی‌کالا</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">عملکرد فروشنده:</span>
                    <span className="font-semibold text-emerald-600">عالی (۹۸٪ رضایت)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">گارانتی:</span>
                    <span className="font-semibold text-slate-800">۱۸ ماهه رسمی</span>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60 text-emerald-700 font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>موجود در انبار - آماده ارسال</span>
                  </div>
                </div>

                {/* بخش قیمت کالا */}
                <div className="pt-4 border-t border-slate-200 text-left">
                  <p className="text-xs text-slate-400 mb-1">قیمت مصرف‌کننده:</p>
                  <div className="flex items-baseline justify-end gap-1.5 text-red-600">
                    <span className="text-2xl sm:text-3xl font-black">
                      {Number(data.price || 0).toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-slate-700">تومان</span>
                  </div>
                </div>

                {/* دکمه‌های وضعیت سبد خرید */}
                {isInCart ? (
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 py-2.5 text-xs font-bold text-emerald-700">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                      <span>این کالا در سبد خرید شماست</span>
                    </div>

                    <Link
                      to={ROUTES.CART}
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-red-600 hover:bg-red-700 py-3 text-center text-sm font-bold text-white shadow-md shadow-red-500/20 transition-all duration-200"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <span>مشاهده سبد خرید</span>
                    </Link>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(data)}
                      className="w-full text-xs text-red-500 hover:bg-red-50"
                    >
                      حذف از سبد خرید
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() => addToCart(data)}
                    className="w-full py-3.5 gap-2.5 font-bold rounded-xl shadow-lg shadow-red-500/25 transition-all text-sm"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>افزودن به سبد خرید</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* بخش تب‌های جزئیات و نقد و بررسی (Tabs Section) */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
          {/* هدر تب‌ها */}
          <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2 text-sm font-bold transition-all relative ${
                activeTab === "overview"
                  ? "text-red-600 after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-0.5 after:bg-red-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              معرفی و بررسی اجمالی
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-2 text-sm font-bold transition-all relative ${
                activeTab === "specs"
                  ? "text-red-600 after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-0.5 after:bg-red-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              مشخصات فنی کالا
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 text-sm font-bold transition-all relative ${
                activeTab === "reviews"
                  ? "text-red-600 after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-0.5 after:bg-red-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              دیدگاه و نظرات خریداران
            </button>
          </div>

          {/* محتوای تب فعال */}
          <div className="pt-6">
            {activeTab === "overview" && (
              <div className="space-y-4 max-w-4xl text-sm leading-relaxed text-slate-700">
                <h4 className="font-bold text-base text-slate-900">
                  توضیحات تکمیلی محصول: {data.name}
                </h4>
                <p className="text-slate-600 leading-7">
                  {data.description ||
                    "این کالا یکی از پرفروش‌ترین محصولات این دسته‌بندی بوده و با بهره‌گیری از آخرین استانداردهای کیفیت و متریال مقاوم تولید شده است. طراحی ارگونومیک، عملکرد باثبات و رضایت بالای خریداران از ویژگی‌های شاخص آن است."}
                </p>
                <p className="text-slate-600 leading-7">
                  همچنین کالا دارای ضمانت سلامت فیزیکی هنگام تحویل و اصالت قطعات می‌باشد. خریداران گرامی می‌توانند تا ۷ روز پس از دریافت، طبق قوانین فروشگاه از خدمات تست و عودت بهره‌مند گردند.
                </p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="max-w-3xl">
                <table className="w-full text-right text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-600 w-1/3">نام کامل محصول</td>
                      <td className="p-3.5 text-slate-800 font-medium">{data.name}</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-600">دسته‌بندی</td>
                      <td className="p-3.5 text-slate-800">{categoryTitle}</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-600">شناسه اختصاصی کالا</td>
                      <td className="p-3.5 text-slate-800 font-mono">{data.id}</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-600">گارانتی و خدمات پس از فروش</td>
                      <td className="p-3.5 text-slate-800">۱۸ ماه گارانتی معتبر شرکتی</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-600">اصالت کالا</td>
                      <td className="p-3.5 text-emerald-700 font-bold">اورجینال و پلمپ کارخانه‌ای</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4 max-w-3xl">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">
                    م‌ع
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-800">محمد علی‌پور</span>
                      <span className="text-[10px] text-slate-400">خریدار تاییدشده</span>
                    </div>
                    <div className="text-amber-500 text-xs my-1">
                      ★★★★★
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      بسیار محصول باکیفیت و عالیه. بسته‌بندی کاملاً سالم رسید و از خریدم خیلی راضی هستم. پیشنهاد می‌کنم.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                    س‌ر
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-800">سارا رضایی</span>
                      <span className="text-[10px] text-slate-400">خریدار تاییدشده</span>
                    </div>
                    <div className="text-amber-500 text-xs my-1">
                      ★★★★☆
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      ارسال به موقع بود و جنسش همون چیزی بود که توی عکس و مشخصات نوشته بودن.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
