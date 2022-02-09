import { Link } from "react-router-dom";
import styles from "./card.module.css";

function Card({ post }) {
  return (
    <div className={styles.card}>
      <Link className="link" to={`/post/${post.id}`}>
        <span className={styles.title}>{post.title}</span>
        <img src={post.img} alt="" className={styles.img} />
        <p className={styles.desc}> {post.desc}</p>
        <button className={styles.cardButton}>Saber más</button>
      </Link>
    </div>
  );
}

export default Card;
