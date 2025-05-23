"use client";
import { dagaIcons } from "@/libs/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { parentVariant, variant1, variantGrid, variantTitle } from "@/libs/Variants";

const DagaApproach = () => {

    return (
        <section className="w-full h-full font-merriWeather">
            <motion.h1
                variants={variantTitle}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="py-12 border-t-2 border-copy uppercase text-center text-lg  md:text-xl xl:text-[40px] font-merriWeather font-medium tracking-wider text-copy"
            >
                The Daga and Daga Approach
            </motion.h1>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="grid grid-cols-1 border md:grid-cols-2 lg:grid-cols-3 lg:flex-nowrap border-copy"
            >
                {dagaIcons.map((list, idx) => (
                    <motion.div
                        variants={variantGrid}
                        initial="initial"
                        whileInView="animate"
                        custom={idx}
                        viewport={{ once: true }}
                        key={idx}
                        className="block w-full p-10 space-y-2 border border-copy"
                    >
                        <div className="relative mx-auto size-28 lg:size-32">
                            <Image
                                alt={`${list.note} icon`}
                                src={list.icon}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <h4 className="text-base font-medium tracking-wide text-center md:text-lg lg:text-xl">
                            {list.note}
                        </h4>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default DagaApproach;
