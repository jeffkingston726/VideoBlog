import styles from "./login.module.css";
import googleIcon from "../../images/googleIcon.png";

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 className={styles.loginTitle}>Log in to your account</h1>
          <div className={styles.btnWrapper}>
            <img src={googleIcon} alt="" className={styles.icon} />
            <button className={styles.loginButton}>Log in with Google</button>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}

export default Login;
