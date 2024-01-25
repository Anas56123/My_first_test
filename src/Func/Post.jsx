import { useState } from "react";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import supabase from "../Supabase/supabase";
import LetUsTry from "../LetUsTry";
import EmojiReactionPost from "../EmojiReaction/EmojiReactionPost";

export const Post = ({ post, newComment, setNewComment }) => {
  const [emoLove, setEmoLove] = useState(post.emoLoveSupabase);
  const [emoLike, setEmoLike] = useState(post.emoLikeSupabase);
  const [emoLaugh, setEmoLaugh] = useState(post.emoLaughSupabase);
  const [emoWaaaoo, setEmoWaaaoo] = useState(post.emoWaaaooSupabase);
  const [showEmo, setShowEmo] = useState(false);
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

  function addEmoLove(state, setState, rowId) {
    if (emoLove + emoLike + emoLaugh + emoWaaaoo >= post.emoLoveSupabase + 1) {
      setEmoLove(post.emoLoveSupabase);
      setEmoLike(post.emoLikeSupabase);
      setEmoLaugh(post.emoLaughSupabase);
      setEmoWaaaoo(post.emoWaaaooSupabase);
    }

    async function updatingEmos() {
      const { updateError } = await supabase
        .from("Posts")
        .update({ emoLoveSupabase: state })
        .eq("id", rowId);

      if (updateError) {
        throw updateError;
      }
    }
    updatingEmos();

    if (state >= post.emoLoveSupabase + 1) return;
    setState(state + 1);
  }

  function addEmoLike(state, setState, rowId) {
    if (emoLove + emoLike + emoLaugh + emoWaaaoo >= post.emoLoveSupabase + 1) {
      setEmoLove(post.emoLoveSupabase);
      setEmoLike(post.emoLikeSupabase);
      setEmoLaugh(post.emoLaughSupabase);
      setEmoWaaaoo(post.emoWaaaooSupabase);
    }
    if (state >= 1) return;
    setState(state + 1);

    async function updatingEmos() {
      const { updateError } = await supabase
        .from("Posts")
        .update({ emoLikeSupabase: state })
        .eq("id", rowId);

      if (updateError) {
        throw updateError;
      }
    }
    updatingEmos();
  }

  function addEmoLaugh(state, setState, rowId) {
    if (emoLove + emoLike + emoLaugh + emoWaaaoo >= post.emoLoveSupabase + 1) {
      setEmoLove(post.emoLoveSupabase);
      setEmoLike(post.emoLikeSupabase);
      setEmoLaugh(post.emoLaughSupabase);
      setEmoWaaaoo(post.emoWaaaooSupabase);
    }
    if (state >= 1) return;
    setState(state + 1);

    async function updatingEmos() {
      const { updateError } = await supabase
        .from("Posts")
        .update({ emoLaughSupabase: state })
        .eq("id", rowId);

      if (updateError) {
        throw updateError;
      }
    }
    updatingEmos();
  }

  function addEmoWaaaoo(state, setState, rowId) {
    if (emoLove + emoLike + emoLaugh + emoWaaaoo >= post.emoLoveSupabase + 1) {
      setEmoLove(post.emoLoveSupabase);
      setEmoLike(post.emoLikeSupabase);
      setEmoLaugh(post.emoLaughSupabase);
      setEmoWaaaoo(post.emoWaaaooSupabase);
    }
    if (state >= 1) return;
    setState(state + 1);

    async function updatingEmos() {
      const { updateError } = await supabase
        .from("Posts")
        .update({ emoWaaaooSupabase: state })
        .eq("id", rowId);

      if (updateError) {
        throw updateError;
      }
    }
    updatingEmos();
  }

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

        <img src="./assets/Icons/div.MuiCardHeader-action_margin.svg" alt="" />
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
        {showEmo ? (
          <div className="emosR">
            <div className="love">
              <button onClick={() => addEmoLove(emoLove, setEmoLove, post.id)}>
                ❤️
              </button>
              <p>{emoLove}</p>
            </div>
            <div className="like">
              <button onClick={() => addEmoLike(emoLike, setEmoLike, post.id)}>
                👍
              </button>
              <p>{emoLike}</p>
            </div>
            <div className="laugh">
              <button
                onClick={() => addEmoLaugh(emoLaugh, setEmoLaugh, post.id)}
              >
                🤣
              </button>
              <p>{emoLaugh}</p>
            </div>
            <div className="waaaoo">
              <button
                onClick={() => addEmoWaaaoo(emoWaaaoo, setEmoWaaaoo, post.id)}
              >
                🤯
              </button>
              <p>{emoWaaaoo}</p>
            </div>
            <div className="idk">
              <a
                onClick={() => {
                  setShowEmo(false);
                }}
              >
                Close
              </a>
            </div>
          </div>
        ) : (
          <div className="love">
            <button
              onClick={() => {
                setShowEmo(true);
              }}
            >
              ❤️
            </button>
            <p>{emoLove}</p>
          </div>
        )}

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
      <EmojiReactionPost post={post} />
    </div>
  );
};
