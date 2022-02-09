import styles from "./home.module.css";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Home() {
  const [post, setPost] = useState(null);
  const { location } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/post");
      setPost(res.data);
    };
    fetchPosts();
  }, [location]);

  return (
    <div className={styles.home}>
      <Link className="link" to={`/publish`}>
        <button className={styles.publishButton}>Create new</button>
      </Link>
      {post && post.map(post => <Card key={post._id} post={post} />)}
    </div>
  );
}

export default Home;
