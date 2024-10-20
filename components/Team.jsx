import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Team = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-5 md:gap-8 py-7 lg:py-12 md:flex-row font-merriWeather">
            <Link href={"/team/founder"} className="relative w-[320px] md:w-[460px] md:h-[620px] h-[440px] overflow-hidden group z-0 contrast-100 bg-white border-2 border-info">
                <Image alt="sample-image" src={"/daga-1.png"} fill className="object-contain object-right transition-all duration-200 ease-in-out group-hover:scale-110 scale-105" />
                <div className="absolute bottom-0 left-0 z-10 flex items-center justify-center gap-6 md:gap-16 w-full py-2 px-5 lg:px-8 backdrop-brightness-[0.60]">
                    <div className="block">
                        <h3 className="mb-4 text-lg font-medium text-white md:text-xl font-merriWeather">Mr. Ashok Kumar J. Daga</h3>
                        <div className="px-4 py-2 text-sm font-bold tracking-wide bg-info/70 text-primary font-merriWeather w-max">Founder</div>
                    </div>
                    <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                        <FaArrowRightLong className="text-xl -rotate-45 text-info" />
                    </div>
                </div>
            </Link>
            <Link href={"/team/litigations"} className="relative w-[320px] md:w-[460px] md:h-[620px] h-[440px] overflow-hidden group z-0 contrast-100 bg-white border-2 border-info">
                <Image alt="sample-image" src={"/daga-2.png"} fill className="object-contain object-left transition-all duration-200 ease-in-out group-hover:scale-110 scale-105" />
                <div className="absolute bottom-0 left-0 z-10 flex items-center justify-center gap-6 xl:gap-16 w-full py-2 px-5 lg:px-8 backdrop-brightness-[0.60]">
                    <div className="block">
                        <h3 className="mb-4 text-lg font-medium text-white md:text-xl font-merriWeather">Mr. Jayesh Kumar Daga</h3>
                        <div className="px-4 py-2 text-sm font-bold tracking-wide bg-info/70 text-primary font-merriWeather w-max">Head - Litigations</div>
                    </div>
                    <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                        <FaArrowRightLong className="text-xl -rotate-45 text-info" />
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default Team
