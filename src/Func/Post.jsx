import { useState } from "react";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import supabase from "../Supabase/supabase";
import LetUsTry from "../LetUsTry";
import EmojiReactionPost from "../EmojiReaction/EmojiReactionPost";

export const Post = ({ post, newComment, setNewComment }) => {
  const [submit, setSubmit] = useState(false);

  const addComment = async (rowId) => {
    try {
      const { error } = await supabase
        .from("Posts")
        .select("*")
        .eq("id", rowId);

      if (error) {
        throw error;
      }

      const { updateError } = await supabase
        .from("Posts")
        .update({ comment: [...post.comment, newComment] })
        .eq("id", rowId);

      if (updateError) {
        throw updateError;
      }

      console.log(`Comment updated successfully for row with id ${rowId}`);
    } catch (err) {
      console.error("Error updating comment:", err.message);
    }
    setSubmit(true);
  };

  return (
    <div className="post">
      <div className="headerPost">
        <div>
          <img
            src={post.userAvatarURL}
            alt="User Avatar"
            className="userAvatar"
          />
          <div>
            <p className="h62">{post.user}</p>
            <p className="h6">{post.postedDate}</p>
          </div>
        </div>

        <img src="./assets/Icons/div.MuiCardHeader-action_margin.svg" className="t" />
      </div>
      <p>{post.content}</p>
      {post.posterImageURL && (
        <img
          src={post.posterImageURL}
          alt="Posted Image"
          className="stableImg"
        />
      )}
      <div className="emos emosP">
        <EmojiReactionPost post={post} />
        <div>
          <img src="./assets/Icons/Button copy.svg" alt="" />
          <img src="./assets/Icons/Button-1 copy.svg" alt="" />
        </div>
      </div>
      <div className="allComments">
        <CommentList
          comments={post.comment}
          newComment={newComment}
          submit={submit}
          setSubmit={setSubmit}
        />
        <CommentForm
          addComment={addComment}
          id={post.id}
          newComment={newComment}
          setNewComment={setNewComment}
        />
      </div>
      <br />
    </div>
  );
};
