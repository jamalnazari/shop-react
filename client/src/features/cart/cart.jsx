import { useCart } from "./CartContext.jsx";

const Cart = () => {
  const { items, totalItems, totalPrice, addToCart, removeFromCart, clearCart } =
    useCart();

  console.log("Cart component rendered with items:", items);

  if (!items.length) {
    return (
      <div className="container mt-5 p-5 bg-light text-center rounded">
        <h4 className="mb-3">سبد خرید خالی است</h4>
        <p className="text-muted mb-0">
          برای افزودن کالا، روی دکمه «افزودن به سبد خرید» در صفحه‌ی محصول کلیک
          کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-5 p-4 bg-light rounded">
      <h3 className="mb-4 text-end">سبد خرید</h3>
      {items.map((item) => (
        <div
          key={item.id}
          className="row align-items-center mb-3 border-bottom pb-3"
        >
          <div className="col-3 col-md-2">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="img-fluid rounded"
              style={{ maxHeight: "80px", objectFit: "cover" }}
            />
          </div>
          <div className="col-5 col-md-6 text-end">
            <h5 className="mb-1">{item.title}</h5>
            {item.description && (
              <p className="text-muted small mb-1">{item.description}</p>
            )}
            <p className="text-success fw-bold mb-0">
              {item.price?.toLocaleString?.() || item.price}$
            </p>
          </div>
          <div className="col-4 col-md-4 d-flex align-items-center justify-content-center gap-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </button>
            <span className="fw-bold">{item.quantity}</span>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => addToCart(item)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="text-end">
          <p className="mb-1">تعداد کل اقلام: {totalItems}</p>
          <p className="mb-0">
            مجموع قیمت:{" "}
            {totalPrice.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            $
          </p>
        </div>
        <button className="btn btn-outline-secondary" onClick={clearCart}>
          حذف همه
        </button>
      </div>
    </div>
  );
};

export default Cart;