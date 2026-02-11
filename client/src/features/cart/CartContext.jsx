import { createContext, useContext, useMemo, useState, useEffect } from "react";

export const CartContext = createContext(null);

const CART_STORAGE_KEY = "shop_cart";

export const CartProvider = ({ children }) => {
  // بارگذاری از localStorage در ابتدا
  const [items, setItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  // ذخیره در localStorage هر زمان که items تغییر کند
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [items]);

  const addToCart = (product) => {
    if (!product || !product.id) {
      console.warn("Cannot add product to cart: invalid product", product);
      return;
    }

    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        const updated = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log("Product quantity increased:", product.title, updated);
        return updated;
      }
      const newItems = [...prev, { ...product, quantity: 1 }];
      console.log("Product added to cart:", product.title, newItems);
      return newItems;
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (!existing) return prev;

      if (existing.quantity <= 1) {
        return prev.filter((item) => item.id !== productId);
      }

      return prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const clearCart = () => setItems([]);

  const value = useMemo(() => {
    const totalItems = items.reduce(
      (sum, item) => sum + (item.quantity || 0),
      0
    );
    const totalPrice = items.reduce(
      (sum, item) => sum + (item.quantity || 0) * (item.price || 0),
      0
    );

    return {
      items,
      addToCart,
      removeFromCart,
      clearCart,
      totalItems,
      totalPrice,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};

