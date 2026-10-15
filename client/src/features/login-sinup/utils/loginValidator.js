const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^09\d{9}$/,
};

export function validateLoginInput(input) {
  if (!input || !input.trim()) {
    return {
      isValid: false,
      error: "لطفاً شماره موبایل یا پست الکترونیکی وارد کنید",
    };
  }

  const trimmedInput = input.trim();

  if (PATTERNS.email.test(trimmedInput)) {
    return { isValid: true, error: null, type: "email" };
  }

  if (PATTERNS.phone.test(trimmedInput)) {
    return { isValid: true, error: null, type: "phone" };
  }

  return {
    isValid: false,
    error: "لطفاً یک ایمیل یا شماره موبایل معتبر وارد کنید",
  };
}
