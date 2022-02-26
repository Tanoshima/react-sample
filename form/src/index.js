import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import usePosts from "./hooks/usePosts";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = usePosts();

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "An error has occurred: " + error.message
      ) : (
        <div>
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.id}</li>
            ))}
          </ul>
          <ReactQueryDevtools initialIsOpen />
        </div>
      )}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
