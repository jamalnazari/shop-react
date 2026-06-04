import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
function Login() {
  const {login}=useAuth()
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputValue)
    navigate('/shop-react/')
    setInputValue("")
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

        {/* فرم */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="شماره موبایل یا پست الکترونیک"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-right"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-200 text-sm md:text-base"
          >
            ورود به دیجی‌کالا
          </button>
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