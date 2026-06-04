const CART_STORAGE_KEY = "items";

export function loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveCartToStorage(items) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function calculateCartTotal(items) {
  return items.reduce((total, item) => total + (item.price || 0), 0);
}
