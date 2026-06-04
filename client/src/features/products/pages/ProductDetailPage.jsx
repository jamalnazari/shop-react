import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../cart/context/cartcontext";
import { useContext } from "react";

const ProductDetailPage = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-600">در حال بارگذاری...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-red-600">محصول یافت نشد</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* سمت راست - تصویر محصول */}
          <div className="w-full md:w-1/2 bg-gray-50 p-6 md:p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>

          {/* سمت چپ - اطلاعات محصول */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-6">
                <span className="text-3xl font-bold text-red-600">
                  {product.price?.toLocaleString()} تومان
                </span>
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;