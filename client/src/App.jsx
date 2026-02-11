import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppLayout from "./app/Layoute/AppLayoute.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./features/cart/CartContext.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </Router>
  );
}

export default App;