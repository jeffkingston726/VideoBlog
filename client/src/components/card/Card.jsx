import styles from "./card.module.css";

function Card({ post }) {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{post.title}</span>
      <img src={post.img} alt="" className={styles.img} />
      <p className={styles.desc}> {post.desc}</p>
      <button className={styles.cardButton}>Saber más</button>
    </div>
  );
}

export default Card;
