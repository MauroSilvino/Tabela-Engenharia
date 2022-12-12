import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Payment } from "./pages/payment";
import { Register } from "./pages/register";

export const router = createBrowserRouter([
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
