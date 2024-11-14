"use client";
import { teamDetails } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { parentVariant, variantGrid } from "@/libs/Variants";

const TeamMates = () => {

    return (

        <section className="px-5 space-y-8 overflow-hidden mt-14 py-7 lg:py-12 font-merriWeather">
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.4, once: true }}
                initial="initial"
                whileInView="animate"
                className="grid justify-center place-items-center grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >

                {teamDetails.map((list, idx) => (
                    <>
                        {list.ref ? (
                            <motion.div
                                variants={variantGrid}
                                initial="initial"
                                whileInView="animate"
                                custom={idx}
                                viewport={{ once: true }}
                                key={idx}

                                className="relative w-[200px] md:w-[230px] md:h-[280px] h-[280px] overflow-hidden group z-0 contrast-100 bg-white border-2 border-copy"
                            >
                                <Link
                                    href={`/team/${list.ref}`}
                                >
                                    <Image
                                        alt="sample-image"
                                        src={list.img}
                                        fill
                                        className="object-contain object-bottom transition-all duration-200 ease-in-out scale-110 group-hover:scale-125"
                                    />
                                    <div className="absolute bottom-0 left-0 z-10 flex items-center justify-between w-full py-2 px-2  backdrop-brightness-[0.60]">
                                        <div className="block">
                                            <h3 className="mb-1  text-lg font-medium text-white md:text-xl font-merriWeather">
                                                {list.name}
                                            </h3>
                                            <div className="px-4 py-2 text-sm tracking-wide fontboldl bg-info/70 text-primary font-merriWeather w-max">
                                                {list.position}
                                            </div>
                                        </div>
                                        <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                                            <FaArrowRightLong className="text-xl -rotate-45 text-accent" />

                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                variants={variantGrid}
                                initial="initial"
                                whileInView="animate"
                                custom={idx}
                                viewport={{ once: true }}
                                key={idx}
                                className="relative w-[200px] md:w-[230px] md:h-[280px] h-[280px] overflow-hidden group z-0 contrast-100 bg-white border-2 border-copy"
                            >
                                <Image
                                    alt="sample-image"
                                    src={list.img}
                                    fill
                                    className="object-contain object-bottom transition-all duration-200 ease-in-out scale-105 group-hover:scale-110"
                                />
                                <div className="absolute left-0 z-10 flex items-center justify-between w-full gap-4 pt-2 px-2 bottom-0 pb-2 lg:px-2 backdrop-brightness-[0.60]">
                                    <div className="block">
                                        <h3 className="mb-1 text-lg font-medium text-white md:text-xl font-merriWeather">
                                            {list.name}
                                        </h3>
                                        <div className="px-4 py-2 text-sm font-bold tracking-wide bg-info/70 text-primary font-merriWeather max-w-[150px] overflow-wrap break-word">
                                            {list.position}
                                        </div>
                                    </div>
                                    {/* <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                    <LuArrowUpRightFromCircle className="text-xl text-info" />
                  </div> */}
                                </div>
                            </motion.div>
                        )}
                    </>
                ))}
            </motion.div>
        </section>
    );
};

export default TeamMates;
