import styles from "./Login.module.scss";
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { api } from "../../api";

interface LoginFormSchema {
  email: string;
  password: string;
}

const LoginFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é obrigatório."),
    password: yup.string().required("Senha é obrigatória."),
  })
  .required();

export const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<LoginFormSchema>({
    resolver: yupResolver(LoginFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { data: responseData } = await api.post("/users/authenticate", {
      email: data.email,
      password: data.password,
    });

    console.log(responseData);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Login</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <strong className={styles.description}>
          Entre com o seu e-mail e senha para acessar a plataforma
        </strong>

        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          {errors.email && (
            <span className={styles.inputError}>{errors.email.message}</span>
          )}
          <input type="email" id="email" {...register("email")} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password">Senha</label>
          {errors.password && (
            <span className={styles.inputError}>{errors.password.message}</span>
          )}
          <input type="password" id="password" {...register("password")} />
        </div>
        <button className={styles.submitBtn}>Entrar</button>
      </form>

      <Link className={styles.passwordForgot} to="/forgotpassword">
        Esqueci minha senha
      </Link>
    </section>
  );
};
