import heroBannerSmall from "../../assets/hero.png";
import { Target } from "./components/Target";
import { Warranty } from "./components/Warranty";
import { CompanyBreaks } from "./components/CompanyBreaks";
import { Market } from "./components/Market";
import styles from "./Home.module.scss";
import { WorkSoftware } from "./components/WorkSoftware";
import { Benefits } from "./components/Benefits";
import { Depositions } from "./components/Depositions";
import { Questions } from "./components/Questions";
import { Message } from "./components/Message";

export const Home = () => {
  return (
    <section className={styles.container}>
      <img className={styles.heroBanner} src={heroBannerSmall} alt="" />
      <Warranty />
      <CompanyBreaks />
      <Market />
      <Target />
      <WorkSoftware/>
      <Benefits/>
      <Depositions/>
      <Questions/>
      <Message/>
    </section>
  );
};
