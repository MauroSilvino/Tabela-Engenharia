import styles from "./Warranty.module.scss";
import lock from "../../../../assets/lock.png";
import computer from "../../../../assets/computer.png";
import check from "../../../../assets/check.png";

export const Warranty = () => {
  return (
    <section className={styles.warranty}>
      <div className={styles.warrantyCard}>
        <img src={lock} alt="Um cadeado" />
        <strong>Pagamento Seguro</strong>
        <p>
          Ambiente seguro. Seus dados estão protegitos e sua compra é 100%
          segura.
        </p>
      </div>

      <div className={styles.warrantyCard}>
        <img src={computer} alt="Um notebook" />
        <strong>Acesso imediato</strong>
        <p>
          Login e senha serão enviados ao seu e-mail logo após o processamento
          do pagamento
        </p>
      </div>

      <div className={styles.warrantyCard}>
        <img src={check} alt="Um certo" />
        <strong>07 dias de garantia</strong>
        <p>
          Você poderá pedir a devolução de 100% do seu dinheiro dentro desse
          prazo
        </p>
      </div>
    </section>
  );
};
