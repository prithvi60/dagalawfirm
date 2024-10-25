"use client"
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CounterUp = () => {
    return (
        <div className="w-full h-full px-4 py-6 sm:pt-0 font-merriWeather">
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 md:gap-10 xl:gap-14">
                <Stat1
                    num={6451}
                    suffix="+"
                    subheading="Applications"
                />
                {/* <div className="h-[1px] w-12 sm:h-6 sm:w-[1px]" /> */}
                <Stat1
                    num={4000}
                    suffix="+"
                    subheading="Clients"
                    styles="font-bold"
                />
                {/* <div className="h-[1px] w-12 sm:h-6 sm:w-[1px]" /> */}
                <Stat1
                    num={34}
                    suffix="+"
                    subheading="Years of Experience"
                />
            </div>
        </div>
    );
};

const Stat1 = ({ num, suffix, decimals = 0, subheading, styles }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 0.8,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className={`${styles} flex flex-col items-center w-full sm:w-3/5 bg-primary`}>
            <p className="mb-2 text-center text-info text-2xl md:text-3xl xl:text-[48px] font-merriWeather font-bold">
                <span ref={ref}></span>
                <span className="text-lg lg:text-[48px]">{suffix}</span>
            </p>
            <p className="text-center text-2xl md:text-3xl !leading-tight xl:text-[48px] text-copy font-merriWeather font-medium">{subheading}</p>
        </div>
    );
};

