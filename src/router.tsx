import { createBrowserRouter, Navigate } from "react-router-dom";
import About from "./app/about/page";
import Register from "./app/auth/register";
import Home from "./app/home/page";
import AuthLayout from "./layouts/auth-layout";
import LocaleLayout from "./layouts/local-layout";
import RootLayout from "./layouts/root-layout";
import NotFound from "./app/not-found";
import ForgotPassword from "./app/auth/forgot-password";
import Classes from "./app/classes/page";
import Healthy from "./app/healthy/page";
import Login from "./app/auth/login/Login";
import Account from "./app/account/page";
import AccountLayout from "./layouts/account-layout";

export const router = createBrowserRouter([
  {
    path: "/:locale",
    element: <LocaleLayout />,
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
          { path: "forgot-password", element: <ForgotPassword /> },
        ],
      },
      {
        element: <AccountLayout />,
        children: [{ path: "account", element: <Account /> }],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "/",
    element: <Navigate to="/en" replace />,
  },
]);
