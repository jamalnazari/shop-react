import "./index.css";
import "./input.css"
import "./output.css"
import AppLayout from "./app/layout/AppLayout.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Cartprovider from "./features/cart/context/cartcontext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Apiprovider from "./features/home/context/Apicontext.jsx";
function App() {

  return (
    <Router>
      <Apiprovider>
        <AuthProvider>
          <Cartprovider>
            <AppLayout />
          </Cartprovider>
        </AuthProvider>
      </Apiprovider>
    </Router>
  );
}

export default App;