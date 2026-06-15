import Login from "../components/Login";
import useAuthStore from "../store/auth.store";

const AuthPage = () => {
  const authStore = useAuthStore((s) => s);

  return (
    <>
      <Login />
    </>
  );
};

export default AuthPage;
