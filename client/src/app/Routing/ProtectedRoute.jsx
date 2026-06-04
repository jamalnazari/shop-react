import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";
import CircleLoading from "../../shared/Loading/CircleLoading";

export default function ProtectedRoute({ children, requireAuth = true }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <CircleLoading />;
  }

  if (requireAuth && !isAuthenticated) {
    return (
      <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
    );
  }

  return children;
}
