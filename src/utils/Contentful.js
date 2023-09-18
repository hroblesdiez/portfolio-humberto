import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_APP_DEF_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
});

const fetchAllBlogPosts = async () => {
  try {
    const entries = await client
      .getEntries({
        content_type: "blog",
        order: "-fields.date",
      })
      .then((response) => response.items);
    return entries;
  } catch (error) {
    console.log(`Error fetching posts: ${error}`);
  }
};

const fetchLastThreeBlogPosts = async () => {
  try {
    const entries = await client
      .getEntries({
        content_type: "blog",
        limit: 3,
        order: "-fields.date",
      })
      .then((response) => response.items);
    return entries;
  } catch (error) {
    console.log(`Error fetching posts: ${error}`);
  }
};

const fetchSinglePost = async (slug) => {
  try {
    const singlePost = await client
      .getEntries({
        "fields.slug": slug,
        content_type: "blog",
      })
      .then((response) => response.items);
    return singlePost;
  } catch (error) {
    console.log(`Error fetching posts: ${error}`);
  }
};

export { fetchAllBlogPosts, fetchLastThreeBlogPosts, fetchSinglePost };
