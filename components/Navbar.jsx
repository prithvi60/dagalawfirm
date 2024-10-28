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
    console.log(isActive);

    const handleClick = (val) => {
        setIsActive(val);
        setIsMenuOpen(false);
    };

    return (
        <nav className="w-full h-full mx-auto">
            <div className="flex items-center justify-between md:justify-start gap-3 sm:gap-8 lg:gap-16 px-5 lg:px-16 z-[999] shadow-sm border-b-2 border-copy fixed bg-primary top-0 left-0 w-full font-merriWeather">
                <Link
                    href="/"
                    className={
                        "hidden md:block w-60 h-14 cursor-pointer relative overflow-hidden"
                    }
                >
                    <Image
                        priority
                        alt="daga logo"
                        fill
                        src={"/logo.svg"}
                        className={"object-contain object-center"}
                    />
                </Link>
                <Link
                    href="/"
                    className={
                        "block md:hidden w-10 h-14 sm:ml-0 cursor-pointer relative overflow-hidden"
                    }
                >
                    <Image
                        priority
                        alt="daga logo"
                        fill
                        src={"/daga-new-logo.png"}
                        className={"object-contain object-center"}
                    />
                </Link>
                <div className="relative items-center hidden gap-6 p-1 font-bold lg:gap-8 md:flex xl:gap-14 w-max font-merriWeather">
                    {navbarLinks.map((list, idx) => (
                        <div key={idx} className="relative py-4 group">
                            <>
                                {list.menu === "Careers" ? (
                                    <div>
                                        <h4
                                            className={`${isActive === list.menu &&
                                                    pathname !== "/" &&
                                                    isActive !== "Careers"
                                                    ? "underline underline-offset-8 decoration-info"
                                                    : ""
                                                } text-md lg:text-lg font-medium uppercase font-libreCaslonDisplay`}
                                        >
                                            {list.menu}
                                        </h4>
                                    </div>
                                ) : (
                                    <Link href={list.ref} onClick={() => setIsActive(list.menu)}>
                                        <h4
                                            className={`${isActive === list.menu &&
                                                    pathname !== "/" &&
                                                    isActive !== "Careers"
                                                    ? "underline underline-offset-8 decoration-info"
                                                    : ""
                                                } text-md lg:text-lg font-medium uppercase font-libreCaslonDisplay  transition-all duration-500 ease-linear hover:text-info hover:scale-105 hover:underline decoration-info underline-offset-4`}
                                        >
                                            {list.menu}
                                        </h4>
                                    </Link>
                                )}
                            </>
                            {list.subMenu && (
                                <div
                                    className={`absolute overflow-hidden hidden ${isMenuOpen === false
                                            ? "hidden"
                                            : "group-hover:block transition-all duration-500 ease-in-out"
                                        } group-hover:block top-[56px] left-0 bg-info py-4 px-8 shadow-md font-merriWeather`}
                                >
                                    {list?.subMenu?.map((l, index) => (
                                        <div key={index}>
                                            <Link
                                                title={l.menu}
                                                className={`flex items-center gap-2 mb-2 text-primary text-sm cursor-pointer lg:text-lg w-full h-full font-semibold z-10 hover:text-white/80 capitalize`}
                                                href={`${decodeURIComponent(l.ref)}`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <h4 className="hover:underline hover:underline-offset-8">
                                                    {l.menu}
                                                </h4>
                                            </Link>
                                        </div>
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
                    className={`w-full h-dvh z-[1000] border-2 bg-primary flex flex-col justify-start pt-16 items-center fixed top-0 ${isMenuOpen
                            ? "right-0 transition-all duration-500 ease-linear"
                            : "opacity-0 right-[-100%] transition-all duration-500 ease-linear "
                        }`}
                >
                    <div
                        className="absolute block p-1 cursor-pointer w-max bg-primary top-5 right-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <RiCloseLargeLine className="text-2xl text-info" />
                    </div>
                    {isMenuOpen && (
                        <ul className="relative flex md:hidden flex-col gap-3.5 px-10 font-normal w-full py-6 font-merriWeather ">
                            {navbarLinks.map((list, idx) => (
                                <div key={idx}>
                                    {list.menu === "Careers" ? (
                                        <div>
                                            <h4
                                                className={` ${isActive === list.menu &&
                                                        pathname !== "/" &&
                                                        isActive !== "Careers"
                                                        ? "underline underline-offset-8 decoration-[#c20003]"
                                                        : ""
                                                    } text-base font-medium uppercase font-libreCaslonDisplay`}
                                            >
                                                {list.menu}
                                            </h4>
                                        </div>
                                    ) : (
                                        <Link
                                            href={list.ref}
                                            onClick={() => handleClick(list.menu)}
                                        >
                                            <h4
                                                className={` ${isActive === list.menu &&
                                                        pathname !== "/" &&
                                                        isActive !== "Careers"
                                                        ? "underline underline-offset-8 decoration-[#c20003]"
                                                        : ""
                                                    } text-base font-medium uppercase font-libreCaslonDisplay`}
                                            >
                                                {list.menu}
                                            </h4>
                                        </Link>
                                    )}

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
