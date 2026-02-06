import { useLocation } from "react-router-dom";
import  Navbar  from "../navbar/nav.jsx"
import { Navbar2 } from "../navbar/nav2.jsx";
import { AppRoutes } from "../Routing/Routes.jsx";
function AppLayout() {
  const location = useLocation();
  const hideNavRoutes = ["/register", "/login"];
  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <>
      {!hideNav && <Navbar />}

        <AppRoutes/>

      {!hideNav && <Navbar2 />}
    </>
  );
}
export default AppLayout