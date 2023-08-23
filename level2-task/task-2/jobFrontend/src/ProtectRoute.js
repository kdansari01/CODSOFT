import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.user);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/" />;
};
