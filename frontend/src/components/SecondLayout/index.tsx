import { Link, Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import styles from "./SecondLayout.module.scss";

export const HomeLayout = () => {
  return (
    <main className={styles.container}>
      <Navbar />

      <section className={styles.content}>
        <aside className={styles.menu}>
          <nav>
            <ul>
              <Link className={styles.link}  to="/home/recent">Recentes</Link>
              <Link className={styles.link} to="/home/construction">Obras</Link>
              <Link className={styles.link} to="/home/financial">Financeiro</Link>
              <Link className={styles.link} to="/home/orders">Pedidos</Link>
              <Link className={styles.link} to="/home/members">Membros</Link>
            </ul>
          </nav>
        </aside>

        <Outlet />
      </section>
    </main>
  );
};
