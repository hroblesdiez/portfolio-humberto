import { useEffect, useState } from "react";
import { fetchLastThreeBlogPosts } from "../../utils/Contentful";

const promise = fetchLastThreeBlogPosts();

export default function useLastThreePosts() {
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
