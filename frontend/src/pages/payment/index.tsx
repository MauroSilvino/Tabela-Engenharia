import styles from "./Payment.module.scss";

export const Payment = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Estamos quase lá!!!</h1>

      <form className={styles.form}>
        <div className={styles.userData}>
          <h2>Dados pessoais</h2>

          <div className={styles.inputContainer}>
            <label htmlFor="fullName">Nome completo</label>
            <input type="text" id="fullName" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" />
          </div>
          <div className={styles.doubleInput}>
            <div className={styles.inputContainer}>
              <label htmlFor="state">Estado</label>
              <input type="text" id="state" />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" />
            </div>
          </div>
        </div>

        <div className={styles.paymentData}>
          <h2>Método de pagamento</h2>

          <div className={styles.inputContainer}>
            <label htmlFor="cardName">Nome do cartão</label>
            <input type="text" id="cardName" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input type="number" id="cardNumber" />
          </div>

          <div className={styles.doubleInput}>
            <div className={styles.inputContainer}>
              <label htmlFor="date">Data de vencimento</label>
              <input type="text" id="date" />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="cvv">CVV</label>
              <input type="number" id="cvv" />
            </div>
          </div>

          <div className={styles.saveCard}>
            <input type="checkbox" id="saveCard" />
            <label htmlFor="saveCard">Salvar esse cartão</label>
          </div>

          <div className={styles.totalValue}>
            <span>Valor total</span>
            <span>R$ 120,00</span>
          </div>
        </div>

        <button className={styles.submitBtn}>Confirmar</button>
      </form>
    </section>
  );
};
