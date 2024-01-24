import { getPost } from "../Supabase/apiPost";
import { useEffect, useState } from "react";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import supabase from "../Supabase/supabase";
import PostForm from "./PostForm";
import LetUsTry from "../LetUsTry";

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
      <LetUsTry post={post} />
    </div>
  );
};

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState({
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

  useEffect(
    function () {
      async function fetchingPosts() {
        const dataf = await getPost();
        setPosts([...dataf, posts]);
        console.log(dataf);
      }
      fetchingPosts();
    },
    [newComment]
  );

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="post-list">
      <PostForm addPost={addNewPost} />
      {posts.map((post, index) => (
        <Post
          key={index}
          post={post}
          newComment={newComment}
          setNewComment={setNewComment}
        />
      ))}
    </div>
  );
};

export default PostList;
