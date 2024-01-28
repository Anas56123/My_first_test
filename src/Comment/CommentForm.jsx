const CommentForm = ({ addComment, id, newComment, setNewComment }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addComment(id, newComment);
      setNewComment({
        name: "Jaydon Frankie",
        img: "https://xnylfzidtqdavjtgwbzo.supabase.co/storage/v1/object/sign/URL/Button-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJVUkwvQnV0dG9uLTMucG5nIiwiaWF0IjoxNzAzOTMzMTY0LCJleHAiOjE3MDY1MjUxNjR9.GZdKs4KfxBCq6wW9IIUk840oP_pHRmA-UULMY4qZZj4&t=2023-12-30T10%3A46%3A04.059Z",
        date: [
          String(new Date().getFullYear()),
          "-",
          String(new Date().getMonth() + 1),
          "-",
          String(new Date().getDay()),
        ].join(""),
        comment: newComment.comment,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="commentForm">
      <div>
        <label>
          <input
            name="comment"
            value={newComment.comment}
            onChange={handleChange}
            placeholder="Write a comment…"
            onKeyDown={handleSubmit}
          />
        </label>
        <img src="./assets/Icons/Button copy 2.svg" className="t img" />
        <img src="./assets/Icons/Button-1 copy 2.svg" className="t" />
      </div>
    </form>
  );
};

export default CommentForm;
