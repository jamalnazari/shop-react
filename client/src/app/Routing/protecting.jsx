import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedCart({ children }) {
  const [user, setUser] = useState(null); // شروع با null به جای undefined
  const location = useLocation();

  useEffect(() => {
    // بررسی اینکه آیا کاربر لاگین کرده است یا نه
    // برای حال حاضر، اجازه می‌دهیم همه کاربران به سبد خرید دسترسی داشته باشند
    // اگر در آینده نیاز به احراز هویت بود، می‌توانید از localStorage یا context استفاده کنید
    const checkUser = () => {
      // در حال حاضر، همیشه null برمی‌گردانیم تا همه بتوانند به سبد خرید دسترسی داشته باشند
      // اگر در آینده نیاز به احراز هویت بود، می‌توانید این را تغییر دهید:
      // const savedUser = localStorage.getItem('user');
      // setUser(savedUser ? JSON.parse(savedUser) : null);
      setUser(null);
    };
    checkUser();
  }, []);

  // برای حال حاضر، اجازه می‌دهیم همه کاربران به سبد خرید دسترسی داشته باشند
  // اگر در آینده نیاز به احراز هویت بود، می‌توانید این خط را uncomment کنید:
  // if (user === null) {
  //   return <Navigate to="/shop-react/login" replace state={{ from: location }} />;
  // }

  return children;
}