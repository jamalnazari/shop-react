import "./index.css";
import "./input.css"
import "./output.css"
import AppLayout from "./app/layout/AppLayout.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Cartprovider from "./features/cart/context/cartcontext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Cartprovider>
          <AppLayout />
        </Cartprovider>
      </AuthProvider>
    </Router>
  );
}

export default App;