import { Routes, Route, Navigate } from "react-router-dom";
import CategoryPage from "../../features/products/pages/catepages.jsx";
import { Dastehha } from "../../features/dasteha/Dastehbandi.jsx";
import CartPage from "../../features/cart/pages/cart.jsx";
import { Homepage } from "../../features/home/pages/homepage.jsx";
import Login from "../../features/login-sinup/pages/login.jsx";
import ProductDetailPage from "../../features/products/pages/ProductDetailPage.jsx";
import Admin from "../../features/admin/app/admin.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { ROUTES } from "../../constants/routes.js";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Homepage />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.CART} element={<CartPage />} />
      <Route path={`${ROUTES.CATEGORY(":slug")}`} element={<CategoryPage />} />
      <Route
        path={`${ROUTES.PRODUCT(":id")}`}
        element={<ProductDetailPage />}
      />
      <Route path={ROUTES.CATEGORIES} element={<Dastehha />} />
      <Route
        path={`${ROUTES.ADMIN}/*`}
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
}
