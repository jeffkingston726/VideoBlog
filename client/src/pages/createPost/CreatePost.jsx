import { useState } from "react";
import axios from "axios";
import styles from "./createPost.module.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [file, setFile] = useState(null);

  //submit
  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      longDesc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.img = filename;
      try {
        const res = await axios.post("http://localhost:5000/api/upload", data);
        console.log(` ${res.data}`);
      } catch (err) {
        console.log(err);
      }
    }

    // publish.
    try {
      const res = await axios.post("http://localhost:5000/api/post", newPost);
      window.location.replace("/"); //Change location to the new post.
      console.log(res.data._id);
    } catch (err) {
      console.log(`Error loading the post + ${err}`);
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Create new post</span>
      <form className={styles.form}>
        <label className={styles.formTitle}>Title</label>
        <input
          type="text"
          placeholder="Title"
          className={styles.formInput}
          onChange={e => setTitle(e.target.value)}
        />

        <label className={styles.formTitle}>Short Description</label>
        <input
          type="text"
          placeholder="Short Description"
          className={styles.formInput}
          onChange={e => setDesc(e.target.value)}
        />

        <label className={styles.formTitle}>Long Description</label>
        <textarea
          type="text"
          placeholder="Long Description"
          className={styles.formInput}
          onChange={e => setLongDesc(e.target.value)}
        />

        <label className={styles.formTitle} htmlFor="pictureInput">
          Image
        </label>
        <input
          type="file"
          name=""
          id="pictureInput"
          onChange={e => setFile(e.target.files[0])}
        />
        {file && (
          <img
            className={styles.previewPicture}
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}

        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
