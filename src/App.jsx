import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Shop from "./pages/shop.jsx";
import Cart from "./pages/cart.jsx";
import Navbar from "./navbar/nav.jsx";
import { Serch } from "./pages/serchbar.jsx";
import Login from "./pages/form.jsx";
import { Navbar2 } from "./navbar/Nav2.jsx";
import Apiprovider from "./context/Apicontext.jsx";
import CategoryPage from "./pages/catepages.jsx";
import { Dastehha } from "./pages/Dastehbandi.jsx";
import Register from "./pages/form2.jsx";

import ProtectedRoute from "./components/protectedRoute.jsx"; // ✅ اضافه شد

function AppLayout() {
  const location = useLocation();
  console.log(location.pathname)
  const hideNavRoutes = ["/register", "/login"];
  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <>
      {!hideNav && <Navbar />}

      <Routes>
        <Route path="/" element={<Shop />} />

        {/* ✅ سبد خرید محافظت شده */}
        <Route
          path="/shop-react/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/serch" element={<Serch />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/Dastehha" element={<Dastehha />} />
      </Routes>

      {!hideNav && <Navbar2 />}
    </>
  );
}

function App() {
  return (
    <Apiprovider>
      <Router>
        <AppLayout />
      </Router>
    </Apiprovider>
  );
}

export default App;