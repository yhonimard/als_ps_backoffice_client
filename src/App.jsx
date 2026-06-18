
import { RouterProvider } from "react-router";
import route from "./routes";
import instance from "./api/instance";
import useAuthStore from "./store/auth.store";

const App = () => {
  const currentUser = useAuthStore((s) => s.user);
  instance.setup(currentUser.token);

  return <RouterProvider router={route} />;
};

export default App;
