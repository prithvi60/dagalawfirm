"use client";
import { motion } from "framer-motion";
import { specializations } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import {
    parentVariant,
    variant1,
    variant2,
    variantGrid,
} from "@/libs/Variants";

const LawFirmSpecialization = () => {
    return (
        <section className="relative flex flex-col px-5 overflow-hidden border-t-2 font-merriWeather md:px-5 lg:px-0 lg:flex-row lg:pl-16 border-copy">
            <div className="h-full p-5 space-y-4 lg:p-0 lg:pr-10 lg:pt-10 basis-2/5 lg:space-y-8 lg:sticky lg:top-20">
                <h1 className="font-bold tracking-wide text-xl lg:text-2xl xl:text-[36px] font-merriWeather text-copy">
                    Protecting Your Ideas, Innovations, and Brands
                </h1>
                <div className="relative w-full">
                    <FaQuoteLeft className="absolute text-lg md:text-xl lg:text-2xl -top-3 -left-7 lg:-left-10 text-info" />
                    <p className="text-sm font-normal font-merriWeather">
                        From patent filings to trademark protection and litigation, our
                        specialized legal services cover every aspect of intellectual
                        property. Our experienced attorneys work relentlessly to safeguard
                        your ideas, designs, and brand, giving you the peace of mind to
                        focus on innovation.
                    </p>
                    <FaQuoteRight className="absolute text-lg md:text-xl lg:text-2xl -bottom-3 -right-1 lg:-right-4 text-info" />
                </div>
            </div>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.4, once: true }}
                initial="initial"
                whileInView="animate"
            >
                {specializations.map((item, idx) => (
                    <motion.div
                        variants={variantGrid}
                        initial="initial"
                        whileInView="animate"
                        custom={idx}
                        viewport={{ once: true }}
                        key={idx}
                        className="flex flex-col w-full border sm:flex-row border-copy"
                    >
                        <div className="m-auto basis-full md:basis-1/2">
                            <motion.div
                                variants={variant1}
                                viewport={{ amount: 0.3, once: true }}
                                initial="initial"
                                whileInView="animate"
                                className="relative w-32 m-auto overflow-hidden h-28 md:h-44 md:w-48"
                            >
                                <Image
                                    alt="bg image"
                                    src={item.src}
                                    fill
                                    className="object-cover object-center"
                                />
                            </motion.div>
                        </div>
                        <div className=" basis-full md:basis-1/2">
                            <motion.div
                                variants={variant2}
                                viewport={{ amount: 0.3, once: true }}
                                initial="initial"
                                whileInView="animate"
                                className="h-full p-6 space-y-4 text-center lg:p-10 sm:text-end lg:space-y-8"
                            >
                                <h1 className="font-bold tracking-wide capitalize text-lg lg:text-xl font-merriWeather text-copy leading-8 lg:!leading-[50px] text-start">
                                    {item.specialize}
                                </h1>
                                <p className="text-sm font-normal lg:text-base md:text-lg font-merriWeather text-start">
                                    {item.note}
                                </p>
                                <div className="flex items-center justify-start gap-2">
                                    <Link
                                        href={`/services/${encodeURIComponent(item.specialize)}`}
                                        className="text-sm font-normal tracking-wide underline hover:bg-opacity-70 text-accent font-merriWeather underline-offset-4 decoration-accent "
                                    >
                                        Learn more
                                    </Link>
                                    <FaArrowRightLong className="text-sm text-info" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default LawFirmSpecialization;
