import { Navigate } from "react-router";
import useAuthStore from "../store/auth.store";

const Authorized = ({ children }) => {
  const authStore = useAuthStore((s) => s);
  const isAuthorized = authStore.isAuthenticated && authStore.user.token;

  return isAuthorized ? <Navigate to={"/"} /> : children;
};

export default Authorized;
