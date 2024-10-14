import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between gap-10 p-5 mt-5 border-t-2 md:mt-0 sm:flex-row lg:px-16 lg:py-8 border-info">
            <div className="block space-y-5">
                <div className={"w-48 h-10 relative overflow-hidden"}>
                    <Image alt="daga logo" fill src={"/daga-logo.png"} className={"object-cover object-center"} />
                </div>
                <div className="flex items-center gap-10 font-medium font-montserrat">
                    <h4>XXXX @gmail.com</h4>
                    <p>8327483298</p>
                </div>
            </div>
            <div className="block mt-4 space-y-5">
                <div className={"flex justify-center items-center gap-4"}>
                    <Link href="" className="hover:animate-pulse">
                        <FaFacebookSquare className="text-2xl md:text-4xl text-info" />
                    </Link>
                    <Link href="" className="hover:animate-pulse">
                        <FaSquareWhatsapp className="text-2xl md:text-4xl text-info" />
                    </Link>
                </div>
                <div className="flex items-center gap-10 font-medium font-montserrat">
                    <p>All rights reserved</p>
                    {/* <p>8327483298</p> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer
