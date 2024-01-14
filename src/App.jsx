import Aside from "./Aside";
import PostList from "./Func/PostList";
import Header from "./Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

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
