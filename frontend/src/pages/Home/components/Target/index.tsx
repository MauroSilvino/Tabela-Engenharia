import styles from "./Target.module.scss";
import simpleCheck from "../../../../assets/simple_check.png";
import dislike from "../../../../assets/dislike.png";
import tiago from "../../../../assets/tiago.png";

export const Target = () => {
  return (
    <section className={styles.container}>
      <div className={styles.target}>
        <strong>
          Para quem <span>é esse software?</span>
        </strong>

        <div>
          <img src={simpleCheck} />
          <p>
            Para engenheiros civis, arquitetos e técnicos em edificações que vão
            gerenciar grandes obras
          </p>
        </div>

        <div>
          <img src={simpleCheck} />
          <p>
            Para empresários que desejam gerenciar obras de médio e grande porte
            em 2023
          </p>
        </div>

        <div>
          <img src={simpleCheck} />
          <p>
            Para profissionais da construção civil que não querem perder
            contratos por não saber o que fazer
          </p>
        </div>
      </div>

      <img src={tiago} />

      <div className={styles.notTarget}>
        <strong>
          Para quem <span>NÃO é esse software?</span>
        </strong>

        <div>
          <img src={dislike} />
          <p>Para quem já sabe tudo sobre gestão de contratos</p>
        </div>

        <div>
          <img src={dislike} />
          <p>Para quem está satisfeito com seus resultados</p>
        </div>

        <div>
          <img src={dislike} />
          <p>Para quem acabou de sair da faculdade e nunca trabalhou na área</p>
        </div>
      </div>
    </section>
  );
};
