import { createBrowserRouter } from "react-router";
import AppLayout from "../Layout/AppLayout";
import HomePage from "../pages/Home";
import Unauthorized from "../middlewares/Unauthorized";
import Authorized from "../middlewares/Authorized";
import AuthPage from "../pages/Auth";
import ProductPage from "../pages/Product";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <Unauthorized>
        <AppLayout />
      </Unauthorized>
    ),
    children: [
      {
        index: true,
        element: (
          <Unauthorized>
            <HomePage />
          </Unauthorized>
        ),
      },
      { path: "penjualan", element: <>test</> },
      { path: "product", element: <ProductPage /> },
    ],
  },
  {
    path: "/auth",
    element: (
      <Authorized>
        <AuthPage />
      </Authorized>
    ),
  },
]);

export default route;
