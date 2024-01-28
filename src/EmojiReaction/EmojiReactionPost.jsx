import { useState } from "react";

// Laugh == haha
// Waaaoo == wow
// post.id == rowId

const EmojiReactionPost = ({ post }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emoReaction, setEmoReaction] = useState(false);
  const [emoLove, setEmoLove] = useState(post.emoLoveSupabase);
  const [emoLike, setEmoLike] = useState(post.emoLikeSupabase);
  const [emoLaugh, setEmoLaugh] = useState(post.emoLaughSupabase);
  const [emoWaaaoo, setEmoWaaaoo] = useState(post.emoWaaaooSupabase);

  const handleEmojiClick = (emoji) => {
    if (selectedEmoji === emoji) {
      setSelectedEmoji(null);
    } else {
      setSelectedEmoji(emoji);
    }
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
    handleEmojiClick("love")

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
    handleEmojiClick("like")
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
    handleEmojiClick("haha")
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
    handleEmojiClick("wow")
  }

  return (
    <div
      className={`open-close ${emoReaction ? "active" : ""}`}
      onMouseEnter={() => {
        setEmoReaction(true);
      }}
      onMouseLeave={() => {
        setEmoReaction(false);
      }}
    >
      {emoReaction ? (
        <div className="emoji-reaction">
          <div>
            <div
              className={`emoji ${selectedEmoji === "like" ? "selected" : ""}`}
              onClick={() => addEmoLike(emoLike, setEmoLike, post.id)}
            >
              👍
            </div>
            <span>{emoLike}</span>
          </div>
          <div>
            <div
              className={`emoji ${selectedEmoji === "love" ? "selected" : ""}`}
              onClick={() => addEmoLove(emoLove, setEmoLove, post.id)}
            >
              ❤️
            </div>
            <span>{emoLove}</span>
          </div>
          <div>
            <div
              className={`emoji ${selectedEmoji === "haha" ? "selected" : ""}`}
              onClick={() => addEmoLaugh(emoLaugh, setEmoLaugh, post.id)}
            >
              😄
            </div>
            <span>{emoLaugh}</span>
          </div>
          <div>
            <div
              className={`emoji ${selectedEmoji === "wow" ? "selected" : ""}`}
              onClick={() => addEmoWaaaoo(emoWaaaoo, setEmoWaaaoo, post.id)}
            >
              🤯
            </div>
            <span>{emoWaaaoo}</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {emoReaction ? "" : "Like 👍"}
    </div>
  );
};

export default EmojiReactionPost;
