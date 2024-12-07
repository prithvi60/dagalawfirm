import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { POSTS_QUERY } from "@/sanity/Queries";
import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 10 } };

const BlogPosts = async () => {
    const posts = await client.fetch(POSTS_QUERY, {}, options);

    return (
        <section className="px-5 py-7 lg:py-12">
            <div className="grid w-full grid-cols-1 gap-4 place-content-center place-items-center lg:grid-cols-3 md:grid-cols-2">
                {posts.map((post, idx) => (
                    <Blog post={post} key={idx} />
                ))}
            </div>
        </section>
    );
};

export default BlogPosts;



const Blog = ({ post }) => {
    const readableTime = post.plainBody.filter(Boolean).join(' ')

    const calculateReadTime = (text) => {
        const wordsPerMinute = 200;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
        return readingTime;
    };

    const blogContent = readableTime || "";
    const readingTime = calculateReadTime(blogContent);
    console.log("da",post)
    return (
        <Link
            href={`/blog/${post.slug.current}`}
            className="relative w-full max-w-sm border-2 rounded-lg xl:max-w-md border-info md:mt-6 font-Montserrat bg-primary group"
        >
            <div className="w-full p-5 space-y-5 md:p-6">
                <div className="relative w-full h-64 overflow-hidden">
                    <Image
                        alt={post.imageAlt}
                        src={post.imageUrl}
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <h4 className="text-lg font-semibold tracking-wide md:text-xl">{post.title}</h4>
                <p className="w-full text-sm leading-tight md:text-base line-clamp-3">
                    {post.blogShortRead}
                </p>

                <div className="flex items-center justify-between">
                    <h4 className="flex items-center gap-2 text-sm capitalize"><span><FaRegClock className="text-base text-info" /></span>{readingTime} min{readingTime > 1 ? "s" : ""} Read</h4>
                    <div className="text-xs tracking-wide underline capitalize transition-all ease-linear underline-offset-2 decoration-white group-hover:scale-125 duration-400">
                        view
                    </div>
                </div>
            </div>
        </Link>
    )
}
