import { Routes, Route, Navigate } from "react-router-dom";
import CategoryPage from "../../features/products/pages/catepages.jsx";
import { Dastehha } from "../../features/dasteha/Dastehbandi.jsx";
import CartPage from "../../features/cart/pages/cart.jsx";
import { Homepage } from "../../features/home/pages/homepage.jsx";
import Login from "../../features/login-sinup/pages/login.jsx";
import ProductDetailPage from "../../features/products/pages/ProductDetailPage.jsx";
import Admin from "../../features/admin/app/admin.jsx";
import ProductUi from "../../features/admin/components/products-Ui";
import UsersUi from "../../features/admin/components/users-ui";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AppLayout from "../layout/AppLayout.jsx";
import { BASE_PATH, ROUTES } from "../../constants/routes.js";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={BASE_PATH} element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="category/:slug" element={<CategoryPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="categories" element={<Dastehha />} />
        <Route path="admin" element={<ProtectedRoute />}>
          <Route element={<Admin />}>
            <Route index element={<Navigate to="products" replace />} />
            <Route path="products" element={<ProductUi />} />
            <Route path="users" element={<UsersUi />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
}
