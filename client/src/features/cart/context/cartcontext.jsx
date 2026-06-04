import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  calculateCartTotal,
  loadCartFromStorage,
  saveCartToStorage,
} from "../../../utils/cart";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(loadCartFromStorage());
  }, []);

  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev;

      const nextItems = [...prev, product];
      saveCartToStorage(nextItems);
      return nextItems;
    });
  }, []);

  const removeFromCart = useCallback((product) => {
    setItems((prev) => {
      const nextItems = prev.filter((item) => item.id !== product.id);
      saveCartToStorage(nextItems);
      return nextItems;
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    saveCartToStorage([]);
  }, []);

  const total = useMemo(() => calculateCartTotal(items), [items]);

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      clearCart,
      total,
    }),
    [items, addToCart, removeFromCart, clearCart, total]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export default CartProvider;
