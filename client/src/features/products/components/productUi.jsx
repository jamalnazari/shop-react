import { CartContext } from "../../cart/context/cartcontext";
import { useContext } from "react";
export default function ProductUi({data}){
  const { addToCart } = useContext(CartContext);

    return(
        <div className="min-h-screen bg-gray-100 pt-20 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* سمت راست - تصویر محصول */}
          <div className="w-full md:w-1/2 bg-gray-50 p-6 md:p-8 flex items-center justify-center">
            <img
              src={data.image}
              alt={data.name}
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>

          {/* سمت چپ - اطلاعات محصول */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {data.name}
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {data.description}
              </p>
              <div className="mt-6">
                <span className="text-3xl font-bold text-red-600">
                  {data.price?.toLocaleString()} تومان
                </span>
              </div>
            </div>

            <button
              onClick={() => addToCart(data)}
              className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}