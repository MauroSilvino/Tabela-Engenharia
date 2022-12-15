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


  // TEM QUE BOTAR O ENDPOIT DO FORGOTPASSWORD!!!
  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { data: responseData } = await api.post("/users/authenticate", {
      password: data.password,
    });

    console.log(responseData);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Redefinir senha</h2>

        <strong className={styles.description}>
            Crie uma nova senha
        </strong>
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
        </div >

        <button className={styles.submitBtn}>Enviar</button>
      </form>
    </section>
  );
};
