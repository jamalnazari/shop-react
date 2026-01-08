import { Navigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase"; // مسیر auth خودت

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      console.log(`tis is :${u}`);
      
    });
    return () => unsub();
  }, []);

  if (user === undefined) {
    return <div className="container mt-5">در حال بررسی...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}