// Post.jsx
const Post = ({ text, image }) => {
  return (
    <div className="post">
      {text && <p>{text}</p>}
      {image && <img src={URL.createObjectURL(image)} alt="Posted" />}
    </div>
  );
};

export default Post;
