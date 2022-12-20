import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Payment } from "./pages/Payment";
import { RecoverPassword } from "./pages/RecoverPassword";
import { Register } from "./pages/Register";
import { ResetPassword } from "./pages/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/recoverPassword",
        element: <RecoverPassword />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
      },
    ],
  },
]);
