import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { ROUTES } from "../../../constants/routes";
import { validateLoginInput } from "../utils/loginValidator";
import Button from "../../../shared/components/buttons/button";
import Input from "../../../shared/components/input";

function Login() {
  const { login } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validation = validateLoginInput(inputValue);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }

    try {
      setIsLoading(true);
      login(inputValue);
      navigate(ROUTES.HOME);
      setInputValue("");
    } catch (err) {
      setError("خطا در ورود. لطفاً دوباره تلاش کنید");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full w-full lg:w-[500px] bg-white rounded-xl shadow-lg p-6 md:p-8">
        {/* لوگو */}
        <div className="flex justify-center mb-6">
          <img
            src="./digikala-logo.svg"
            alt="دیجی‌کالا"
            className="h-8"
          />
        </div>

        {/* عنوان */}
        <h2 className="text-end text-xl md:text-2xl font-bold text-gray-800 mb-2">
          ورود یا ثبت‌نام در دیجی‌کالا
        </h2>
        <p className="text-end text-sm text-gray-500 mb-6">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>

        {/* پیام خطا */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-right">{error}</p>
          </div>
        )}

        {/* فرم */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              variant="default"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="شماره موبایل یا پست الکترونیک"
              className="w-full px-4 py-3 rounded-lg text-right"
              disabled={isLoading}
              required
            />
          </div>

          <Button
            type="submit"
            variant="danger"
            size="lg"
            disabled={isLoading}
            className="w-full font-bold"
          >
            {isLoading ? "در حال ورود..." : "ورود به دیجی‌کالا"}
          </Button>
        </form>

        {/* شرایط و قوانین */}
        <p className="text-center text-xs text-gray-400 mt-6">
          ورود شما به معنای پذیرش{" "}
          <a href="#" className="text-red-600 hover:underline">
            شرایط دیجی‌کالا
          </a>{" "}
          و{" "}
          <a href="#" className="text-red-600 hover:underline">
            قوانین حریم خصوصی
          </a>{" "}
          است
        </p>
      </div>
    </div>
  );
}

export default Login;