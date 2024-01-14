import { useState, useEffect } from "react";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import { getPost } from "../Supabase/apiPost";
import { PostForm } from "./PostForm";

const Post = ({ post }) => {
  const [emoLove, setEmoLove] = useState(0);
  const [emoLike, setEmoLike] = useState(0);
  const [emoLaugh, setEmoLaugh] = useState(0);
  const [emoWaaaoo, setEmoWaaaoo] = useState(0);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

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
    <div className="post">
      <div className="headerPost">
        <img
          src={post.userAvatarURL}
          alt="User Avatar"
          className="userAvatar"
        />
        <div>
          <p className="h62">{post.user}</p>
          <h5 className="h6">{post.postedDate}</h5>
        </div>
      </div>
      <p>{post.content}</p>
      {post.posterImageURL && (
        <img src={post.posterImageURL} alt="Posted Image" className="stableImg" />
      )}
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
      <div className="allComments">
        <CommentList comments={post.comment} />
        <CommentForm addComment={addComment} />
      </div>
    </div>
  );
};

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    async function fetchingPosts() {
      const dataf = await getPost();
      setPosts([...dataf, posts]);
      console.log(dataf);
    }
    fetchingPosts();
  }, []);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="post-list">
      <PostForm addPost={addNewPost} />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
