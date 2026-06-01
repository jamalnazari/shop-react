import "./index.css";
import "./input.css"
import "./output.css"
import AppLayout from "./app/Layoute/AppLayoute.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Cartprovider from "./features/cart/context/cartcontext.jsx";
function App() {
  return (
    <Router>
      <Cartprovider>
        <AppLayout />
      </Cartprovider>
    </Router>
  );
}

export default App;