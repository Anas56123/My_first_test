import { useState } from 'react';
import Button from '../Button';

const PostForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, image });
    setText('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's Share what you are thinking here..."
        value={text}
        onChange={handleTextChange}
      />
      <br />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <Button type="submit">Post</Button>
    </form>
  );
};

export default PostForm;
