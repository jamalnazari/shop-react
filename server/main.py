import os
import json
import uuid
import threading
from typing import List, Optional
from pathlib import Path

from fastapi import FastAPI, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

# مسیر فایل‌های داده و تصاویر
BASE_DIR = Path(__file__).resolve().parent
DB_FILE = BASE_DIR / "db.json"
IMAGES_DIR = BASE_DIR / "images"

# قفل همزمانی برای نوشتن در فایل
db_lock = threading.Lock()

app = FastAPI(
    title="فروشگاه دیجی‌کالا | API بک‌اند",
    description="سرویس بک‌اند با فریم‌ورک سریع و مدرن FastAPI برای پروژه Shop-React",
    version="1.0.0",
)

# تنظیمات CORS برای دسترسی فرانت‌اند
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- توابع کمکی خواندن و نوشتن دیتابیس JSON ---
def load_db() -> dict:
    with db_lock:
        if not DB_FILE.exists():
            return {"products": [], "users": []}
        try:
            with open(DB_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Error reading db.json: {e}")
            return {"products": [], "users": []}


def save_db(data: dict) -> None:
    with db_lock:
        with open(DB_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)


# --- مدل‌های اعتبارسنجی داده Pydantic ---
class ProductBase(BaseModel):
    name: str = Field(..., description="نام محصول")
    price: float = Field(..., description="قیمت محصول به تومان")
    description: Optional[str] = Field("", description="توضیحات کوتاه محصول")
    category: str = Field(..., description="دسته‌بندی محصول (mobile, laptop, poushak, ...)")
    image: Optional[str] = Field("", description="آدرس کامل یا نام تصویر محصول")


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name: Optional[str] = None
    price: Optional[float] = None
    description: Optional[str] = None
    category: Optional[str] = None
    image: Optional[str] = None


class ProductResponse(ProductBase):
    id: str


class UserBase(BaseModel):
    phone: str = Field(..., description="شماره موبایل کاربر")


class UserCreate(UserBase):
    pass


class UserResponse(UserBase):
    id: str


# --- روت‌های مدیریت محصولات (Products) ---

@app.get(
    "/products",
    response_model=List[ProductResponse],
    summary="دریافت لیست محصولات",
    tags=["محصولات"]
)
def get_products(
    category: Optional[str] = Query(None, description="فیلتر بر اساس دسته‌بندی"),
    search: Optional[str] = Query(None, description="جستجو در نام یا توضیحات"),
):
    db = load_db()
    products = db.get("products", [])

    if category:
        products = [p for p in products if p.get("category") == category]

    if search:
        s = search.lower()
        products = [
            p for p in products
            if s in str(p.get("name", "")).lower() or s in str(p.get("description", "")).lower()
        ]

    return products


@app.get(
    "/products/{product_id}",
    response_model=ProductResponse,
    summary="دریافت مشخصات یک محصول با شناسه",
    tags=["محصولات"]
)
def get_product_by_id(product_id: str):
    db = load_db()
    products = db.get("products", [])
    for p in products:
        if str(p.get("id")) == str(product_id):
            return p
    raise HTTPException(status_code=404, detail="محصول مورد نظر یافت نشد")


@app.post(
    "/products",
    response_model=ProductResponse,
    status_code=status.HTTP_201_CREATED,
    summary="افزودن محصول جدید",
    tags=["محصولات"]
)
def create_product(product: ProductCreate):
    db = load_db()
    products = db.get("products", [])

    # ساخت شناسه کوتاه یکتا شبیه شناسه json-server
    new_id = uuid.uuid4().hex[:11]
    
    product_dict = product.model_dump()
    product_dict["id"] = new_id

    # تنظیم خودکار آدرس تصویر در صورتی که فقط نام فایل وارد شده باشد
    if product_dict["image"] and not product_dict["image"].startswith("http"):
        img_name = product_dict["image"].replace(".png", "")
        product_dict["image"] = f"http://localhost:3001/{product_dict['category']}/{img_name}.png"

    products.append(product_dict)
    db["products"] = products
    save_db(db)

    return product_dict


@app.put(
    "/products/{product_id}",
    response_model=ProductResponse,
    summary="به‌روزرسانی اطلاعات یک محصول",
    tags=["محصولات"]
)
def update_product(product_id: str, updated_product: ProductUpdate):
    db = load_db()
    products = db.get("products", [])

    for i, p in enumerate(products):
        if str(p.get("id")) == str(product_id):
            update_data = updated_product.model_dump(exclude_unset=True)
            products[i].update(update_data)
            db["products"] = products
            save_db(db)
            return products[i]

    raise HTTPException(status_code=404, detail="محصول برای ویرایش پیدا نشد")


@app.delete(
    "/products/{product_id}",
    status_code=status.HTTP_200_OK,
    summary="حذف یک محصول",
    tags=["محصولات"]
)
def delete_product(product_id: str):
    db = load_db()
    products = db.get("products", [])

    initial_len = len(products)
    products = [p for p in products if str(p.get("id")) != str(product_id)]

    if len(products) == initial_len:
        raise HTTPException(status_code=404, detail="محصول مورد نظر برای حذف یافت نشد")

    db["products"] = products
    save_db(db)
    return {"message": "محصول با موفقیت حذف شد", "id": product_id}


# --- روت‌های مدیریت کاربران (Users) ---

@app.get(
    "/users",
    response_model=List[UserResponse],
    summary="دریافت لیست تمام کاربران",
    tags=["کاربران"]
)
def get_users():
    db = load_db()
    return db.get("users", [])


@app.get(
    "/users/{user_id}",
    response_model=UserResponse,
    summary="دریافت مشخصات یک کاربر",
    tags=["کاربران"]
)
def get_user_by_id(user_id: str):
    db = load_db()
    users = db.get("users", [])
    for u in users:
        if str(u.get("id")) == str(user_id):
            return u
    raise HTTPException(status_code=404, detail="کاربر پیدا نشد")


@app.post(
    "/users",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary="ثبت‌نام یا افزودن کاربر جدید",
    tags=["کاربران"]
)
def create_user(user: UserCreate):
    db = load_db()
    users = db.get("users", [])

    # اگر کاربر قبلاً وجود داشت همان را برمی‌گردانیم
    for u in users:
        if u.get("phone") == user.phone:
            return u

    new_id = str(len(users) + 1)
    user_dict = user.model_dump()
    user_dict["id"] = new_id

    users.append(user_dict)
    db["users"] = users
    save_db(db)

    return user_dict


# --- سرویس‌دهی فایل‌های استاتیک تصاویر ---
# ۱. مانت پوشه عمومی /images
if IMAGES_DIR.exists():
    app.mount("/images", StaticFiles(directory=str(IMAGES_DIR)), name="images")

    # ۲. مانت پوشه‌های دسته‌بندی مانند /laptop, /mobile, /poushak مستقیماً در روت
    # تا لینک‌های قبلی در دیتابیس دقیقاً مثل json-server بدون تغییر کار کنند
    for cat_dir in os.listdir(IMAGES_DIR):
        cat_path = IMAGES_DIR / cat_dir
        if cat_path.is_dir():
            app.mount(f"/{cat_dir}", StaticFiles(directory=str(cat_path)), name=cat_dir)


@app.get("/", summary="وضعیت سلامت سرور", tags=["عمومی"])
def root():
    return {
        "status": "online",
        "service": "Shop-React FastAPI Backend",
        "documentation": "/docs",
        "redoc": "/redoc",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3001, reload=True)
