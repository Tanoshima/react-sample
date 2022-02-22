import { useInfiniteQuery } from "react-query";
import axios from "axios";

const getPosts = async (pageParam = 0) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts" + pageParam
  );
  return data;
};

export default function usePosts() {
  return useInfiniteQuery('posts', getPosts, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })
}
