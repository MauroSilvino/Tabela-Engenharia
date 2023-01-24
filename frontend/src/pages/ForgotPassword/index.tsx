import styles from "./ForgotPassword.module.scss";
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../api";
import { useState } from "react";

interface ForgotPasswordFormSchema {
  email: string;
}

const ForgetPasswordFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é obrigatório."),
  })
  .required();

export const ForgotPassword = () => {
  const [isPasswordForgotEmailSent, setIsPasswordForgotEmailSent] =
    useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<ForgotPasswordFormSchema>({
    resolver: yupResolver(ForgetPasswordFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { data: responseData } = await api.post("/password/recovery", {
      email: data.email,
    });

    setIsPasswordForgotEmailSent(true);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Esqueci minha senha</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <strong className={styles.description}>
          Entre com o seu e-mail. <br /> As Instruções serão enviadas para lá
        </strong>
        {isPasswordForgotEmailSent ? (
          "email enviado"
        ) : (
          <>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email</label>
              {errors.email && (
                <span className={styles.inputError}>
                  {errors.email.message}
                </span>
              )}
              <input type="email" id="email" {...register("email")} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Enviar
            </button>
          </>
        )}
      </form>
    </section>
  );
};
