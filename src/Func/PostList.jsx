import { useState, useEffect } from "react";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import { getPost } from "../Supabase/apiPost";
import supabase from "../Supabase/supabase";

const initialPost = {
  userAvatarURL:
    "https://xnylfzidtqdavjtgwbzo.supabase.co/storage/v1/object/sign/URL/Button-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJVUkwvQnV0dG9uLTMucG5nIiwiaWF0IjoxNzAzOTMzMTY0LCJleHAiOjE3MDY1MjUxNjR9.GZdKs4KfxBCq6wW9IIUk840oP_pHRmA-UULMY4qZZj4&t=2023-12-30T10%3A46%3A04.059Z",
  user: "Jaydon Frankie ",
  postedDate: [
    String(new Date().getFullYear()),
    "-",
    String(new Date().getMonth() + 1),
    "-",
    String(new Date().getDay()),
  ].join(""),
  content: "",
  posterImageURL: null,
};

const PostForm = ({ addPost }) => {
  const [newPost, setNewPost] = useState(initialPost);

  const handleInputChange = (event) => {
    if (!event.target.value) return;
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const addObjectToTable = async (objValue) => {
    try {
      const { error } = await supabase
        .from('Posts')
        .insert([
          objValue
        ]);
  
      if (error) {
        console.error('Error adding object:', error);
      } else {
        console.log('Object added successfully');
      }
    } catch (error) {
      console.error('Error adding object:', error.message);
    }
  };

  const handleImageChange = (event) => {
    if (!event.target.files[0]) return;
    const file = event.target.files[0];
    setNewPost({
      ...newPost,
      posterImageURL: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(newPost);
    setNewPost(initialPost);
    addObjectToTable(newPost)
  };

  return (
    <form className="formPost" onSubmit={handleSubmit}>
      <input
        className="postInput"
        type="text"
        name="content"
        value={newPost.content}
        onChange={handleInputChange}
        placeholder="Share what you are thinking here..."
      />
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
};

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
          <h6 className="h62">{post.user}</h6>
          <h6 className="h6">{post.postedDate}</h6>
        </div>
      </div>
      <p>{post.content}</p>
      {post.posterImageURL && (
        <img src={post.posterImageURL} alt="Posted Image" />
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
      <CommentList comments={post.comment} />
      <CommentForm addComment={addComment} />
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
