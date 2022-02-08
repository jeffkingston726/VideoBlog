import styles from "./home.module.css";
import { posts } from "../../data";
import Card from "../../components/card/Card";

function Home() {
  return (
    <div className={styles.home}>
      {posts.map(post => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
