import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppLayout from "./app/Layoute/AppLayoute.jsx";
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
      <Router>
        <AppLayout />
      </Router>
  );
}

export default App;