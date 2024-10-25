import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between gap-4 p-5 border-t-2 sm:items-start font-merriWeather lg:gap-10 md:mt-0 sm:flex-row lg:px-16 lg:py-8 border-copy">

            <div className="order-2 block space-y-5 md:order-1">
                <div className="flex flex-col items-center justify-center gap-2 text-sm font-medium md:text-base font-merriWeather">
                    <Link href="mailto:enquiry@dagaanddaga.com" className='hover:text-info/80'>enquiry@dagaanddaga.com</Link>
                    <h4 className='hidden md:block'>+91- 9551028280</h4>
                    <h4 className='hidden md:block'>044-29550176</h4>
                    <Link href="tel:+919551028280" className='block hover:text-info/80 md:hidden'>+91- 9551028280</Link>
                    <Link href="tel:044-29550176" className='block hover:text-info/80 md:hidden'>044-29550176</Link>
                </div>
            </div>
            <div className={"w-48 lg:w-56 h-10 md:h-16 relative overflow-hidden order-1 md:order-2"}>
                <Image alt="daga logo" fill src={"/logo.svg"} className={"object-contain object-center"} />
            </div>
            {/* <div className={"flex justify-center items-center gap-4"}>
                    <Link href="" className="hover:animate-pulse">
                        <FaFacebookSquare className="text-2xl md:text-4xl text-info" />
                    </Link>
                    <Link href="" className="hover:animate-pulse">
                        <FaLinkedin className="text-2xl md:text-4xl text-info" />
                    </Link>
                </div> */}
            <div className="flex flex-row items-center order-3 gap-3 text-sm font-medium md:flex-col lg:gap-5 md:text-base font-merriWeather">
                <p>© Copyrights {new Date().getFullYear()}</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
