# بک‌اند فروشگاه با FastAPI 🚀

این بک‌اند با فریم‌ورک سریع و مدرن **FastAPI** بازنویسی شده و جایگزین `json-server` شده است.

## ویژگی‌ها:
- عملکرد فوق‌العاده سریع با ساختار Asynchronous و ASGI
- اعتبارسنجی خودکار ورودی‌ها و خروجی‌ها با **Pydantic**
- پشتیبانی کامل از **CORS** برای برقراری ارتباط با فرانت‌اند React
- ماندگاری داده‌ها در فایل `db.json` با قفل همزمانی (Concurrency Thread Lock)
- سرویس‌دهی خودکار تصاویر از پوشه `images` و پوشه‌های دسته‌بندی (`laptop/`، `mobile/`، `poushak/` و...)
- مستندات خودکار و تعاملی Swagger و Redoc

---

## پیش‌نیازها و نصب:

برای اجرای بک‌اند، پایتون (نسخه 3.8 به بالا) را داشته باشید و پکیج‌های مورد نیاز را نصب کنید:

```bash
cd server
pip install -r requirements.txt
```

---

## نحوه اجرا:

### روش اول (با پایتون):
```bash
python main.py
```

### روش دوم (با Uvicorn):
```bash
uvicorn main:app --host 0.0.0.0 --port 3001 --reload
```

### روش سوم (با npm در پوشه server):
```bash
npm start
```

سرور روی پورت **3001** (یعنی `http://localhost:3001`) اجرا خواهد شد که با تنظیمات فرانت‌اند (`VITE_API_URL`) کاملاً هماهنگ است.

---

## مستندات API (Swagger UI):
پس از اجرای سرور، می‌توانید به مستندات تعاملی دسترسی داشته باشید و APIها را تست کنید:
- **Swagger UI:** [http://localhost:3001/docs](http://localhost:3001/docs)
- **Redoc:** [http://localhost:3001/redoc](http://localhost:3001/redoc)

---

## اندپوئینت‌های اصلی (Endpoints):
| متد | مسیر | توضیحات |
|---|---|---|
| `GET` | `/products` | دریافت لیست محصولات (با قابلیت فیلتر `?category=...` و `?search=...`) |
| `GET` | `/products/{id}` | دریافت مشخصات یک محصول با شناسه |
| `POST` | `/products` | افزودن محصول جدید |
| `PUT` | `/products/{id}` | ویرایش محصول |
| `DELETE` | `/products/{id}` | حذف محصول |
| `GET` | `/users` | دریافت لیست تمام کاربران |
| `GET` | `/users/{id}` | دریافت مشخصات کاربر |
| `POST` | `/users` | ثبت‌نام یا ایجاد کاربر جدید |
| `GET` | `/` | بررسی وضعیت سلامت سرور |
