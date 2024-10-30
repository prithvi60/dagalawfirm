"use client";
import { motion } from "framer-motion";
import { services } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { parentVariant, variant1, variantGrid, variantTitle } from "@/libs/Variants";

const PracticesComponent = () => {
    return (
        <>
            <motion.h2
                variants={variantTitle}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="flex justify-center px-5 text-xl font-medium tracking-wide capitalize py-7 lg:px-16 lg:py-12 md:text-3xl text-copy font-merriWeather"
            >
                Practice areas where we excel
            </motion.h2>
            <motion.section
                variants={parentVariant}
                viewport={{ amount: 0.4, once: true }}
                initial="initial"
                whileInView="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
                {services.map((item, idx) => (
                    <motion.div
                        variants={variantGrid}
                        initial="initial"
                        whileInView="animate"
                        custom={idx}
                        viewport={{ once: true }}
                        key={idx}
                        className={`font-merriWeather flex flex-col md:flex-row justify-center items-center h-full border-2 border-copy relative py-10`}
                    >
                        <div className="relative w-full mx-auto overflow-hidden size-28 md:m-auto md:size-44 md:basis-1/2">
                            <Image
                                alt="sample-image"
                                src={item.icon}
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                        <div
                            className={`block px-5 py-5 space-y-2 md:space-y-5 w-full md:w-3/5 text-center md:text-start md:ml-8`}
                        >
                            <h4 className="w-full text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-copy">
                                {item.menu}
                            </h4>
                            <div className="flex items-center justify-center gap-2 md:justify-start">
                                <Link
                                    href={`/services/${item.ref}`}
                                    className="text-sm font-normal tracking-wide underline hover:bg-opacity-70 text-accent font-merriWeather underline-offset-4 decoration-accent "
                                >
                                    Learn more
                                </Link>
                                <FaArrowRightLong className="text-sm text-accent" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.section>
        </>
    );
};

export default PracticesComponent;
