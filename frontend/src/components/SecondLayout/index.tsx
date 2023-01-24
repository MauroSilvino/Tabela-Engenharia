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
              <Link to="/home/recent">Recentes</Link>
              <Link to="/home/construction">Obras</Link>
              <Link to="/home/financial">Financeiro</Link>
              <Link to="/home/orders">Pedidos</Link>
              <Link to="/home/members">Membros</Link>
            </ul>
          </nav>
        </aside>

        <Outlet />
      </section>
    </main>
  );
};
