import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { specializations } from "@/libs/data";

export const SpecializationDetails = ({name}) => {
    const filteredName = decodeURIComponent(name)
    // console.log("name",filteredName)
    const specialization = specializations.find(spec => spec.specialize === filteredName);
    const lists = specialization ? specialization.lists : []; 
    return (
        <section className='flex flex-col gap-5 px-5 space-y-8 py-7 lg:px-16 lg:py-12 md:items-start md:flex-row md:gap-10 font-merriWeather'>
            <div className='space-y-10 basis-full md:basis-3/5 lg:sticky lg:top-28'>
                <p className="font-bold tracking-wide text-xl lg:text-2xl xl:text-[36px] md:!leading-snug font-merriWeather text-info">Comprehensive Legal Solutions for <span className='capitalize'>{filteredName}</span> in India</p>
                <ul className='relative space-y-5 text-sm font-normal md:text-base xl:text-lg font-merriWeather'>
                    <FaQuoteLeft className="absolute text-lg md:text-xl lg:text-2xl -top-5 -left-4 lg:-left-10 text-info" />
               
                    {lists.map((item, index) => (
            <li key={index}>{item.menu}</li>
        ))}
                    <FaQuoteRight className="absolute text-lg md:text-xl lg:text-2xl -bottom-3 right-3 lg:-right-4 text-info" />
                </ul>
            </div>
            <div className='basis-full md:basis-2/5'>
                <div className="relative w-full h-[280px] md:h-[320px]">
                    <Image
                        alt="bg image"
                        src={"/sample-1.jpeg"}
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="relative w-full h-[280px] md:h-[320px]">
                    <Image
                        alt="bg image"
                        src={"/sample-2.jpeg"}
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="relative w-full h-[280px] md:h-[320px]">
                    <Image
                        alt="bg image"
                        src={"/sample-3.jpeg"}
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}
