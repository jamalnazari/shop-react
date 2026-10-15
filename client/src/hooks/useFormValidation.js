import { useState, useCallback } from "react";

const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^09\d{9}$/,
};

const MESSAGES = {
  required: "این فیلد الزامی است",
  invalid_email: "لطفاً یک ایمیل معتبر وارد کنید",
  invalid_phone: "لطفاً یک شماره موبایل معتبر وارد کنید (مثال: 09121234567)",
};

export function useFormValidation() {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = useCallback((name, value, type = "text") => {
    if (!value) return MESSAGES.required;

    switch (type) {
      case "email":
        return !PATTERNS.email.test(value) ? MESSAGES.invalid_email : null;
      case "phone":
        return !PATTERNS.phone.test(value) ? MESSAGES.invalid_phone : null;
      default:
        return null;
    }
  }, []);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const handleValidate = useCallback((name, value, type) => {
    const error = validateField(name, value, type);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
    return !error;
  }, [validateField]);

  const resetForm = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  return {
    errors,
    touched,
    validateField,
    handleBlur,
    handleValidate,
    resetForm,
  };
}
