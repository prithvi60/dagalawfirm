"use client";
import { variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";
import Image from 'next/image'
import React from 'react'

const SpecializationHero = ({ name }) => {
    const filteredName = decodeURIComponent(name)
    // console.log(filteredName);

    return (
        <section className='block mt-14 font-merriWeather'>
            <motion.h1
                variants={variantTitle}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate" className='text-3xl py-6 uppercase text-center sm:text-4xl lg:text-6xl xl:text-[96px] font-merriWeather font-bold tracking-wider text-copy'>{filteredName}</motion.h1>
            <div className="relative z-0 w-full h-[280px]">
                <Image
                    alt="bg image"
                    src={"/service-hero-bg.jpeg"}
                    fill
                    className="object-cover object-center"
                />
            </div>
        </section>
    )
}

export default SpecializationHero
