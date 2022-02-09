import { useLocation } from "react-router";
import styles from "./post.module.css";
//import { posts } from "../../data";
import { useState, useEffect } from "react";
import axios from "axios";

function Post() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; // Get the id from url
  const PF = "http://localhost:5000/images/";
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/post/" + path);
      setPost(res.data);
    };
    fetchPosts();
  }, [path]);

  return (
    <div className={styles.post}>
      {post.img && (
        <img src={`${PF}${post.img}`} alt="" className={styles.postImg} />
      )}
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDesc}>{post.desc}</p>
      <p className={styles.postLongDesc}>{post.longDesc}</p>
    </div>
  );
}

export default Post;
