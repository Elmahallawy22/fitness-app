import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./app/page";
import RootLayout from "./app/root-layout";
import About from "./app/about/page";

export const router = createBrowserRouter([
  {
    path: "/:locale",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> },
        { path: "about", element: <About /> }
    ],
  },
  {
    path: "/",
    element: <Navigate to="/en" replace />,
  },
  {
  path: "*",
  element: <Navigate to="/en" replace />, }
]);
