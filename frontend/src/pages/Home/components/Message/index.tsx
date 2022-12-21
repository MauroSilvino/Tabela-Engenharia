import styles from "./Message.module.scss";

export const Message = () => {
    return (
        <section className={styles.container}>
            <h2>Ficou na {""} <strong>dúvida?</strong>Envie uma {""} <strong>mensagem</strong></h2>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="fullName">Nome completo</label>
                    <input type="text" id="fullName"/>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message"  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                    Enviar mensagem 
                </button>
                
            </form>
        </section>
    )
}