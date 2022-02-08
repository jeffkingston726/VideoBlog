import styles from "./post.module.css";
import { posts } from "../../data";

function Post() {
  const post = posts[2];
  return (
    <div className={styles.post}>
      <img src={post.img} alt="" className={styles.postImg} />
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDesc}>{post.desc}</p>
      <p className={styles.postLongDesc}>{post.longDesc}</p>
    </div>
  );
}

export default Post;
