import { Link } from "react-router-dom";
import styles from "./card.module.css";
import notFountImg from "../../images/notfound.png";

function Card({ post }) {
  return (
    <div className={styles.card}>
      <Link className="link" to={`/post/${post._id}`}>
        <span className={styles.title}>{post.title}</span>
        {post.img ? (
          <img src={post.img} alt="" className={styles.img} />
        ) : (
          <img src={notFountImg} alt="" className={styles.notFound} />
        )}
        <p className={styles.desc}> {post.desc}</p>
        <button className={styles.cardButton}>Saber más</button>
      </Link>
    </div>
  );
}

export default Card;
