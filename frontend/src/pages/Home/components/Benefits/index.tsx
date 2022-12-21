import styles from "./Benefits.module.scss";
import controle from "../../../../assets/controle.png";
import chart from "../../../../assets/chart.png";
import board from "../../../../assets/board.png";

export const Benefits = () => {
    return (
        <section className={styles.container}>
            <h2>Benefícios</h2>
            <div className={styles.cardsContainer}>
                
                <div className={styles.card}>
                    <img src={controle} alt="Ícone de um controle" />
                    <h3>Controle</h3>
                    <p >Texto</p>
                </div>
                <div className={styles.card}>
                    <img src={board} alt="Ícone de um quadro" />
                    <h3>Controle</h3>
                    <p >Texto</p>
                </div>
                <div className={styles.card}>
                    <img src={chart} alt="Ícone de um gráfico" />
                    <h3>Controle</h3>
                    <p >Texto</p>
                </div>
            </div>
            
        </section>
    )
}