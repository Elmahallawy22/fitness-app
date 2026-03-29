import Home from "./App/Home/page";
import RootLayout from "./layouts/root-layout";
import About from "./App/about/page";
import AuthLayout from "./layouts/auth-layout";
import Register from "./App/auth/register";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./App/not-found";
import Classes from "./App/classes/classes";
import Healthy from "./App/healthy/Healthy";
import Login from "./App/auth/login/Login";

export const router = createBrowserRouter([
  {
    path: "/:locale",
    children: [
      {
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "classes", element: <Classes /> },
          { path: "healthy", element: <Healthy /> },
        ],
      },

      {
        element: <AuthLayout />,
        children: [
          { path: "register", element: <Register /> },
          { path: "login", element: <Login /> },
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
