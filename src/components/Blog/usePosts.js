import { useEffect, useState } from "react";
import { fetchAllBlogPosts } from "../../utils/Contentful";

const promise = fetchAllBlogPosts();

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  return [posts, isLoading];
}
