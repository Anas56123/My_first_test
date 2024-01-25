import { getPost } from "../Supabase/apiPost";
import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import { Post } from "./Post";

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
