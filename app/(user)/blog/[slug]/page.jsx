
import PostDetails from '@/components/blog/post/PostDetails';
import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/Queries';
import React from 'react'

const Page = async ({ params }) => {
    const { slug } = params

    const post = await client.fetch(POST_QUERY, { slug,next: { revalidate: 20 } });
    return (
        <main>
            <PostDetails post={post} />
        </main>
    )
}

export default Page
