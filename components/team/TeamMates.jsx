import { teamDetails } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const TeamMates = () => {
    return (
        <section className="px-5 space-y-8 py-7 lg:px-16 lg:py-12">
            <h4 className="font-bold tracking-wide capitalize text-xl lg:text-2xl xl:text-[36px] md:!leading-snug font-merriWeather text-info">
                Our team comprises of the following individuals
            </h4>
            <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {teamDetails.map((list, idx) => (
                    <>
                        {list.ref ? (
                            <Link
                                key={idx}
                                href={`/team/${list.ref}`}
                                className="relative w-full md:h-[320px] h-[280px] overflow-hidden group z-0 contrast-100 "
                            >
                                <Image
                                    alt="sample-image"
                                    src={list.img}
                                    fill
                                    className="object-cover object-top transition-all duration-200 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute left-0 z-10 flex items-center justify-between w-full gap-4 px-5 bottom-4 lg:px-8">
                                    <div className="block">
                                        <h3 className="mb-4 text-xl font-medium text-white md:text-xl xl:text-2xl font-montserrat">
                                            {list.name}
                                        </h3>
                                        <div className="px-4 py-2 text-sm font-normal tracking-wide bg-[#1a1a1a] text-primary font-montserrat w-max">
                                            {list.position}
                                        </div>
                                    </div>
                                    <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                                        <LuArrowUpRightFromCircle className="text-xl text-info" />
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div
                                key={idx}
                                className="relative w-full md:h-[320px] h-[280px] overflow-hidden group z-0 contrast-100 "
                            >
                                <Image
                                    alt="sample-image"
                                    src={list.img}
                                    fill
                                    className="object-cover object-top transition-all duration-200 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute left-0 z-10 flex items-center justify-between w-full gap-4 px-5 bottom-4 lg:px-8">
                                    <div className="block">
                                        <h3 className="mb-4 text-xl font-medium text-white md:text-xl xl:text-2xl font-montserrat">
                                            {list.name}
                                        </h3>
                                        <div className="px-4 py-2 text-sm font-normal tracking-wide  bg-[#1a1a1a] text-primary font-montserrat w-max">
                                            {list.position}
                                        </div>
                                    </div>
                                    {/* <div className="p-1 transition-all duration-200 ease-in-out rounded-full bg-secondary w-max group-hover:scale-110 group-hover:animate-bounce">
                    <LuArrowUpRightFromCircle className="text-xl text-info" />
                  </div> */}
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </section>
    );
};

export default TeamMates;

// Our team comprises of the following individuals: -
// 1. Mr. Ashok Kumar J. Daga - Founder
// 2. Mr. A. Jayesh Kumar Daga - Head - Litigations
// 3. Mrs. Pavithra K. - Associate
// 4. Ms. Bharathy - Paralegal
// 5. Mr Santhana Krishnan - Accounts Executive
// 6. Mrs. Sunita S. - Staff
// 7. Mr. Vijay - Staff
// 8. Mr. Dinesh - Clerk
