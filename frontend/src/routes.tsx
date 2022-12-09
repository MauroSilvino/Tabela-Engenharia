import { createBrowserRouter } from "react-router-dom";
import { Payment } from "./pages/payment";

export const router = createBrowserRouter([
  {
    path: "/payment",
    element: <Payment />,
  },
]);
