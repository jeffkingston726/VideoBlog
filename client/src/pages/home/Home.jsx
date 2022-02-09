import styles from "./home.module.css";
import { posts } from "../../data";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

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
      {post && post.map(post => <Card key={post._id} post={post} />)}
    </div>
  );
}

export default Home;
