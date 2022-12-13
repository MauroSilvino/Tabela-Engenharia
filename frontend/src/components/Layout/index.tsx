import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Layout = () => {
  return (
    <main>
      <Navbar />

      <Outlet />

      <Footer />
    </main>
  );
};
