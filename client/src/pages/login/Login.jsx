import styles from "./login.module.css";
import googleIcon from "../../images/googleIcon.png";
//import githubIcon from "../../images/github.png";

function Login() {
  const google = async () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 className={styles.loginTitle}>Log in to your account</h1>
          <div className={styles.btnWrapper} onClick={google}>
            <img src={googleIcon} alt="" className={styles.icon} />
            <button className={styles.loginButton}>Log in with Google</button>
          </div>
          {/* <div className={styles.btnWrapper}>
            <img
              src={githubIcon}
              alt=""
              className={`${styles.icon} ${styles.githubIcon}`}
            />
            <button className={`${styles.loginButton} ${styles.github}`}>
              Log in with Github
            </button>
          </div> */}
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}

export default Login;
