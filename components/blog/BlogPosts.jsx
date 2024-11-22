import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { POSTS_QUERY } from "@/sanity/Queries";
import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 20 } };

const BlogPosts = async () => {
    const posts = await client.fetch(POSTS_QUERY, {}, options);
    // console.log(posts);

    return (
        <section className="px-5 py-7 lg:py-12">
            <div className="grid w-full grid-cols-1 gap-4 place-content-center place-items-center lg:grid-cols-3 md:grid-cols-2">
                {posts.map((post, idx) => (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={idx}
                        className="relative w-full max-w-sm border-2 rounded-lg xl:max-w-md border-info md:mt-6 font-Montserrat bg-primary group "
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
                            <p className="w-full text-sm leading-tight md:text-base line-clamp-3">
                                {post.blogShortRead}
                            </p>

                            <div className="flex items-center justify-between">
                                <h4 className="flex items-center gap-2 text-sm capitalize">
                                    <span>
                                        <FaRegClock className="text-base text-info" />
                                    </span>
                                    2 mins Read
                                </h4>
                                <div className="text-xs tracking-wide underline capitalize transition-all ease-linear underline-offset-2 decoration-white group-hover:scale-125 duration-400">
                                    view
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default BlogPosts;
