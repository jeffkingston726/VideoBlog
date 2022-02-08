import styles from "./login.module.css";

function Login() {
  return (
    <div>
      <h1 className={styles.loginTitle}>Elige tu metodo de login</h1>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}

export default Login;
