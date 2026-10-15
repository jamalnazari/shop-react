import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../cart/context/cartcontext";
import { ROUTES } from "../../../constants/routes";
import Button from "../../../shared/components/buttons/button";

export default function ProductUi({data}){
  const { items, addToCart } = useContext(CartContext);
  // آیا این محصول از قبل در سبد خرید هست؟
  const isInCart = items.some((item) => item.id === data.id);

    return(
        <div dir="rtl" className="min-h-screen bg-gray-100 pt-20 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
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

            {/* اگر محصول در سبد است پیام و لینک سبد را نشان بده، وگرنه دکمه‌ی افزودن را */}
            {isInCart ? (
              <div className="mt-8 flex flex-col gap-3">
                <p className="flex items-center justify-center gap-2 rounded-xl bg-green-50 py-3 font-medium text-green-700">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  این کالا در سبد خرید شماست
                </p>
                <Link
                  to={ROUTES.CART}
                  className="w-full rounded-xl border-2 border-red-600 py-3 text-center font-bold text-red-600 transition-colors duration-200 hover:bg-red-50 hover:text-red-700"
                >
                  مشاهده‌ی سبد خرید
                </Link>
              </div>
            ) : (
              <Button
                variant="danger"
                size="lg"
                onClick={() => addToCart(data)}
                className="mt-8 w-full font-bold shadow-md rounded-xl"
              >
                افزودن به سبد خرید
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
    )
}