import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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
