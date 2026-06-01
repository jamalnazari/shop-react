import { useLocation } from "react-router-dom";
import  Navbar  from "../navbar/nav.jsx"
import { Navbar2 } from "../navbar/nav2.jsx";
import { AppRoutes } from "../Routing/Routes.jsx";
import { Footer } from "../foter/foter.jsx";
function AppLayout() {
  const location = useLocation();
  const hideNavRoutes = ["/shop-react/sinup", "/shop-react/login" , "/shop-react/cart" , "/shop-react/Admin" ,"/shop-react/Admin/users" , "/shop-react/Admin/products"];
  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <>
      {!hideNav && <Navbar />}
        
        <AppRoutes/>

      {!hideNav && <Navbar2 />}
      <Footer/>
    </>
  );
}
export default AppLayout