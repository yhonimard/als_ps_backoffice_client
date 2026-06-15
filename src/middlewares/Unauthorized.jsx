import { Navigate } from "react-router";
import useAuthStore from "../store/auth.store";

const Unauthorized = ({ children }) => {
  const authStore = useAuthStore((s) => s);
  const isAuthorized = authStore.isAuthenticated && authStore.user.token;

  return !isAuthorized ? <Navigate to={"/auth"} /> : children;
};

export default Unauthorized;
