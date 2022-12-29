import styles from "./Message.module.scss";
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface MessageFormSchema {
  name: string;
  email: string;
  message: string;
}

const messageFormSchema = yup
  .object()
  .shape({
    name: yup.string().required("Nome completo é obrigatório."),
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é obrigatório."),
    message: yup.string().required("Mensagem é obrigatória."),
  })
  .required();

export const Message = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageFormSchema>({
    resolver: yupResolver(messageFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.container}>
      <h2>
        Ficou na {""} <strong>dúvida?</strong>Envie uma {""}{" "}
        <strong>mensagem</strong>
      </h2>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
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
            <span className={styles.inputError}>{errors.email.message}</span>
          )}
          <input type="email" id="email" {...register("email")} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="message">Mensagem</label>
          {errors.message && (
            <span className={styles.inputError}>{errors.message.message}</span>
          )}
          <textarea id="message" {...register("message")}></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Enviar mensagem
        </button>
      </form>
    </section>
  );
};
