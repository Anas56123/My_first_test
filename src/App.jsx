import Aside from "./Aside";
import PostList from "./Func/PostList";
import Header from "./Header";
import LetUsTry from "./LetUsTry";

export default function App() {
  return (
    <>
      <Header />
      <div className="split">
        <Aside />
        <PostList />
      </div>
      <LetUsTry />
    </>
  );
}
