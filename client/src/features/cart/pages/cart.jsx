
import { CartContext } from "../context/cartcontext";
import { useContext } from "react";
const Cart = () => {
  const {items , removeFromCart}=useContext(CartContext)

  return(
   <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-right">🛒 سبد خرید</h1>

    {/* محصولات در قالب کارت - کاملاً رسپانسیو */}
    <div className="flex flex-col gap-6">
      {items.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row md:items-center"
        >
          {/* بخش تصویر - بدون object-cover، تمام عرض در موبایل و عرض ثابت در دسکتاپ */}
          <div className="w-full md:w-48 lg:w-56 bg-gray-50 p-4 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-48 object-contain"
            />
          </div>

          {/* اطلاعات محصول */}
          <div className="flex-1 p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
            </div>
            <div className="flex flex-row md:flex-col items-center justify-between md:items-end gap-3">
              <span className="text-xl font-bold text-red-600 whitespace-nowrap">
                {product.price?.toLocaleString()} تومان
              </span>
              <button
                onClick={() => removeFromCart(product)}
                className="text-red-500 hover:text-red-700 transition text-sm font-medium"
              >
                ❌ حذف
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* وضعیت خالی */}
    {items.length === 0 && (
      <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
        <p className="text-gray-500 text-lg">سبد خرید شما خالی است! 🛍️</p>
      </div>
    )}

    {/* بخش پرداخت - فقط در صورت وجود آیتم */}
    {items.length > 0 && (
      <div className="mt-10 bg-white rounded-2xl shadow-md p-4 sm:p-6 sticky bottom-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-right">
            <p className="text-gray-600 text-sm">جمع کل</p>
            <p className="text-2xl font-bold text-gray-800">
              {items.reduce((total, item) => total + (item.price || 0), 0).toLocaleString()} تومان
            </p>
          </div>
          <button
            onClick={() => handleCheckout()}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200 shadow-md"
          >
            ادامه فرآیند خرید
          </button>
        </div>
      </div>
    )}
  </div>
</div>
  )
};

export default Cart;