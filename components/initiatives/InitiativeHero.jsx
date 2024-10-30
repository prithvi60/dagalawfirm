"use client";
import { variants } from "@/libs/Variants";
import { motion } from "framer-motion";
import Image from 'next/image'
import React from 'react'

const InitiativeHero = () => {
    return (
        <section className="relative flex flex-col-reverse md:flex-row w-full h-full md:h-[75vh] mt-14 overflow-hidden font-merriWeather">
            <div className="basis-full md:basis-1/2 bg-info/80">
                <motion.div
                    variants={variants}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate" className='h-full px-10 py-6 space-y-4 md:py-16 lg:py-20 xl:py-36 md:space-y-8 text-primary'>
                    {/* <h1 className='font-bold tracking-wide capitalize text-2xl lg:text-4xl xl:text-[48px] font-merriWeather leading-8 lg:!leading-[42px]'>Experienced Legal Counsel for Every Step of the Way</h1> */}
                    <p className='text-base font-normal lg:text-lg font-merriWeather'>We actively engage in social initiatives, offering impactful workshops and seminars that empower individuals and communities. Our efforts extend beyond education, as we collaborate with local organizations, volunteer in various projects, and contribute meaningfully to societal development. Through these initiatives, we aim to foster positive change, promote learning, and inspire people to make a difference.</p>
                </motion.div>
            </div>
            <div className="basis-full md:basis-1/2">
                <div className="relative z-0 w-full h-[45vh] md:h-[75vh]">
                    <Image
                        alt="bg image"
                        src={"/bg-2.png"}
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}

export default InitiativeHero
