import { useLocation } from "react-router-dom";
import Navbar from "../navbar/nav.jsx";
import { Navbar2 } from "../navbar/nav2.jsx";
import { AppRoutes } from "../Routing/Routes.jsx";
import { Footer } from "../foter/foter.jsx";
import { HIDE_FOOTER_ROUTES, HIDE_NAV_ROUTES } from "../../constants/routes.js";

function AppLayout() {
  const location = useLocation();
  const hideNav = HIDE_NAV_ROUTES.includes(location.pathname);
  const hideFooter = HIDE_FOOTER_ROUTES.includes(location.pathname);

  return (
    <>
      {!hideNav && <Navbar />}
      <AppRoutes />
      {!hideNav && <Navbar2 />}
      {!hideFooter && <Footer />}
    </>
  );
}

export default AppLayout;
