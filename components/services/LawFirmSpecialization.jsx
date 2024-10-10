import { specializations } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const LawFirmSpecialization = () => {
    return (
        <section className="relative flex flex-col px-5 border-t-2 md:px-0 md:pl-5 md:flex-row lg:pl-16 border-info">
            <div className="h-full p-5 space-y-4 md:p-0 md:pr-10 md:pt-10 basis-2/5 md:space-y-8 lg:sticky lg:top-20">
                <h1 className="font-bold tracking-wide capitalize text-xl lg:text-2xl xl:text-[36px] font-merriWeather text-info">
                    Protecting Your Ideas, Innovations, and Brands.
                </h1>
                <p className="text-sm font-normal font-montserrat">
                    From patent filings to trademark protection and litigation, our
                    specialized legal services cover every aspect of intellectual
                    property. Our experienced attorneys work relentlessly to safeguard
                    your ideas, designs, and brand, giving you the peace of mind to focus
                    on innovation.
                </p>
                <div></div>
            </div>
            <div>
                {specializations.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col w-full border sm:flex-row border-info"
                    >
                        <div className="basis-full md:basis-1/2">
                            <div className="relative z-0 w-full h-[320px] md:h-[350px] xl:h-[370px]">
                                <Image
                                    alt="bg image"
                                    src={item.src}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className=" basis-full md:basis-1/2">
                            <div className="h-full p-6 space-y-4 text-center lg:p-10 sm:text-end lg:space-y-8">
                                <h1 className="font-bold tracking-wide capitalize text-lg lg:text-xl font-merriWeather text-info leading-8 lg:!leading-[50px]">
                                    {item.specialize}
                                </h1>
                                <p className="text-sm font-normal lg:text-base md:text-lg font-montserrat">
                                    {item.note}
                                </p>
                                <div className="flex items-center justify-end gap-2">
                                    <Link
                                        href={`/services/${item.specialize}`}
                                        className="text-sm font-normal tracking-wide hover:bg-opacity-70 text-info font-montserrat"
                                    >
                                        Learn more
                                    </Link>
                                    <FaArrowRightLong className="text-sm text-info" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LawFirmSpecialization;
