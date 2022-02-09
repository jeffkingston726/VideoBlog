import { useLocation } from "react-router";
import styles from "./post.module.css";
import { posts } from "../../data";

function Post() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find(p => p.id.toString() === path);
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
