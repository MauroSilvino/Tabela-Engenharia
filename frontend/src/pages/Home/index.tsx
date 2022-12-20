import heroBannerSmall from "../../assets/hero.png";
import { Target } from "./components/Target";
import { Warranty } from "./components/Warranty";
import { CompanyBreaks } from "./components/CompanyBreaks";
import { Market } from "./components/Market";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <section className={styles.container}>
      <img className={styles.heroBanner} src={heroBannerSmall} alt="" />
      <Warranty />
      <CompanyBreaks />
      <Market />
      <Target />
    </section>
  );
};
