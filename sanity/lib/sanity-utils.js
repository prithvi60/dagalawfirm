
import { POST_QUERY, POSTS_QUERY } from "../Queries";
import { client } from "./client";


// export function imageBuilder(source) {
//   return ImageUrlBuilder(clientConfig).image(source);
// }

export async function sanityFetch({
    query,
    qParams,
    tags,
  }) { 
    return (
      client.fetch(
        query,
        qParams,
        {
          cache: "force-cache",
          next: { tags },
        })
    );
  }

export const getPosts = async () => {
  const data = await sanityFetch({
    query: POSTS_QUERY,
    qParams: {},
    tags: ["post", "author", "category"],
  });
  return data;
};

export const getPostBySlug = async (slug) => {
  const data= await sanityFetch({
    query: POST_QUERY,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });

  return data;
};