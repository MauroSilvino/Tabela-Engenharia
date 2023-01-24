import styles from "./Register.module.scss";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { api } from "../../api";

interface RegisterFormSchema {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const registerFormSchema = yup
  .object()
  .shape({
    name: yup.string().required("Nome completo é obrigatório."),
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é obrigatório."),
    password: yup.string().required("Senha é obrigatória."),
    passwordConfirm: yup
      .string()
      .required("Confirmação da senha é obrigatória."),
  })
  .required();

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormSchema>({
    resolver: yupResolver(registerFormSchema),
  });

  const handleFormSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
    const passwordIsEqual = data.password === data.passwordConfirm;
    if (!passwordIsEqual) {
      setError("password", { message: "Senhas não são iguais." });
      setError("passwordConfirm", { message: "Senhas não são iguais." });
      return;
    }

    await api.post("/users", {
      ...data,
      cellphone: "123123123",
    });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <strong className={styles.description}>
          Cadastre-se agora na plataforma [nome da plataforma]
        </strong>

        <div className={styles.inputContainer}>
          <label htmlFor="fullName">Nome completo</label>
          {errors.name && (
            <span className={styles.inputError}>{errors.name.message}</span>
          )}
          <input type="text" id="fullName" {...register("name")} />
        </div>

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
            <span className={styles.inputError}>
              {errors.passwordConfirm?.message}
            </span>
          )}
          <input type="password" id="password" {...register("password")} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="passwordConfirm">Confirmação de senha</label>
          {errors.passwordConfirm && (
            <span className={styles.inputError}>
              {errors.passwordConfirm.message}
            </span>
          )}
          <input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm")}
          />
        </div>

        <button className={styles.submitBtn}>Cadastrar</button>

        <p>
          Já tem uma conta?{" "}
          <Link to="/login" className={styles.login}>
            Clique aqui para entrar.
          </Link>
        </p>
      </form>
    </section>
  );
};
