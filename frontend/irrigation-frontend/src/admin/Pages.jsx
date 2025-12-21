import { useState } from "react";
import API from "../api/axios";

const Pages = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    await API.post("/pages", formData);
    alert("Page saved");
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />

      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          setPreview(URL.createObjectURL(e.target.files[0]));
        }}
      />

      {preview && <img src={preview} width="200" />}

      <button>Save Page</button>
    </form>
  );
};

export default Pages;
