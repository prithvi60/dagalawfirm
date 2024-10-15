import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export const SpecializationDetails = () => {
    return (
        <section className='flex flex-col gap-5 px-5 space-y-8 py-7 lg:px-16 lg:py-12 md:items-start md:flex-row md:gap-10'>
            <div className='space-y-10 basis-full md:basis-3/5 lg:sticky lg:top-28'>
                <p className="font-bold tracking-wide capitalize text-xl lg:text-2xl xl:text-[36px] md:!leading-snug font-merriWeather text-info">Comprehensive Legal Solutions for Industrial Design Protection in India</p>
                <ul className='relative space-y-5 text-sm font-normal md:text-base xl:text-lg font-montserrat'>
                    <FaQuoteLeft className="absolute text-xl lg:text-2xl -top-5 -left-4 lg:-left-10 text-info" />
                    <li>The objective of the Design law in India is to strike a balance between protection of registered designs and promotion of design activity. Design protection is granted to new or original designs which appeal to the eye. Registration of designs confers significant commercial advantage on the owner. Application for registration of a design must be filed before any commercialization or public display of the article. Prior public display or commercialization can disentitle the owner. </li>
                    <li> Design registration takes relatively less time to obtain compared to other forms of intellectual property. The term of protection for a design is 10 years which can be further renewed for a period of 5 years.  India is a signatory to the Paris Convention for the protection of Industrial Property and the Agreement on Trade Related Aspects of Intellectual Property Rights (TRIPS).  </li>
                    <li>The Firm provides comprehensive services including Prosecution, Enforcement and Advisory services. We handle design prosecution covering everything from industrial products, handicrafts, technical and medical instruments, watches and jewelry, houseware, electrical appliances, automotive products, etc.  A registered design owner can file a civil lawsuit for injunction to restrain infringement of a registered design. Criminal remedies are not provided under the law like this</li>
                    <FaQuoteRight className="absolute text-xl lg:text-2xl -bottom-3 right-3 lg:-right-4 text-info" />
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
