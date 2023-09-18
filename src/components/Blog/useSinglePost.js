import { useEffect, useState } from "react";
import { fetchSinglePost } from "../../utils/Contentful";

export default function useSinglePost(slug) {
  const promise = fetchSinglePost(slug);

  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((result) => {
      setPost(result[0].fields);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);
  return [post, isLoading];
}
