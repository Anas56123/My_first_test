import Aside from "./Aside";
import PostList from "./Func/PostList";
import Header from "./Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Header />
      <div className="split">
        <Aside />
        <PostList />
      </div>
    </QueryClientProvider>
  );
}
