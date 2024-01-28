import EmojiReactionComments from "../EmojiReaction/EmojiReactionComments";

const CommentList = ({ comments, newComment, submit }) => {
  
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
        <EmojiReactionComments />
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
          <EmojiReactionComments />
        </div>
      ))}
      {submit ? <NC /> : ""}
    </div>
  );
};

export default CommentList;
