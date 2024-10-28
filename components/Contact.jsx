"use client";
import Link from 'next/link'
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const variants = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
                ease: "easeIn",
                duration: 0.6,
            },
        },
    };
    const childVariants = {
        initial: {
            opacity: 0,
            x: -50,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };
    return (
        <motion.section
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="px-5 space-y-8 py-7 lg:px-16 lg:py-12 font-merriWeather">
            <motion.h4
                variants={childVariants} className="text-xl font-medium tracking-wide capitalize font-merriWeather text-info sm:text-2xl lg:text-3xl">Ready to Take the Next Step? Reach Out Today!</motion.h4>
            <motion.div variants={childVariants} className="flex flex-col items-start md:gap-32 md:flex-row gap-9">
                <p className="text-base font-normal basis-full md:basis-3/5 md:text-lg font-merriWeather ">Our team is here to provide the guidance you need. Contact us now to discuss your case and explore the best solutions for you.</p>
                <Link href={"/contact"} className='px-4 py-2 text-sm font-normal tracking-wide bg-info text-primary md:text-lg font-merriWeather'>Get in touch</Link>
            </motion.div>
        </motion.section>
    )
}

export default Contact
