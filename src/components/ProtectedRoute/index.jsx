import { getToken } from "@/utils/token";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!getToken(); // Check if token exists
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
