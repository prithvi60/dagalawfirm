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
                className="px-8 py-6 text-2xl font-bold tracking-wider text-left uppercase lg:text-3xl xl:text-4xl font-merriWeather text-copy text-info"
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
            <h3 className="flex items-center w-full gap-5 my-6 mt-4 mb-4 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="flex items-center w-full gap-5 my-6 mt-4 mb-4 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl">
                {children}
            </h4>
        ),
        h5: ({ children }) => (
            <h5 className="flex items-center w-full gap-5 my-6 mt-4 mb-4 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl">
                {children}
            </h5>
        ),
        h6: ({ children }) => (
            <h6 className="flex items-center w-full gap-5 my-6 mt-4 mb-4 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl">
                {children}
            </h6>
        ),
        normal: ({ children }) => (
            <p className="mt-4 mb-4 text-lg leading-relaxed text-justify md:ml-10 md:text-left font-Montserrat lg:text-xl ">{children}</p>
        ),
        blockquote: ({ children }) => (
            <p className="mt-4 mb-4 text-lg leading-relaxed text-justify md:ml-10 md:text-left font-Montserrat lg:text-xl ">{children}</p>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="mt-4 space-y-2 text-lg list-disc md:ml-10 lg:text-xl">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="mt-4 space-y-2 text-lg list-decimal md:ml-10 lg:text-xl">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="mt-4 ml-5 text-lg lg:text-xl">{children}</li>,
        number: ({ children }) => <li className="mt-4 ml-5 text-lg lg:text-xl">{children}</li>,
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


// className="mx-auto mt-10 prose max-w-screen-2xl prose-blue prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-3xl md:prose-h2:text-4xl prose-h4:text-3xl md:prose-h4:text-4xl prose-h4:font-bold prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-base lg:prose-blockquote:!text-xl prose-p:font-normal prose-p:not-italic prose-p:text-base lg:prose-p:!text-xl prose-p:leading-relaxed prose-blockquote:!leading-relaxed"