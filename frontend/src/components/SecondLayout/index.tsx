import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <main className={styles.container}>
      <Navbar />

      <section className={styles.content}>
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};
