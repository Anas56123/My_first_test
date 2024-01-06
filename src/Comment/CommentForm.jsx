import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [newComment, setNewComment] = useState({ text: '', author: 'Jaydon Frankie' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(newComment);
    setNewComment({ text: '', author: 'Jaydon Frankie' });
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
