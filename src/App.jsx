import Aside from "./Aside";
import PostList from "./Func/PostList";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="split">
        <Aside />
        <PostList />
      </div>
    </>
  );
}
