"use client";
import { motion } from "framer-motion";
import React from "react";

const FirmIntro = () => {
    const variants = {
        initial: {
            opacity: 0,
            x: -50,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
                ease: "easeIn",
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
                duration: 0.6,
            },
        },
    };
    return (
        <motion.section
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            className="px-5 space-y-8 py-7 lg:px-16 lg:py-12 font-merriWeather"
        >
            <motion.h4
                variants={childVariants}
                className="text-xl font-medium tracking-wide uppercase font-merriWeather text-info sm:text-2xl lg:text-3xl"
            >
                Innovate, Protect and Thrive
            </motion.h4>
            <motion.p
                variants={childVariants}
                className="text-base font-normal md:text-lg font-merriWeather"
            >
                A{" "}
                <span className="text-xl lg:text-2xl xl:text-[36px] !leading-[36px] text-info font-semibold">
                    34
                </span>
                -year-old Intellectual Property law boutique, dedicated to advancing
                innovation, Daga & Daga stands as a steadfast guardian of its
                clients&apos; most valuable assets. With an unwavering commitment to
                transparency, integrity, and accountability, the firm operates on an
                iron-clad ethical foundation. Its mission is not only to protect
                intellectual property of those they serve but to empower creators and
                innovators by providing cutting-edge legal solutions, fostering trust,
                and ensuring their long-term success.
            </motion.p>
        </motion.section>
    );
};

export default FirmIntro;
