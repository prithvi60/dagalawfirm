"use client"
import { useState } from 'react';
import { navbarLinks } from '@/libs/data'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState("");

    return (
        <nav className='w-full h-full mx-auto'>
            <div className="flex items-center justify-between md:justify-start gap-8 lg:gap-16 px-5 py-7 lg:px-16 z-[999] shadow-sm border-b-2 border-info fixed bg-primary top-0 left-0 w-full">
                <Link href="/" className={"w-48 h-10 cursor-pointer relative overflow-hidden"}>
                    <Image priority alt="daga logo" fill src={"/daga-logo.png"} className={"object-cover object-center"} />
                </Link>
                <ul
                    className="relative items-center hidden gap-4 p-1 font-bold md:gap-8 md:flex xl:gap-14 w-max font-cormorant"
                >
                    {navbarLinks.map((list, idx) => (
                        <div key={idx} >
                            <Link href={list.ref} onClick={() => handleClick(list.menu)}>
                                <h4 className={`text-base font-medium uppercase font-libreCaslonDisplay hover:underline underline-offset-4 decoration-primary transition-all duration-300 ease-in-out hover:text-info hover:scale-105`}>{list.menu}</h4>
                            </Link>
                        </div>
                    ))}
                </ul>
                <div className={`block p-1 rounded-lg cursor-pointer md:hidden bg-primary  ${isMenuOpen ? "opacity-0" : "opacity-100"}`} onClick={() => setIsMenuOpen(true)}>
                    <GiHamburgerMenu className='text-2xl text-info' />
                </div>
                <div className={`w-full h-dvh z-[1000] border-2 bg-secondary flex flex-col justify-start pt-16 items-center fixed top-0 ${isMenuOpen ? "right-0 transition-all duration-500 ease-linear" : "opacity-0 right-[-100%] transition-all duration-500 ease-linear "}`}>
                    <div className='absolute block p-1 rounded-lg cursor-pointer w-max bg-secondary top-5 right-6' onClick={() => setIsMenuOpen(false)}>
                        <RiCloseLargeLine className='text-2xl text-info' />
                    </div>
                    {isMenuOpen && (
                        <ul
                            className="relative flex md:hidden flex-col items-center justify-center gap-3.5 p-1 mx-auto font-normal w-max font-cormorant"
                        >
                            {navbarLinks.map((list, idx) => (
                                <div key={idx}>
                                    <Link href={list.ref} onClick={() => handleClick(list.menu)}>
                                        <h4 className={`text-base font-medium uppercase font-libreCaslonDisplay hover:underline underline-offset-4 decoration-primary `}>{list.menu}</h4>
                                    </Link>
                                </div>
                            ))}
                        </ul>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default Navbar
