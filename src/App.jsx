import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppLayout from "./app/Layoute/AppLayoute.jsx";
import { BrowserRouter as Router} from "react-router-dom";
import Apiprovider from "./context/Apicontext.jsx";


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