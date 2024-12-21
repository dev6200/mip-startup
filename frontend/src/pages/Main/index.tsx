import { ReactNode } from "react";
import useAuthStore from "../../store/useAuthStore";
import { Navigate, useLocation } from "react-router-dom";

const Main = ({ children }: { children: ReactNode }) => {
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default Main;
