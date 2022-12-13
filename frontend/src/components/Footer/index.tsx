import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <h3 className={styles.text}>®2022 | Todos os direitos reservados </h3>
      <h3 className={styles.text}>
        Termos e serviços e política de privacidade
      </h3>
    </footer>
  );
};
