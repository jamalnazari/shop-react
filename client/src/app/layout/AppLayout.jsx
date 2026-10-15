import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/nav.jsx";
import { Navbar2 } from "../navbar/nav2.jsx";
import { Footer } from "../foter/foter.jsx";
import { HIDE_NAV_ROUTES, ROUTES } from "../../constants/routes.js";

function AppLayout() {
  const location = useLocation();
  const hideNav =
    HIDE_NAV_ROUTES.includes(location.pathname) ||
    location.pathname.startsWith(ROUTES.ADMIN);

  return (
    <>
      {!hideNav && <Navbar />}
      <Outlet />
      {!hideNav && <Navbar2 />}
      {!hideNav && <Footer />}
    </>
  );
}

export default AppLayout;
