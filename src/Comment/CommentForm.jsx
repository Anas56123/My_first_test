import { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [newComment, setNewComment] = useState({
    comment: "",
    name: "Jaydon Frankie",
    img: "https://xnylfzidtqdavjtgwbzo.supabase.co/storage/v1/object/sign/URL/Button-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJVUkwvQnV0dG9uLTMucG5nIiwiaWF0IjoxNzAzOTMzMTY0LCJleHAiOjE3MDY1MjUxNjR9.GZdKs4KfxBCq6wW9IIUk840oP_pHRmA-UULMY4qZZj4&t=2023-12-30T10%3A46%3A04.059Z",
    date: [
      String(new Date().getFullYear()),
      "-",
      String(new Date().getMonth() + 1),
      "-",
      String(new Date().getDay()),
    ].join(""),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(newComment);
    setNewComment({
      comment: "",
      name: "Jaydon Frankie",
      img: "https://xnylfzidtqdavjtgwbzo.supabase.co/storage/v1/object/sign/URL/Button-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJVUkwvQnV0dG9uLTMucG5nIiwiaWF0IjoxNzAzOTMzMTY0LCJleHAiOjE3MDY1MjUxNjR9.GZdKs4KfxBCq6wW9IIUk840oP_pHRmA-UULMY4qZZj4&t=2023-12-30T10%3A46%3A04.059Z",
      date: [
        String(new Date().getFullYear()),
        "-",
        String(new Date().getMonth() + 1),
        "-",
        String(new Date().getDay()),
      ].join(""),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="commentForm">
      <div>
        <label>
          <input
            name="text"
            value={newComment.text}
            onChange={handleChange}
            placeholder="Write a comment…"
          />
        </label>
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
