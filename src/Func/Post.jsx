import { useState } from 'react';

const Post = ({ text, image }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="post">
      {text && <p>{text}</p>}
      {image && <img src={URL.createObjectURL(image)} alt="Posted" />}
      <div className="comments">
        <h3>Comments</h3>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleAddComment}>Add Comment</button>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Post;
