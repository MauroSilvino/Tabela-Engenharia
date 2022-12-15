import styles from "./RecoverPassword.module.scss";
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../api";

interface RecoverPasswordFormSchema {
  email: string;
}

const RecoverPasswordFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      
      .required("Email é obrigatório."),
  })
  .required();

export const  RecoverPassword = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<RecoverPasswordFormSchema>({
    resolver: yupResolver(RecoverPasswordFormSchema),
  });


  // TEM QUE BOTAR O ENDPOIT DO RecoverPassword!!!
  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { data: responseData } = await api.post("/users/authenticate", {
      email: data.email
    });

    console.log(responseData);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Recuperar senha</h2>

        <strong className={styles.description}>
        Insira o token que você recebeu no e-mail 
        </strong>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Coloque o seu token aqui!!!</label>
          {errors.email && (
            <span className={styles.inputError}>{errors.email.message}</span>
          )}
          <div className={styles.inputsContainer}>
            <input type="text" id="email" {...register("email")} />
            <input type="text" id="email" {...register("email")} />
            <input type="text" id="email" {...register("email")} />
            <input type="text" id="email" {...register("email")} />
          </div>
          
        </div>

        <button className={styles.submitBtn}>Confirmar</button>
      </form>
    </section>
  );
};
