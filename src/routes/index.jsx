import { createBrowserRouter } from "react-router";
import AppLayout from "../Layout/AppLayout";
import HomePage from "../pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "penjualan", element: <>test</> },
    ],
  },
]);

export default route;
