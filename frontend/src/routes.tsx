import { createBrowserRouter } from "react-router-dom";
import { Footer } from "./pages/footer";
import { Login } from "./pages/login";
import { Navbar } from "./pages/navbar";
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
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
]);
