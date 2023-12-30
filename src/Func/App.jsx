import { useEffect, useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import { getPosts } from '../Supabase/apiPosts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((data) => {
      setData(data);
    });
  }, []);
  console.log(data);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostForm onSubmit={handlePostSubmit} />
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} text={post.text} image={post.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
