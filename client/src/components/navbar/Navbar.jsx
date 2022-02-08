import styles from "./navbar.module.css";
import avatarimg from "../../images/avatar.jpg";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Video Blog</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <img src={avatarimg} alt="" className={styles.avatar} />
        </li>
        <li className={styles.listItem}>Aristides Cruz</li>
        <li className={`${styles.listItem}`}>Logout</li>
      </ul>
    </div>
  );
}

export default Navbar;
