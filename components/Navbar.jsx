"use client";
import { useState } from "react";
import { navbarLinks } from "@/libs/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdOutlineArrowRight } from "react-icons/md";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState("");
    const pathname = usePathname();

    const handleClick = (val) => {
        setIsActive(val);
        setIsMenuOpen(false);
    };

    return (
        <nav className="w-full h-full mx-auto">
            <div className="flex items-center justify-between md:justify-start gap-3 sm:gap-8 lg:gap-16 px-5 lg:px-16 z-[999] shadow-sm border-b-2 border-info fixed bg-primary top-0 left-0 w-full">
                <Link
                    href="/"
                    className={"w-64 md:w-60 h-14 ml-12 sm:ml-0 cursor-pointer relative overflow-hidden"}
                >
                    <Image
                        priority
                        alt="daga logo"
                        fill
                        src={"/daga-logo.png"}
                        className={"object-cover object-center"}
                    />
                </Link>
                <div className="relative items-center hidden gap-4 p-1 font-bold md:gap-8 md:flex xl:gap-14 w-max font-merriWeather">
                    {navbarLinks.map((list, idx) => (
                        <div key={idx} className="relative py-4 group">
                            <div>
                                <Link href={list.ref} onClick={() => setIsActive(list.menu)}>
                                    <h4
                                        className={`${isActive === list.menu && pathname !== "/"
                                            ? "underline underline-offset-8 decoration-info"
                                            : ""
                                            } text-base font-medium uppercase font-libreCaslonDisplay hover:underline decoration-info underline-offset-4 transition-all duration-500 ease-linear hover:text-info hover:scale-105`}
                                    >
                                        {list.menu}
                                    </h4>
                                </Link>
                            </div>
                            {list.subMenu && (
                                <div
                                    className={`absolute hidden ${isMenuOpen === false
                                        ? "hidden"
                                        : "group-hover:block transition-all duration-500 ease-in-out"
                                        } group-hover:block top-[56px] left-0 bg-info py-4 px-8 shadow-md font-merriWeather`}
                                >
                                    {list?.subMenu?.map((l, index) => (
                                        <Link
                                            title={l.menu}
                                            className={`flex items-center gap-2 mb-2 text-primary text-sm cursor-pointer lg:text-lg w-full h-full font-semibold z-10 hover:text-white/80 capitalize`}
                                            key={index}
                                            href={`${l.ref}`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <h4 className="hover:underline hover:underline-offset-8">
                                                {l.menu}
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div
                    className={`block p-1  cursor-pointer md:hidden bg-primary  ${isMenuOpen ? "opacity-0" : "opacity-100"
                        }`}
                    onClick={() => setIsMenuOpen(true)}
                >
                    <GiHamburgerMenu className="text-2xl text-info" />
                </div>
                <div
                    className={`w-full h-dvh z-[1000] border-2 bg-secondary flex flex-col justify-start pt-16 items-center fixed top-0 ${isMenuOpen
                        ? "right-0 transition-all duration-500 ease-linear"
                        : "opacity-0 right-[-100%] transition-all duration-500 ease-linear "
                        }`}
                >
                    <div
                        className="absolute block p-1 cursor-pointer w-max bg-secondary top-5 right-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <RiCloseLargeLine className="text-2xl text-info" />
                    </div>
                    {isMenuOpen && (
                        <ul className="relative flex md:hidden flex-col gap-3.5 px-10 font-normal w-full py-6 font-merriWeather ">
                            {navbarLinks.map((list, idx) => (
                                <div key={idx}>
                                    <Link href={list.ref} onClick={() => handleClick(list.menu)}>
                                        <h4
                                            className={` ${isActive === list.menu && pathname !== "/"
                                                ? "underline underline-offset-8 decoration-[#c20003]"
                                                : ""
                                                } text-base font-medium uppercase font-libreCaslonDisplay decoration-primary`}
                                        >
                                            {list.menu}
                                        </h4>
                                    </Link>
                                    {list.subMenu && (
                                        <>
                                            {list?.subMenu?.map((l, index) => (
                                                <Link
                                                    href={l.ref}
                                                    key={index}
                                                    onClick={() => handleClick(list.menu)}
                                                    className="flex items-center gap-1 pl-2 mt-3"
                                                >
                                                    <MdOutlineArrowRight className="text-sm text-info" />
                                                    <h4
                                                        className={`text-xs
                                                            space-y-10 font-medium uppercase font-libreCaslonDisplay hover:underline underline-offset-4 decoration-primary `}
                                                    >
                                                        {l.menu}
                                                    </h4>
                                                </Link>
                                            ))}
                                        </>
                                    )}
                                </div>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
