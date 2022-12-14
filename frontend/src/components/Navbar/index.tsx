import styles from "./Navbar.module.scss";
import profileSvg from "../../assets/profile.svg";
import menuSvg from "../../assets/menu.svg";
import { CgProfile } from "react-icons/cg"
import { FiMenu } from "react-icons/fi"


export const Navbar = () => {
  return (
    <nav className={styles.container}> 
      <div className={styles.menu}>
        <FiMenu
          color="#EDEDF5"
          size={40}/>
       
      </div>
      <div className={styles.profile}>
        <CgProfile 
          color="#EDEDF5"
          size={40}/>
      </div>
    </nav>
  );
};
