import styles from "./Navbar.module.scss";
import profileSvg from "../../assets/profile.svg";
import menuSvg from "../../assets/menu.svg";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.menu}>
        <img src={menuSvg} alt="ícone de menu" />
      </div>
      <div className={styles.profile}>
        <img src={profileSvg} alt="ícone de perfil" />
      </div>
    </nav>
  );
};
