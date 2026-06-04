import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "../../features/cart/context/CartContext";
import { ProductsProvider } from "../../context/ProductsContext";
import { AuthProvider } from "../../context/AuthContext";

export default function AppProviders({ children }) {
  return (
    <Router>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>{children}</CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </Router>
  );
}
