const DEFAULT_DISCOUNT_RATE = 0.04;

export function applyDiscount(price, rate = DEFAULT_DISCOUNT_RATE) {
  return Math.floor(price - price * rate);
}

export function formatDiscountPercent(rate = DEFAULT_DISCOUNT_RATE) {
  return `${Math.round(rate * 100)}%`;
}
