import styles from "./WorkSoftware.module.scss";

export const WorkSoftware = () => {
    return (
        <section className={styles.container}>
            <h2>
                Como funciona o{" "}
                <strong className={styles.strongBlue}>software</strong>
            </h2>
            <p>
                Com ele você consegue <strong>gerenciar</strong> tudo que entra e sai da obra. Dessa forma, é todas as <strong>métricas</strong> são obtidas, o que é essêncial para  a gestão e obtenção de lucratividade
            </p>
        </section>
    )
}