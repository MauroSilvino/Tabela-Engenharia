import styles from "./ResetPassword.module.scss";
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../api";

interface ResetPasswordFormSchema {
  password: string;
}

const ResetPasswordFormSchema = yup
  .object()
  .shape({
    password: yup.string().required("Senha é obrigatória."),
  })
  .required();

export const ResetPassword = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<ResetPasswordFormSchema>({
    resolver: yupResolver(ResetPasswordFormSchema),
  });

  const [_, token] = window.location.search.split("=");

  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { data: responseData } = await api.post("/password/reset", {
      password: data.password,
      token,
    });

    console.log(responseData);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Redefinir senha</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Nova senha</label>
          {errors.password && (
            <span className={styles.inputError}>{errors.password.message}</span>
          )}
          <input type="text" id="email" {...register("password")} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="email">Repetir nova senha</label>
          {errors.password && (
            <span className={styles.inputError}>{errors.password.message}</span>
          )}
          <input type="text" id="email" {...register("password")} />
        </div>

        <button className={styles.submitBtn}>Enviar</button>
      </form>
    </section>
  );
};
