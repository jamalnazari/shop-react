import "./index.css";
import "./input.css"
import "./output.css"
import { AppRoutes } from "./app/Routing/Routes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Cartprovider from "./features/cart/context/cartcontext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import ErrorBoundary from "./app/providers/ErrorBoundary.jsx";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <ProductsProvider>
            <Cartprovider>
              <AppRoutes />
            </Cartprovider>
          </ProductsProvider>
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;