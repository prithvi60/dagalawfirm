import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between p-5 mt-5 border-t-2 gap-7 font-merriWeather lg:gap-10 md:mt-0 sm:flex-row lg:px-16 lg:py-8 border-info">
            <div className="block space-y-5">
                <div className={"w-48 h-10 relative overflow-hidden"}>
                    <Image alt="daga logo" fill src={"/logo.svg"} className={"object-contain object-center"} />
                </div>
                <div className="flex items-center gap-5 text-sm font-medium md:gap-10 md:text-base font-merriWeather">
                    <h4>enquiry@dagaanddaga.com</h4>
                    <p>+91- 9551028280</p>
                </div>
            </div>
            <div className="block mt-4 space-y-5">
                {/* <div className={"flex justify-center items-center gap-4"}>
                    <Link href="" className="hover:animate-pulse">
                        <FaFacebookSquare className="text-2xl md:text-4xl text-info" />
                    </Link>
                    <Link href="" className="hover:animate-pulse">
                        <FaLinkedin className="text-2xl md:text-4xl text-info" />
                    </Link>
                </div> */}
                <div className="flex items-center gap-6 text-sm font-medium md:text-base font-merriWeather">
                    <p>© Copyrights {new Date().getFullYear()}</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
