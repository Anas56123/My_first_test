// App.jsx
import { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>The Post System</h1>
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
