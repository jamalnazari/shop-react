# 🛍️ فروشگاه اینترنتی ری‌اکت

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" alt="Vite 7">
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white" alt="React Router 7">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3">
  <img src="https://img.shields.io/badge/json--server-1.0_beta-555555" alt="json-server">
</p>

این پروژه یک فروشگاه اینترنتی با الهام از ظاهر دیجی‌کالا است که با React و Vite ساخته شده. محصولات و کاربران از یک API آزمایشی خوانده می‌شوند که با [json-server](https://github.com/typicode/json-server) ساخته شده است. سبد خرید و اطلاعات ورود کاربر هم در `localStorage` مرورگر ذخیره می‌شوند.

🔗 **[مشاهده‌ی نسخه‌ی آنلاین](https://jamalnazari.github.io/shop-react/)**

> **توجه:** نسخه‌ی آنلاین فقط شامل بخش فرانت‌اند است و آدرس API در آن روی `http://localhost:3001` تنظیم شده؛ بنابراین تا وقتی سرور پروژه را روی سیستم خودتان اجرا نکنید، محصولات نمایش داده نمی‌شوند.

## ✨ ویژگی‌ها

- **صفحه‌ی اصلی:** بنر اسلایدی که هر ۳ ثانیه عوض می‌شود، اسلایدر «شگفت‌انگیز» با ۴٪ تخفیف، بخش «خرید بر اساس دسته‌بندی» و فهرست همه‌ی محصولات
- **صفحه‌ی محصول:** تصویر، توضیحات و قیمت هر کالا به همراه دکمه‌ی «افزودن به سبد خرید»
- **سبد خرید:** حذف کالا و محاسبه‌ی جمع کل؛ محتوای سبد در مرورگر ذخیره می‌شود و با بستن صفحه از بین نمی‌رود
- **ورود ساده:** ورود با شماره موبایل یا ایمیل، به‌صورت شبیه‌سازی‌شده و بدون رمز عبور یا کد تأیید
- **پنل مدیریت:** افزودن و حذف محصول و مشاهده‌ی فهرست کاربران؛ فقط پس از ورود در دسترس است
- **صفحه‌ی دسته‌بندی:** نمایش محصولات یک دسته از API عمومی [DummyJSON](https://dummyjson.com)
- **طراحی واکنش‌گرا:** نوار ناوبری پایین صفحه در موبایل و هدری که در دسکتاپ هنگام اسکرول کوچک می‌شود
- **نمایش وضعیت:** نشانگر بارگذاری و پیام خطا هنگام دریافت داده‌ها از سرور
- **فونت وزیرمتن** برای نمایش خواناتر متن فارسی

## 🧰 ابزارها و تکنولوژی‌ها

<div dir="rtl">

| ابزار | کاربرد |
|---|---|
| React 19 | ساخت رابط کاربری |
| Vite 7 | سرور توسعه و ساخت نسخه‌ی نهایی |
| React Router 7 | مسیریابی بین صفحه‌ها |
| Tailwind CSS 3 | استایل‌دهی |
| Axios | ارتباط با API |
| Font Awesome | آیکون‌ها |
| json-server | API آزمایشی برای محصولات و کاربران |

</div>

## 📋 پیش‌نیازها

- محیط اجرای **Node.js** نسخه‌ی 22.12 یا جدیدتر (بسته‌ی json-server به این نسخه نیاز دارد)
- مدیر بسته‌ی **npm** که همراه Node.js نصب می‌شود

## 🚀 نصب و اجرا

پروژه دو بخش دارد که باید هم‌زمان اجرا شوند: سرور در پوشه‌ی `server` و کلاینت در پوشه‌ی `client`.

### ۱. دریافت پروژه

```bash
git clone https://github.com/jamalnazari/shop-react.git
cd shop-react
```

### ۲. اجرای سرور

```bash
cd server
npm install
npm start
```

سرور روی پورت 3001 اجرا می‌شود؛ این ترمینال را باز نگه دارید.

### ۳. اجرای کلاینت

در یک ترمینال جدید و از ریشه‌ی پروژه:

```bash
cd client
npm install
npm run dev
```

سپس آدرس <code dir="ltr">http://localhost:5173/shop-react/</code> را در مرورگر باز کنید.

## ⚙️ تنظیمات

آدرس API از متغیر محیطی `VITE_API_URL` خوانده می‌شود و مقدار پیش‌فرض آن `http://localhost:3001` است. برای تغییر آن، فایل `client/.env` را بسازید:

```env
VITE_API_URL=http://localhost:3001
```

> **نکته:** آدرس تصاویر در `server/db.json` و درخواست‌های پنل مدیریت هنوز به‌صورت ثابت روی `http://localhost:3001` نوشته شده‌اند؛ اگر آدرس سرور را عوض کردید، این موارد را هم اصلاح کنید.

## 📜 دستورها

دستورهای پوشه‌ی `client`:

<div dir="rtl">

| دستور | کاربرد |
|---|---|
| `npm run dev` | اجرای سرور توسعه (معادل `npm start`) |
| `npm run build` | ساخت نسخه‌ی نهایی در پوشه‌ی `dist` |
| `npm run preview` | اجرای نسخه‌ی ساخته‌شده به‌صورت محلی |
| `npm run deploy` | ساخت و انتشار روی GitHub Pages |
| `npm run watch:css` | ساخت فایل `src/output.css` از روی `src/input.css` با Tailwind در حالت watch |

</div>

در پوشه‌ی `server` فقط دستور `npm start` وجود دارد که json-server را روی پورت 3001 اجرا می‌کند؛ داده‌ها از `db.json` و تصاویر از پوشه‌ی `images` خوانده می‌شوند.

## 🗺️ صفحه‌ها و مسیرها

همه‌ی مسیرها با پیشوند <code dir="ltr">/shop-react</code> شروع می‌شوند تا با آدرس GitHub Pages هماهنگ باشند.

<div dir="rtl">

| مسیر | صفحه | دسترسی |
|---|---|---|
| <code dir="ltr">/shop-react/</code> | صفحه‌ی اصلی | عمومی |
| <code dir="ltr">/shop-react/product/:id</code> | جزئیات محصول | عمومی |
| <code dir="ltr">/shop-react/cart</code> | سبد خرید | عمومی |
| <code dir="ltr">/shop-react/login</code> | ورود / ثبت‌نام | عمومی |
| <code dir="ltr">/shop-react/categories</code> | دسته‌بندی‌ها (در حال توسعه) | عمومی |
| <code dir="ltr">/shop-react/category/:slug</code> | محصولات یک دسته از DummyJSON، مثلاً `smartphones` | عمومی |
| <code dir="ltr">/shop-react/admin/products</code> | مدیریت محصولات | نیاز به ورود |
| <code dir="ltr">/shop-react/admin/users</code> | فهرست کاربران | نیاز به ورود |

</div>

در منوی سایت لینکی به پنل مدیریت وجود ندارد؛ برای رفتن به آن، پس از ورود آدرسش را مستقیم در مرورگر وارد کنید.

## 🔌 رابط برنامه‌نویسی سرور (API)

سرور با json-server ساخته شده و مهم‌ترین مسیرهای آن این‌ها هستند:

<div dir="rtl">

| متد | مسیر | کاربرد |
|---|---|---|
| `GET` | <code dir="ltr">/products</code> | فهرست همه‌ی محصولات |
| `GET` | <code dir="ltr">/products?category=mobile</code> | محصولات یک دسته |
| `GET` | <code dir="ltr">/products/:id</code> | اطلاعات یک محصول |
| `POST` | <code dir="ltr">/products</code> | افزودن محصول |
| `DELETE` | <code dir="ltr">/products/:id</code> | حذف محصول |
| `GET` | <code dir="ltr">/users</code> | فهرست کاربران |

</div>

تصاویر پوشه‌ی `server/images` هم به‌صورت فایل ثابت در دسترس‌اند؛ مثلاً فایل `server/images/mobile/iphone16.png` از آدرس `http://localhost:3001/mobile/iphone16.png` باز می‌شود.

### ساختار داده‌ها

هر محصول در `server/db.json` این شکل را دارد:

```json
{
  "id": "HiOiD20qaSU",
  "name": "iphone16",
  "price": 240000000,
  "description": "گوشی آیفون 16 معمولی با 128 گیگ حافظه و 4 رم",
  "category": "mobile",
  "image": "http://localhost:3001/mobile/iphone16.png"
}
```

- قیمت‌ها به **تومان** هستند.
- دسته‌های فعلی عبارت‌اند از `laptop`، `mobile`، `poushak` (پوشاک) و `super` (سوپرمارکت).
- هر کاربر فقط دو فیلد `id` و `phone` (شماره موبایل) دارد.

### افزودن محصول از پنل مدیریت

1. تصویر محصول را با فرمت PNG در زیرپوشه‌ی هم‌نام با دسته در `server/images` قرار دهید؛ مثلاً `server/images/mobile/note15.png`.
2. وارد سایت شوید و صفحه‌ی <code dir="ltr">/shop-react/admin/products</code> را باز کنید.
3. در فرم، دسته را `mobile` و نام تصویر را بدون پسوند (`note15`) وارد کنید.

## 📁 ساختار پروژه

```text
shop-react/
├── client/                    # فرانت‌اند React
│   ├── public/                # تصاویر ثابت مثل بنرها و لوگو
│   ├── src/
│   │   ├── api/               # سرویس‌های ارتباط با سرور با Axios
│   │   ├── app/               # چیدمان کلی، نوار ناوبری، فوتر و مسیرها
│   │   ├── constants/         # ثابت‌ها از جمله آدرس مسیرها
│   │   ├── context/           # کانتکست ورود کاربر و محصولات
│   │   ├── features/          # بخش‌های اصلی برنامه
│   │   │   ├── admin/         # پنل مدیریت
│   │   │   ├── cart/          # سبد خرید
│   │   │   ├── dasteha/       # صفحه‌ی دسته‌بندی‌ها
│   │   │   ├── home/          # صفحه‌ی اصلی
│   │   │   ├── login-sinup/   # صفحه‌ی ورود
│   │   │   └── products/      # جزئیات محصول و صفحه‌ی دسته
│   │   ├── hooks/             # هوک‌های سفارشی
│   │   ├── shared/            # کامپوننت‌های مشترک مثل لودینگ و پیام خطا
│   │   ├── sheared/           # فونت‌های وزیرمتن و کامپوننت لودینگ
│   │   └── utils/             # توابع کمکی سبد خرید و تخفیف
│   ├── vite.config.js
│   └── package.json
├── server/                    # سرور آزمایشی با json-server
│   ├── db.json                # داده‌های محصولات و کاربران
│   ├── images/                # تصاویر محصولات به تفکیک دسته
│   └── package.json
└── eslint.config.js
```

## 🌐 انتشار روی GitHub Pages

برای ساخت نسخه‌ی نهایی و انتشار آن روی شاخه‌ی `gh-pages`:

```bash
cd client
npm run deploy
```

مسیر پایه‌ی سایت (<code dir="ltr">/shop-react/</code>) در دو جا تعریف شده است: گزینه‌ی `base` در `client/vite.config.js` و ثابت `BASE_PATH` در `client/src/constants/routes.js`. اگر نام مخزن را تغییر دادید، هر دو را به‌روز کنید.

> **توجه:** GitHub Pages فقط فایل‌های ثابت را میزبانی می‌کند. برای داشتن API آنلاین، سرور را روی سرویس دیگری اجرا کنید و هنگام build، متغیر `VITE_API_URL` را روی آدرس آن تنظیم کنید.

## 🛠️ رفع اشکال

- **پیام «مشکل در اتصال به اینترنت» در صفحه‌ی اصلی:** یعنی برنامه به API دسترسی ندارد؛ مطمئن شوید سرور در پوشه‌ی `server` با دستور `npm start` اجرا شده باشد.
- **خطا در نصب بسته‌ی `sqlite3` در پوشه‌ی `server`:** این بسته فعلاً در کد پروژه استفاده نمی‌شود؛ می‌توانید وابستگی‌ها را با `npm install --ignore-scripts` نصب کنید.

## 🛣️ کارهای آینده

- پیاده‌سازی مرحله‌ی پرداخت؛ دکمه‌ی «ادامه فرآیند خرید» فعلاً کاری انجام نمی‌دهد
- ورود واقعی با کد تأیید و اضافه کردن دکمه‌ی خروج از حساب
- محدود کردن پنل مدیریت به مدیران؛ فعلاً هر کاربری که وارد شده باشد به آن دسترسی دارد
- تکمیل صفحه‌ی دسته‌بندی‌ها و خواندن محصولات هر دسته از سرور خود پروژه
- فعال کردن جستجوی محصولات
- امکان انتخاب تعداد هر کالا در سبد خرید
- رفع خطای 404 هنگام رفرش صفحه‌های داخلی (مثل سبد خرید) روی GitHub Pages

## 👤 سازنده

طراحی و توسعه: [Jamal Nazari](https://github.com/jamalnazari)

---

این پروژه غیررسمی است و هیچ ارتباطی با دیجی‌کالا ندارد؛ نام و لوگوی دیجی‌کالا فقط برای شبیه‌سازی ظاهر سایت استفاده شده‌اند.
