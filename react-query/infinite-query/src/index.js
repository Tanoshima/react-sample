import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import usePostsInfinite from "./hooks/usePostsInfinite";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const {
    isLoading, data, error, fetchNextPage, hasNextPage, isFetchingNextPage
  } = usePostsInfinite();

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "An error has occurred: " + error.message
      ) : (
        <div>
          <ul>
            {data.pages.map((post, i) => (
              <li key={post.id}>{post.id}</li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => fetchNextPage()} 
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load more"
                : "Nothing more to load"
              }
            </button>
          </div>
          <ReactQueryDevtools initialIsOpen />
        </div>
      )}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
