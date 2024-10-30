"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { specializations } from "@/libs/data";
import { parentVariant, variantGrid, variantGrid2 } from "@/libs/Variants";

export const SpecializationDetails = ({ name }) => {
    const filteredName = decodeURIComponent(name);
    // console.log("name",filteredName)
    const specialization = specializations.find(
        (spec) => spec.specialize === filteredName
    );
    const lists = specialization ? specialization.lists : [];
    const images = specialization ? specialization.images : [];
    return (
        <section className="relative flex flex-col gap-5 px-5 py-7 lg:px-16 lg:py-12 md:items-start md:flex-row md:gap-10 font-merriWeather">
            <div className="space-y-10 text-justify basis-full md:basis-3/5 lg:top-28">
                <p className="font-bold tracking-wide text-xl lg:text-2xl xl:text-[36px] md:!leading-snug font-merriWeather text-info">
                    Comprehensive Legal Solutions for{" "}
                    <span className="capitalize">{filteredName}</span> in India
                </p>
                <ul className="relative space-y-5 text-sm font-normal md:text-base xl:text-lg font-merriWeather">
                    <FaQuoteLeft className="absolute text-lg md:text-xl lg:text-2xl -top-5 -left-4 lg:-left-10 text-info" />

                    {lists.map((item, index) => (
                        <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item.menu }}
                        ></li>
                    ))}
                    <FaQuoteRight className="absolute text-lg md:text-xl lg:text-2xl -bottom-3 right-3 lg:-right-4 text-info" />
                </ul>
            </div>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.4, once: true }}
                initial="initial"
                whileInView="animate"
                className="overflow-hidden basis-full md:basis-2/5 lg:sticky lg:top-24"
            >
                {images.map((item, index) => (
                    <motion.div
                        variants={variantGrid2}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        viewport={{ once: true }}
                        key={index}
                        className="relative w-full h-[280px] md:h-[320px]"
                    >
                        <Image
                            alt="bg image"
                            src={item.src}
                            fill
                            className="object-cover object-center"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
