import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Testimonial = () => {
    return (
        <section className="px-5 space-y-5 py-7 lg:px-16 lg:py-12 font-merriWeather">
            <h4 className="text-xl font-medium tracking-wide capitalize font-merriWeather text-info sm:text-2xl lg:text-3xl">Testimonials tag line</h4>
            <div className="flex flex-col items-start md:flex-row gap-9">
                <div className="relative w-full md:h-[320px] h-[280px] overflow-hidden md:basis-2/5">
                    <Image alt="sample-image" src={"/sample-4.jpeg"} fill className="object-cover object-center" />
                </div>
                <div className="relative px-4 basis-full md:basis-3/5">
                    <FaQuoteLeft className="absolute top-0 text-lg md:text-xl -left-4 text-info" />
                    <p className="text-base font-normal md:text-lg font-merriWeather ">Lorem ipsum dolor sit amet consectetur. Suscipit erat neque nulla pulvinar massa gravida volutpat libero. Purus id nibh urna ac. Facilisis purus diam urna mattis phasellus mauris. Sem nec vel ultricies nunc.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Suscipit erat neque nulla pulvinar massa gravida volutpat libero. Purus id nibh urna ac. Facilisis purus diam urna mattis phasellus mauris. Sem nec vel ultricies nunc.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Suscipit erat neque nulla pulvinar massa gravida volutpat libero. Purus id nibh urna ac. Facilisis purus diam urna mattis phasellus mauris. Sem nec vel ultricies nunc.Lorem ipsum dolor sit amet consectetur.</p>
                    <FaQuoteRight className="absolute bottom-0 text-lg md:text-xl -right-4 text-info" />
                </div>
            </div>
        </section>
    )
}

export default Testimonial
