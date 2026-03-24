import Home from "./app/home/page";
import RootLayout from "./layouts/root-layout";
import About from "./app/about/page";
import AuthLayout from "./layouts/auth-layout";
import Register from "./app/auth/register";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./app/not-found";

export const router = createBrowserRouter([
  {
    path: "/:locale",
    children: [
      {
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
        ],
      },

      {
        element: <AuthLayout />,
        children: [
          { path: "register", element: <Register /> },
          // { path: "login", element: <Login /> },
          // { path: "forgot-password", element: <ForgotPassword /> },
        ],
      },
    ],
  },

  {
    path: "/",
    element: <Navigate to="/en" replace />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
