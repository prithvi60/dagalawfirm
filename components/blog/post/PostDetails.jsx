"use client";
import { variant1, variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";
import { PortableText } from "next-sanity";

const PostDetails = ({ post }) => {
    return (
        <section className="px-5 mt-14 md:mt-16 md:gap-6 lg:px-16 lg:py-12">
            <motion.h1
                variants={variantTitle}
                viewport={{ once: true }}
                initial="initial"
                animate="animate"
                className="px-8 py-6 text-2xl font-bold tracking-wider text-left uppercase lg:text-3xl xl:text-4xl font-merriWeather text-copy"
            >
                {post.title}
            </motion.h1>
            <motion.div
                variants={variant1}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                animate="animate"
                className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20"
            >
                <PortableText value={post.body} components={customComponents} />
            </motion.div>
        </section>
    );
};

export default PostDetails;

const customComponents = {
    block: {
        h1: ({ children }) => (
            <h1 className="flex items-center w-full gap-5 my-6 text-3.5xl font-bold tracking-wider font-Montserrat xl:text-5xl mb-4 mt-4">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="flex items-center w-full gap-5 my-6 text-2xl font-bold tracking-wider font-Montserrat xl:text-4.5xl mb-4 mt-4">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="flex items-center w-full gap-5 my-6 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl mb-4 mt-4">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="flex items-center w-full gap-5 my-6 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl mb-4 mt-4">
                {children}
            </h4>
        ),
        h5: ({ children }) => (
            <h5 className="flex items-center w-full gap-5 my-6 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl mb-4 mt-4">
                {children}
            </h5>
        ),
        h6: ({ children }) => (
            <h6 className="flex items-center w-full gap-5 my-6 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl mb-4 mt-4">
                {children}
            </h6>
        ),
        normal: ({ children }) => (
            <p className="ml-10 text-lg font-Montserrat lg:text-xl mb-4 mt-4 leading-relaxed ">{children}</p>
        ),
        blockquote: ({ children }) => (
            <p className="ml-10 text-lg font-Montserrat lg:text-xl mb-4 mt-4 leading-relaxed ">{children}</p>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="ml-10 space-y-2 list-disc text-lg lg:text-xl mt-4">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="ml-10 space-y-2 list-decimal text-lg lg:text-xl mt-4">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="ml-5 text-lg lg:text-xl mt-4">{children}</li>,
        number: ({ children }) => <li className="ml-5 text-lg lg:text-xl mt-4">{children}</li>,
    },
    types: {
        image: ({ value }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
                alt={value?.alt || "Image"}
                className="w-full h-full max-w-md max-h-full my-8"
            />
        ),
    },
};
