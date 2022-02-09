import styles from "./navbar.module.css";
import avatarimg from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

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
            <img src={user.photos[0].value} alt="" className={styles.avatar} />
          </li>
          <li className={styles.listItem}>{user.displayName}</li>
          <li className={`${styles.listItem}`} onClick={logout}>
            Logout
          </li>
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
