import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loade from "../sheared/Loading/CircleLoading";
import { useCart } from "../features/cart/CartContext.jsx";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, removeFromCart, items } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("خطا در دریافت اطلاعات محصول. لطفا دوباره تلاش کنید.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: "100px" }}>
        <Loade />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="alert alert-danger text-center">
          {error || "محصول یافت نشد."}
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            بازگشت
          </button>
        </div>
      </div>
    )
  }

  const isInCart = items.some((item) => item.id === product.id);
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="container" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <div className="row">
        {/* تصویر محصول */}
        <div className="col-12 col-md-6 mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
          {product.images && product.images.length > 1 && (
            <div className="row mt-3">
              {product.images.slice(0, 4).map((img, idx) => (
                <div key={idx} className="col-3">
                  <img
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    className="img-fluid rounded"
                    style={{
                      height: "80px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: "2px solid #ddd",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* اطلاعات محصول */}
        <div className="col-12 col-md-6 text-end">
          <h2 className="mb-3 fontG">{product.title}</h2>

          {product.brand && (
            <p className="text-muted mb-2">
              <strong>برند:</strong> {product.brand}
            </p>
          )}

          {product.category && (
            <p className="text-muted mb-2">
              <strong>دسته‌بندی:</strong> {product.category}
            </p>
          )}

          {product.rating && (
            <div className="mb-3">
              <span className="text-warning">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="ms-2">({product.rating})</span>
            </div>
          )}

          <div className="mb-4">
            <h3 className="text-success fw-bold">
              {product.price?.toLocaleString() || product.price}$
            </h3>
            {product.discountPercentage && (
              <p className="text-muted small">
                تخفیف: {product.discountPercentage}%
              </p>
            )}
          </div>

          <div className="mb-4">
            <h5>توضیحات:</h5>
            <p className="text-muted">{product.description}</p>
          </div>

          {product.stock !== undefined && (
            <p className="mb-3">
              <strong>موجودی:</strong>{" "}
              <span className={product.stock > 0 ? "text-success" : "text-danger"}>
                {product.stock > 0 ? `${product.stock} عدد` : "ناموجود"}
              </span>
            </p>
          )}

          {/* دکمه‌های افزودن و حذف از سبد خرید */}
          <div className="d-flex gap-3 justify-content-end align-items-center mt-4">
            {isInCart && (
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeFromCart(product.id)}
                  disabled={quantity <= 0}
                >
                  حذف از سبد خرید
                </button>
                <span className="fw-bold">تعداد: {quantity}</span>
              </div>
            )}
            <button
              className={`btn ${isInCart ? "btn-success" : "btn-primary"}`}
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
            >
              {isInCart ? "افزودن بیشتر" : "افزودن به سبد خرید"}
            </button>
          </div>

          <div className="mt-4">
            <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
