import styles from "./Questions.module.scss";
import plus from "../../../../assets/plus.png"
import minus from "../../../../assets/minus.png"
export const Questions = () => {

    return (
        <section className={styles.container}>
            <h2>Perguntas Frequentes</h2>
            <div className={styles.questionCard}>
                <div className={styles.textPlus}>
                    <img src={plus} alt="sinal de mais" />
                    <p>Pergunta</p>
                </div>
                <img src={minus} alt="sinal de maior" />
            </div>
            <div className={styles.questionCard}>
                <div className={styles.textPlus}>
                    <img src={plus} alt="sinal de mais" />
                    <p>Pergunta</p>
                </div>
                <img src={minus} alt="sinal de maior" />
            </div>
            <div className={styles.questionCard}>
                <div className={styles.textPlus}>
                    <img src={plus} alt="sinal de mais" />
                    <p>Pergunta</p>
                </div>
                <img src={minus} alt="sinal de maior" />
            </div>
            <div className={styles.questionCard}>
                <div className={styles.textPlus}>
                    <img src={plus} alt="sinal de mais" />
                    <p>Pergunta</p>
                </div>
                <img src={minus} alt="sinal de maior" />
            </div>
            <div className={styles.questionCard}>
                <div className={styles.textPlus}>
                    <img src={plus} alt="sinal de mais" />
                    <p>Pergunta</p>
                </div>
                <img src={minus} alt="sinal de maior" />
            </div>
            <div className={styles.questionCard}>
                <div className={styles.textPlus}>
                    <img src={plus} alt="sinal de mais" />
                    <p>Pergunta</p>
                </div>
                <img src={minus} alt="sinal de maior" />
            </div>
            <div className={styles.questionCard}>
                <div className={styles.textPlus}>
                    <img src={plus} alt="sinal de mais" />
                    <p>Pergunta</p>
                </div>
                <img src={minus} alt="sinal de maior" />
            </div>
        </section>
    )
}

