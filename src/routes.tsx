import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/register/index";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: "/register", element: <Register /> }],
  },
  {
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
