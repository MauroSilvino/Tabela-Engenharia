import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomeLayout } from "./components/SecondLayout";
import { Construction } from "./pages/Construction";
import { Financial } from "./pages/Financial";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Members } from "./pages/Members";
import { Orders } from "./pages/Orders";
import { Payment } from "./pages/Payment";
import { Recent } from "./pages/Recent";
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
        path: "/resetPassword",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "/home/recent",
        element: <Recent />,
      },
      {
        path: "/home/construction",
        element: <Construction />,
      },
      {
        path: "/home/financial",
        element: <Financial />,
      },
      {
        path: "/home/orders",
        element: <Orders />,
      },
      {
        path: "/home/members",
        element: <Members />,
      },
    ],
  },
]);
