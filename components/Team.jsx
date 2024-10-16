import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Team = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-5 md:gap-0 py-7 lg:py-12 md:flex-row font-merriWeather">
            <Link href={"/team"} className="relative w-[320px] md:w-[520px] md:h-[520px] h-[380px] overflow-hidden group z-0 contrast-100 bg-info/60">
                <Image alt="sample-image" src={"/daga-1.jpg"} fill className="object-contain object-center transition-all duration-200 ease-in-out group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 z-10 flex items-center justify-center gap-6 md:gap-16 w-full py-2 px-5 lg:px-8 backdrop-brightness-[0.60]">
                    <div className="block">
                        <h3 className="mb-4 text-lg font-medium text-white md:text-xl font-merriWeather">Mr. Ashok Kumar J. Daga</h3>
                        <div className="px-4 py-2 text-sm font-normal tracking-wide bg-[#1a1a1a] text-primary font-merriWeather w-max">Founder</div>
                    </div>
                    <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                        <FaArrowRightLong className="text-xl -rotate-45 text-info" />
                    </div>
                </div>
            </Link>
            <Link href={"/team"} className="relative w-[320px] md:w-[520px] md:h-[520px] h-[380px] overflow-hidden group z-0 contrast-100 bg-info/60">
                <Image alt="sample-image" src={"/daga-2.jpg"} fill className="object-contain object-top transition-all duration-200 ease-in-out group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 z-10 flex items-center justify-center gap-6 xl:gap-16 w-full py-2 px-5 lg:px-8 backdrop-brightness-[0.60]">
                    <div className="block">
                        <h3 className="mb-4 text-lg font-medium text-white md:text-xl font-merriWeather">Mr. Jayesh Kumar Daga</h3>
                        <div className="px-4 py-2 text-sm font-normal tracking-wide bg-[#1a1a1a] text-primary font-merriWeather w-max">Head - Litigations</div>
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
