
import PostDetails from '@/components/blog/post/PostDetails';

import { getPostBySlug } from '@/sanity/lib/sanity-utils';
import React from 'react'

const Page = async ({ params }) => {
    const { slug } = params

    const post = await getPostBySlug(slug)
    return (
        <main>
            <PostDetails post={post} />
        </main>
    )
}

export default Page
