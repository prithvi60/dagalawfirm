import BlogHero from '@/components/blog/BlogHero'
import BlogPosts from '@/components/blog/BlogPosts'
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/Queries';
import React from 'react'

export const revalidate = 10;

const Page = async () => {
    const posts = await client.fetch(POSTS_QUERY);
    return (
        <main>
            <BlogHero />
            <BlogPosts posts={posts} />
        </main>
    )
}

export default Page
