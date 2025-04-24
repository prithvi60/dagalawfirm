import PostDetails from "@/components/blog/post/PostDetails";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/Queries";
import React from "react";

export const revalidate = 10;

const Page = async ({ params }) => {
    const { slug } = params;
    const post = await client.fetch(
        POST_QUERY,
        { slug },
        {
            cache: "no-cache",
            next: {
                tags: ["post", "author", "category"],
            },
        }
    );

    return (
        <main>
            <PostDetails post={post} />
        </main>
    );
};

export default Page;
