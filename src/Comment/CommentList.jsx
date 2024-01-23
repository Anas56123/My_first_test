import { useState } from "react";

const CommentList = ({ comments, newComment, submit, setSubmit }) => {
  function NewCommentEmos() {
    const [emoLove, setEmoLove] = useState(0);
    const [emoLike, setEmoLike] = useState(0);
    const [emoLaugh, setEmoLaugh] = useState(0);
    const [emoWaaaoo, setEmoWaaaoo] = useState(0);

    function addEmo(state, setState) {
      if (emoLove + emoLike + emoLaugh + emoWaaaoo >= 1) {
        setEmoLove(0);
        setEmoLike(0);
        setEmoLaugh(0);
        setEmoWaaaoo(0);
      }
      if (state >= 1) return;
      setState(state + 1);
    }

    return (
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
          <button onClick={() => addEmo(emoWaaaoo, setEmoWaaaoo)}>🤯</button>
          <p>{emoWaaaoo}</p>
        </div>
      </div>
    );
  }

  function NC() {
    return (
      <div className="comment">
        <div className="comments">
          <img src={newComment.img} alt="Avatar" />
          <div className="content">
            <div>
              <h4>{newComment.name}</h4>
              <span>{newComment.date}</span>
            </div>
            <span>{newComment.comment}</span>
          </div>
        </div>
        <NewCommentEmos />
      </div>
    );
  }

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments?.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comments">
            <img src={comment.img} alt="Avatar" />
            <div className="content">
              <div>
                <h4>{comment.name}</h4>
                <span>{comment.date}</span>
              </div>
              <span>{comment.comment}</span>
            </div>
          </div>
          <NewCommentEmos />
        </div>
      ))}
      {submit ? <NC /> : ""}
    </div>
  );
};

export default CommentList;
