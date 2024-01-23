import { useState } from "react";
import supabase from "../Supabase/supabase";

const initialPost = {
  userAvatarURL:
    "https://xnylfzidtqdavjtgwbzo.supabase.co/storage/v1/object/sign/URL/Button-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJVUkwvQnV0dG9uLTMucG5nIiwiaWF0IjoxNzAzOTMzMTY0LCJleHAiOjE3MDY1MjUxNjR9.GZdKs4KfxBCq6wW9IIUk840oP_pHRmA-UULMY4qZZj4&t=2023-12-30T10%3A46%3A04.059Z",
  user: "Jaydon Frankie ",
  postedDate: [
    String(new Date().getFullYear()),
    "-",
    String(new Date().getMonth() + 1),
    "-",
    String(new Date().getDay()),
  ].join(""),
  content: "",
  posterImageURL: null,
};

const PostForm = ({ addPost }) => {
  const [newPost, setNewPost] = useState(initialPost);

  const handleInputChange = (event) => {
    if (!event.target.value) return;
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const addObjectToTable = async (objValue) => {
    try {
      const { error } = await supabase.from("Posts").insert([objValue]);

      if (error) {
        console.error("Error adding object:", error);
      } else {
        console.log("Object added successfully");
      }
    } catch (error) {
      console.error("Error adding object:", error.message);
    }
  };

  const handleImageChange = (event) => {
    if (!event.target.files[0]) return;
    const file = event.target.files[0];
    setNewPost({
      ...newPost,
      posterImageURL: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(newPost);
    setNewPost(initialPost);
    addObjectToTable(newPost);
  };

  return (
    <form className="formPost" onSubmit={handleSubmit}>
      <input
        className="postInput"
        type="text"
        name="content"
        value={newPost.content}
        onChange={handleInputChange}
        placeholder="Share what you are thinking here..."
      />
      <div className="formPostDiv">
        <div className="grid">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <div className="iv">
            <img src="./assets/Icons/Img_margin.svg" className="bruh" /> Image/Video
          </div>
        </div>
        <button type="submit">Post</button>
      </div>
    </form>
  );
};

export default PostForm
