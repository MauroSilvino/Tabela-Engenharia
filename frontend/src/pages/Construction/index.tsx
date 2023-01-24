import styles from "./Construction.module.scss";
import constructionImage from "../../assets/construction.png";

export const Construction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.createAndImport}>
        <button>Criar obra</button>
        <button>Importar tabela do excel</button>
      </div>

      <div className={styles.constructionArea}>
        <strong>Obras</strong>

        <div className={styles.constructionContent}>
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>{" "}
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>{" "}
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>{" "}
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>{" "}
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>{" "}
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
