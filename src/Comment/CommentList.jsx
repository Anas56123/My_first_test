import { useState } from "react";

const CommentList = ({ comments }) => {
  const date = [
    String(new Date().getFullYear()),
    "-",
    String(new Date().getMonth() + 1),
    "-",
    String(new Date().getDay()),
  ].join("");
  const [emoLove, setEmoLove] = useState(0);
  const [emoLike, setEmoLike] = useState(0);
  const [emoLaugh, setEmoLaugh] = useState(0);
  const [emoWaaaoo, setEmoWaaaoo] = useState(0);

  function addEmo(state, setState) {
    setState(state + 1);
  }
  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comments">
            <img
              src="https://xnylfzidtqdavjtgwbzo.supabase.co/storage/v1/object/sign/URL/Button-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJVUkwvQnV0dG9uLTMucG5nIiwiaWF0IjoxNzAzOTMzMTY0LCJleHAiOjE3MDY1MjUxNjR9.GZdKs4KfxBCq6wW9IIUk840oP_pHRmA-UULMY4qZZj4&t=2023-12-30T10%3A46%3A04.059Z"
              alt="Avatar"
            />
            <div className="content">
              <div>
                <h5>{comment.author}</h5>
                <p>{date}</p>
              </div>
              <p>{comment.text}</p>
            </div>
          </div>
          <div className="emos">
            <div className="love">
              <button onClick={() => addEmo(emoLove, setEmoLove)}>❤️</button>
              <p>{emoLove}</p>
            </div>
            <div className="like">
              <button onClick={() => addEmo(emoLike, setEmoLike)}>👍</button>
              <p>{emoLike}</p>
            </div>
            <div className="laugh">
              <button onClick={() => addEmo(emoLaugh, setEmoLaugh)}>🤣</button>
              <p>{emoLaugh}</p>
            </div>
            <div className="waaaoo">
              <button onClick={() => addEmo(emoWaaaoo, setEmoWaaaoo)}>
                🤯
              </button>
              <p>{emoWaaaoo}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
