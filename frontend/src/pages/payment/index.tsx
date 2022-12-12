import styles from "./Payment.module.scss";
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface PaymentFormSchema {
  name: string;
  email: string;
  city: string;
  state: string;
  cep: number;
  cardName: string;
  cardNumber: number;
  cardValidDate: number;
  cvv: number;
  saveCard: boolean;
}

const paymentFormSchema = yup
  .object()
  .shape({
    name: yup.string().required("Nome completo é obrigatório."),
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é obrigatório."),
    city: yup.string().required("Cidade é obrigatório."),
    state: yup.string().required("Estado é obrigatório."),
    cep: yup.string().length(8, "O CEP deve ter 8 números."),
    cardName: yup.string().required("Nome do cartão é obrigatório."),
    cardNumber: yup
      .string()
      .length(13 || 16, "Número do cartão deve ter entre 13 e 16 dígitos."),
    cardValidDate: yup
      .string()
      .length(6, "Data de vecimento deve ter 6 dígitos."),
    cvv: yup.string().length(3, "CVV deve ter 3 dígitos."),
    saveCard: yup.boolean().default(false),
  })
  .required();

export const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormSchema>({
    resolver: yupResolver(paymentFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Estamos quase lá!!!</h1>

      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <section className={styles.inputsArea}>
          <div className={styles.userData}>
            <h2>Dados pessoais</h2>

            <div className={styles.inputContainer}>
              <label htmlFor="fullName">Nome completo</label>
              {errors.name && (
                <span className={styles.inputError}>{errors.name.message}</span>
              )}
              <input type="text" id="fullName" {...register("name")} />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="email">E-mail</label>
              {errors.email && (
                <span className={styles.inputError}>
                  {errors.email.message}
                </span>
              )}
              <input type="email" id="email" {...register("email")} />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="city">Cidade</label>
              {errors.city && (
                <span className={styles.inputError}>{errors.city.message}</span>
              )}
              <input type="text" id="city" {...register("city")} />
            </div>

            <div className={styles.doubleInput}>
              <div className={styles.inputContainer}>
                <label htmlFor="state">Estado</label>
                {errors.state && (
                  <span className={styles.inputError}>
                    {errors.state.message}
                  </span>
                )}
                <input type="text" id="state" {...register("state")} />
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="cep">CEP</label>
                {errors.cep && (
                  <span className={styles.inputError}>
                    {errors.cep.message}
                  </span>
                )}
                <input type="text" id="cep" {...register("cep")} />
              </div>
            </div>
          </div>

          <div className={styles.paymentData}>
            <h2>Método de pagamento</h2>

            <div className={styles.inputContainer}>
              <label htmlFor="cardName">Nome do cartão</label>
              {errors.cardName && (
                <span className={styles.inputError}>
                  {errors.cardName.message}
                </span>
              )}
              <input type="text" id="cardName" {...register("cardName")} />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="cardNumber">Número do cartão</label>
              {errors.cardNumber && (
                <span className={styles.inputError}>
                  {errors.cardNumber.message}
                </span>
              )}
              <input type="text" id="cardNumber" {...register("cardNumber")} />
            </div>

            <div className={styles.doubleInput}>
              <div className={styles.inputContainer}>
                <label htmlFor="date">Data de vencimento</label>
                {errors.cardValidDate && (
                  <span className={styles.inputError}>
                    {errors.cardValidDate.message}
                  </span>
                )}
                <input type="text" id="date" {...register("cardValidDate")} />
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="cvv">CVV</label>
                {errors.cvv && (
                  <span className={styles.inputError}>
                    {errors.cvv.message}
                  </span>
                )}
                <input type="text" id="cvv" {...register("cvv")} />
              </div>
            </div>

            <div className={styles.saveCard}>
              <input type="checkbox" id="saveCard" {...register("saveCard")} />
              <label htmlFor="saveCard">Salvar esse cartão</label>
            </div>
          </div>
        </section>
        <div className={styles.totalValue}>
          <span>Valor total</span>
          <span>R$ 120,00</span>
        </div>

        <button className={styles.submitBtn}>Confirmar</button>
      </form>
    </section>
  );
};
