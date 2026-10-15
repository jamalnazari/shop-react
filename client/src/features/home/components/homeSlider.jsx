import { useEffect, useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const BASE_IMGS = [
  `${import.meta.env.BASE_URL}slide-1.png`,
  `${import.meta.env.BASE_URL}slide-2.png`,
  `${import.meta.env.BASE_URL}slide-3.png`,
  `${import.meta.env.BASE_URL}slide-4.png`,
  `${import.meta.env.BASE_URL}slide-5.png`,
  `${import.meta.env.BASE_URL}slide-6.png`,
];

// ساخت اسلایدهای افزوده برای حلقه بی‌نهایت و روان (Infinite Loop)
const EXTENDED_SLIDES = [
  BASE_IMGS[BASE_IMGS.length - 1], // کلون اسلاید آخر در ابتدا
  ...BASE_IMGS,
  BASE_IMGS[0],                    // کلون اسلاید اول در انتها
];

export const Homeslider = () => {
  // شاخص از 1 شروع می‌شود (اسلاید اول اصلی)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // رفتن به اسلاید بعدی (تصویر فعلی به راست می‌رود، تصویر بعدی از چپ وارد می‌شود)
  const nextSlide = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // رفتن به اسلاید قبلی
  const prevSlide = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // رفتن به اسلاید خاص از طریق دات‌ها
  const goToSlide = (slideIndex) => {
    setWithTransition(true);
    setCurrentIndex(slideIndex + 1);
  };

  // ریست بی‌وقفه پس از پایان انیمیشن در اسلایدهای کلون
  const handleTransitionEnd = () => {
    if (currentIndex >= EXTENDED_SLIDES.length - 1) {
      // اگر به کلون اسلاید اول رسیدیم، بدون انیمیشن به اسلاید 1 اصلی بپر
      setWithTransition(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      // اگر به کلون اسلاید آخر رسیدیم، بدون انیمیشن به اسلاید آخر اصلی بپر
      setWithTransition(false);
      setCurrentIndex(BASE_IMGS.length);
    }
  };

  // تایمر خودکار تغییر اسلایدها (هر ۳.۵ ثانیه)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // رویدادهای لمسی (Touch / Swipe) برای موبایل
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // سوایپ به چپ
      prevSlide();
    } else if (diff < -50) {
      // سوایپ به راست
      nextSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // محاسبه ایندکس فعال برای دات‌های پایینی (بین 0 تا 5)
  const activeDotIndex =
    currentIndex === 0
      ? BASE_IMGS.length - 1
      : currentIndex === EXTENDED_SLIDES.length - 1
      ? 0
      : currentIndex - 1;

  return (
    <div
      className="group relative w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm mb-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* تراک اسلایدر با جهت RTL: در هر گام اسلاید فعلی به سمت راست خارج شده و اسلاید بعدی از چپ وارد می‌شود */}
      <div
        dir="rtl"
        onTransitionEnd={handleTransitionEnd}
        className={`flex w-full ${
          withTransition
            ? "transition-transform duration-700 ease-in-out"
            : "transition-none"
        }`}
        style={{
          transform: `translateX(${currentIndex * 100}%)`,
        }}
      >
        {EXTENDED_SLIDES.map((src, index) => (
          <div
            key={index}
            className="w-full shrink-0 min-w-full aspect-[2880/600] max-h-[420px] bg-slate-200"
          >
            <img
              src={src}
              onError={(e) => {
                if (!e.currentTarget.dataset.retried) {
                  e.currentTarget.dataset.retried = "true";
                  const fallbackNum = (index % BASE_IMGS.length) + 1;
                  e.currentTarget.src = `./slide-${fallbackNum}.png`;
                }
              }}
              className="h-full w-full object-cover select-none pointer-events-none"
              alt={`بنر اسلایدر ${index}`}
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* دکمه‌های ناوبری بعدی و قبلی */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="اسلاید بعدی"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110 shadow-lg z-10"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
      </button>

      <button
        type="button"
        onClick={prevSlide}
        aria-label="اسلاید قبلی"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110 shadow-lg z-10"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
      </button>

      {/* دات‌های نشانگر اسلاید فعال در پایین */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
        {BASE_IMGS.map((_, dotIdx) => {
          const isActive = dotIdx === activeDotIndex;
          return (
            <button
              key={dotIdx}
              type="button"
              onClick={() => goToSlide(dotIdx)}
              aria-label={`رفتن به اسلاید ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-6 bg-red-600 shadow-sm"
                  : "w-2 bg-white/70 hover:bg-white"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
