import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const Team = () => {
    return (
        <section className="flex flex-col py-7 lg:py-12 md:flex-row">
            <Link href={"/team"} className="relative w-full md:h-[520px] h-[380px] overflow-hidden group z-0 contrast-100">
                <Image alt="sample-image" src={"/daga-1.png"} fill className="object-cover object-center transition-all duration-200 ease-in-out group-hover:scale-110" />
                <div className="absolute left-0 z-10 flex items-center justify-between w-full px-5 bottom-10 lg:px-8">
                    <div className="block">
                        <h3 className="mb-4 text-xl font-medium text-white md:text-2xl xl:text-3xl font-montserrat">Mr. Ashok kumar J. Daga</h3>
                        <div className='p-2 text-sm font-normal tracking-wide rounded-lg bg-info text-primary md:text-lg font-montserrat w-max'>Founder</div>
                    </div>
                    <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                        <LuArrowUpRightFromCircle className="text-xl text-info" />
                    </div>
                </div>
            </Link>
            <Link href={"/team"} className="relative w-full md:h-[520px] h-[380px] overflow-hidden group z-0 contrast-100">
                <Image alt="sample-image" src={"/daga-2.png"} fill className="object-cover object-top transition-all duration-200 ease-in-out group-hover:scale-110" />
                <div className="absolute left-0 z-10 flex items-center justify-between w-full px-5 bottom-10 lg:px-8">
                    <div className="block">
                        <h3 className="mb-4 text-xl font-medium text-white md:text-2xl xl:text-3xl font-montserrat">Mr. Jayesh Kumar Daga</h3>
                        <div className='p-2 text-sm font-normal tracking-wide rounded-lg bg-info text-primary md:text-lg font-montserrat w-max'>Head - Litigations</div>
                    </div>
                    <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                        <LuArrowUpRightFromCircle className="text-xl text-info" />
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default Team
