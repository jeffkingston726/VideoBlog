import styles from "./navbar.module.css";
import avatarimg from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>
        <Link className="link" to="/">
          Video Blog
        </Link>
      </span>
      {user ? (
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img src={avatarimg} alt="" className={styles.avatar} />
          </li>
          <li className={styles.listItem}>Aristides Cruz</li>
          <li className={`${styles.listItem}`}>Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;
