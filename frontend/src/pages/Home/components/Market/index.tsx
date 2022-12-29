import styles from "./Market.module.scss";
import jornal1 from "../../../../assets/jornal1.png";
import jornal2 from "../../../../assets/jornal2.png";
import jornal3 from "../../../../assets/jornal3.png";

export const Market = () => {
  return (
    <section className={styles.market}>
      <div className={styles.marketCard}>
        <h2>
          Está preparado para o que vem por aí no {""}
          <strong>mercado de construção civil?</strong>
        </h2>

        <div>
          <img
            src={jornal1}
            alt="Jornal mostra novas vagas na construção civil"
          />
          <img src={jornal2} alt="Construção civil projeta mercado promissor" />
          <img src={jornal3} alt="Construção civil fomenta a economia" />
        </div>
      </div>
    </section>
  );
};
