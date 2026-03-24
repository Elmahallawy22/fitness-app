import Home from "./pages/Home";
import RootLayout from "./layouts/root-layout";
import About from "./app/about/page";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./app/auth/register";
// import Login from "./app/auth/login";
// import ForgotPassword from "./app/auth/forgot-password";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/:locale",
    children: [
      {
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },

          { path: "*", element: <Navigate to="." replace /> },
        ],
      },

      // Auth routes
      {
        element: <AuthLayout />,
        children: [
          { path: "register", element: <Register /> },
          // { path: "login", element: <Login /> },
          // { path: "forgot-password", element: <ForgotPassword /> },
          { path: "*", element: <Navigate to="." replace /> },
        ],
      },
    ],
  },

  {
    path: "/",
    element: <Navigate to="/en" replace />,
  },
]);
