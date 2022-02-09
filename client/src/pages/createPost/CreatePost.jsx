import { useState, useEffect } from "react";
import styles from "./createPost.module.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [img, setImg] = useState(null);

  //submit
  const handleSubmit = async e => {};

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Create new post</span>
      <form className={styles.form}>
        <label className={styles.formTitle}>Title</label>
        <input type="text" placeholder="Title" className={styles.formInput} />

        <label className={styles.formTitle}>Short Description</label>
        <input
          type="text"
          placeholder="Short Description"
          className={styles.formInput}
        />

        <label className={styles.formTitle}>Long Description</label>
        <textarea
          type="text"
          placeholder="Long Description"
          className={styles.formInput}
        />

        <label className={styles.formTitle}>Image</label>
        <input type="file" name="" id="" />

        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
