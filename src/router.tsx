import { createBrowserRouter, Navigate } from "react-router-dom";
import About from "./app/about/page";
import Register from "./app/auth/register";
import Home from "./app/home/page";
import AuthLayout from "./layouts/auth-layout";
import LocaleLayout from "./layouts/local-layout";
import RootLayout from "./layouts/root-layout";
import NotFound from "./app/not-found";
<<<<<<< HEAD
import ForgotPassword from "./app/auth/forgot-password";
=======
import Login from "./app/auth/login";
>>>>>>> d5dcb0aabfecc4a8400d31a1ef958ebe92a0a4fb

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
        ],
      },

      {
        element: <AuthLayout />,
        children: [
          { path: "register", element: <Register /> },
<<<<<<< HEAD
          { path: "forgot-password", element: <ForgotPassword /> },
=======
          { path: "login", element: <Login /> },
>>>>>>> d5dcb0aabfecc4a8400d31a1ef958ebe92a0a4fb
        ],
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
