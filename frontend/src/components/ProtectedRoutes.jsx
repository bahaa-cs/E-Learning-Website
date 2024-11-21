import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ userType, allowedTypes, children }) => {
  if (!allowedTypes.includes(userType)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

export default ProtectedRoute;
