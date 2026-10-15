import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faCoins,
  faTag,
  faPlus,
  faTrash,
  faSearch,
  faEye,
  faXmark,
  faCheck,
  faLayerGroup,
  faArrowUpRightFromSquare,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { productService } from "../../../api/productService";
import Button from "../../../shared/components/buttons/button";
import Input from "../../../shared/components/input";
import { ROUTES } from "../../../constants/routes";

const CATEGORY_COLORS = {
  mobile: "bg-purple-50 text-purple-700 border-purple-200",
  laptop: "bg-blue-50 text-blue-700 border-blue-200",
  poushak: "bg-amber-50 text-amber-700 border-amber-200",
  default: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function ProductUi() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "mobile",
    image: "",
  });

  // دریافت اطلاعات محصولات
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await productService.getAll();
      setProducts(Array.isArray(res) ? res : []);
    } catch (err) {
      console.error("خطا در بارگذاری لیست محصولات:", err);
      showNotification("خطا در بارگذاری محصولات", "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  // اضافه کردن محصول جدید
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!newProduct.name.trim() || !newProduct.price || !newProduct.category) {
      showNotification("لطفاً نام، قیمت و دسته‌بندی را مشخص کنید", "error");
      return;
    }

    try {
      setIsSubmitting(true);
      const imageUrl = newProduct.image.startsWith("http")
        ? newProduct.image
        : `${import.meta.env.VITE_API_URL || "http://localhost:3001"}/${newProduct.category}/${newProduct.image || "default"}.png`;

      const payload = {
        name: newProduct.name.trim(),
        price: Number(newProduct.price),
        description: newProduct.description.trim(),
        category: newProduct.category,
        image: imageUrl,
      };

      const created = await productService.create(payload);
      setProducts((prev) => [created, ...prev]);
      setNewProduct({
        name: "",
        price: "",
        description: "",
        category: "mobile",
        image: "",
      });
      setIsFormOpen(false);
      showNotification("محصول جدید با موفقیت اضافه شد", "success");
    } catch (err) {
      console.error("خطا در ثبت محصول:", err);
      showNotification("ثبت محصول با خطا مواجه شد", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // حذف محصول
  const handleDeleteProduct = async (id, name) => {
    if (window.confirm(`آیا از حذف محصول «${name}» اطمینان دارید؟`)) {
      try {
        await productService.delete(id);
        setProducts((prev) => prev.filter((p) => p.id !== id));
        showNotification("محصول مورد نظر حذف گردید", "success");
      } catch (err) {
        console.error("خطا در حذف محصول:", err);
        showNotification("خطا در حذف محصول رخ داد", "error");
      }
    }
  };

  // آمار سریع
  const stats = useMemo(() => {
    const totalCount = products.length;
    const totalValue = products.reduce((sum, p) => sum + (Number(p.price) || 0), 0);
    const categories = new Set(products.map((p) => p.category)).size;
    const avgPrice = totalCount > 0 ? Math.round(totalValue / totalCount) : 0;
    return { totalCount, totalValue, categories, avgPrice };
  }, [products]);

  // دسته‌بندی‌های یکتا
  const availableCategories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return Array.from(set);
  }, [products]);

  // محصولات فیلتر و مرتب شده
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesQuery =
          (product.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product.description || "").toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat =
          selectedCategory === "all" || product.category === selectedCategory;
        return matchesQuery && matchesCat;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return Number(a.price) - Number(b.price);
        if (sortBy === "price-desc") return Number(b.price) - Number(a.price);
        return 0; // پیش‌فرض
      });
  }, [products, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="space-y-6">
      {/* پیام اعلان (Toast) */}
      {notification && (
        <div
          className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-xl px-4 py-3 shadow-xl transition-all duration-300 text-sm font-medium ${
            notification.type === "error"
              ? "bg-red-600 text-white"
              : "bg-emerald-600 text-white"
          }`}
        >
          <FontAwesomeIcon icon={notification.type === "error" ? faXmark : faCheck} />
          <span>{notification.message}</span>
        </div>
      )}

      {/* ردیف کارت‌های آماری */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* کل محصولات */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">کل محصولات انبار</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {stats.totalCount} <span className="text-xs font-normal text-slate-400">عدد</span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FontAwesomeIcon icon={faBoxesStacked} className="text-xl" />
          </div>
        </div>

        {/* ارزش کل انبار */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">ارزش کل موجودی</p>
            <p className="mt-1 text-xl font-bold text-slate-900">
              {stats.totalValue.toLocaleString()}{" "}
              <span className="text-xs font-normal text-slate-400">تومان</span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <FontAwesomeIcon icon={faCoins} className="text-xl" />
          </div>
        </div>

        {/* دسته‌بندی‌ها */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">دسته‌بندی‌های فعال</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {stats.categories} <span className="text-xs font-normal text-slate-400">گروه</span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
            <FontAwesomeIcon icon={faTag} className="text-xl" />
          </div>
        </div>

        {/* میانگین قیمت کالاها */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">میانگین قیمت کالاها</p>
            <p className="mt-1 text-xl font-bold text-slate-900">
              {stats.avgPrice.toLocaleString()}{" "}
              <span className="text-xs font-normal text-slate-400">تومان</span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <FontAwesomeIcon icon={faLayerGroup} className="text-xl" />
          </div>
        </div>
      </div>

      {/* نوار عملیات و دکمه افزودن */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* باکس جستجو */}
          <div className="relative flex-1 max-w-md">
            <Input
              type="text"
              variant="default"
              placeholder="جستجو در نام یا توضیحات کالا..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-3 py-2 text-sm rounded-xl"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
            />
          </div>

          {/* فیلتر دسته‌بندی */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition"
          >
            <option value="all">همه دسته‌ها ({products.length})</option>
            {availableCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* مرتب‌سازی */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition"
          >
            <option value="default">مرتب‌سازی پیش‌فرض</option>
            <option value="price-asc">ارزان‌ترین</option>
            <option value="price-desc">گران‌ترین</option>
          </select>
        </div>

        {/* دکمه‌های کنترلی سمت چپ */}
        <div className="flex items-center gap-2">
          <Button
            variant="none"
            size="sm"
            onClick={fetchProducts}
            title="به‌روزرسانی لیست"
            className="border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 p-2.5 rounded-xl"
          >
            <FontAwesomeIcon icon={faRotateRight} className={isLoading ? "animate-spin" : ""} />
          </Button>

          <Button
            variant="danger"
            size="md"
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="gap-2 shadow-sm font-semibold rounded-xl text-sm"
          >
            <FontAwesomeIcon icon={isFormOpen ? faXmark : faPlus} />
            <span>{isFormOpen ? "بستن فرم" : "افزودن محصول جدید"}</span>
          </Button>
        </div>
      </div>

      {/* فرم افزودن محصول (کشویی) */}
      {isFormOpen && (
        <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-md transition-all duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                <FontAwesomeIcon icon={faPlus} className="text-sm" />
              </span>
              <h3>ثبت محصول جدید در انبار</h3>
            </div>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <form onSubmit={handleAddProduct} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* نام کالا */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  نام محصول <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="مثال: گوشی آیفون 16 پرو"
                  value={newProduct.name}
                  onChange={handleChange}
                  className="w-full p-2.5 text-sm rounded-xl"
                  required
                />
              </div>

              {/* قیمت کالا */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  قیمت محصول (تومان) <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  name="price"
                  placeholder="مثال: 45000000"
                  value={newProduct.price}
                  onChange={handleChange}
                  className="w-full p-2.5 text-sm rounded-xl"
                  required
                />
              </div>

              {/* دسته‌بندی */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  دسته‌بندی <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="category"
                    value={newProduct.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white p-2.5 text-sm text-slate-700 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  >
                    <option value="mobile">موبایل (mobile)</option>
                    <option value="laptop">لپ‌تاپ (laptop)</option>
                    <option value="poushak">پوشاک (poushak)</option>
                    <option value="digital">لوازم دیجیتال (digital)</option>
                    <option value="other">متفرقه (other)</option>
                  </select>
                </div>
              </div>

              {/* نام یا لینک تصویر */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  نام فایل تصویر یا آدرس URL
                </label>
                <Input
                  type="text"
                  name="image"
                  placeholder="مثال: iphone16 یا لینک کامل عکس"
                  value={newProduct.image}
                  onChange={handleChange}
                  className="w-full p-2.5 text-sm rounded-xl"
                />
              </div>
            </div>

            {/* توضیحات محصول */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                توضیحات کوتاه محصول
              </label>
              <textarea
                name="description"
                rows={3}
                placeholder="توضیحات و ویژگی‌های فنی کالا..."
                value={newProduct.description}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 text-sm text-slate-800 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* دکمه‌های ارسال */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <Button
                type="button"
                variant="none"
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                انصراف
              </Button>
              <Button
                type="submit"
                variant="danger"
                size="md"
                disabled={isSubmitting}
                className="px-6 py-2.5 text-sm font-semibold rounded-xl shadow-md"
              >
                {isSubmitting ? "در حال ثبت..." : "ثبت و افزودن کالا"}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* لیست و جدول محصولات */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/70 px-6 py-4">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span>📦 لیست محصولات انبار</span>
            <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-700">
              {filteredProducts.length} مورد
            </span>
          </h3>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <FontAwesomeIcon icon={faRotateRight} className="animate-spin text-3xl mb-3 text-red-500" />
            <p className="text-sm">در حال بارگذاری اطلاعات انبار...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <FontAwesomeIcon icon={faBoxesStacked} className="text-4xl mb-3 text-slate-300" />
            <p className="text-base font-medium text-slate-600">محصولی پیدا نشد!</p>
            <p className="text-xs text-slate-400 mt-1">
              عبارت جستجو را تغییر دهید یا محصول جدیدی اضافه نمایید.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-50/50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3.5">تصویر کالا</th>
                  <th className="px-6 py-3.5">نام و مشخصات</th>
                  <th className="px-6 py-3.5">دسته‌بندی</th>
                  <th className="px-6 py-3.5">قیمت</th>
                  <th className="px-6 py-3.5 text-center">عملیات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((product) => {
                  const catClass =
                    CATEGORY_COLORS[product.category] || CATEGORY_COLORS.default;

                  return (
                    <tr
                      key={product.id}
                      className="hover:bg-slate-50/80 transition-colors duration-150"
                    >
                      {/* تصویر */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-14 w-14 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            onError={(e) => {
                              e.currentTarget.src = `${import.meta.env.BASE_URL}digikala-logo.svg`;
                            }}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </td>

                      {/* نام و توضیحات */}
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-900">{product.name}</p>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 max-w-xs">
                          {product.description || "بدون توضیحات"}
                        </p>
                      </td>

                      {/* دسته‌بندی */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-block rounded-lg border px-2.5 py-1 text-xs font-semibold ${catClass}`}
                        >
                          {product.category || "متفرقه"}
                        </span>
                      </td>

                      {/* قیمت */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-bold text-slate-900">
                          {Number(product.price || 0).toLocaleString()}
                        </span>
                        <span className="mr-1 text-xs text-slate-500">تومان</span>
                      </td>

                      {/* عملیات */}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {/* لینک مشاهده در فروشگاه */}
                          <Link
                            to={`/shop-react/product/${product.id}`}
                            title="مشاهده در سایت"
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                          >
                            <FontAwesomeIcon icon={faEye} className="text-xs" />
                          </Link>

                          {/* دکمه حذف */}
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDeleteProduct(product.id, product.name)}
                            title="حذف کالا"
                            className="h-9 w-9 !p-0 rounded-lg"
                          >
                            <FontAwesomeIcon icon={faTrash} className="text-xs" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
