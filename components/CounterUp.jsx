"use client"
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CounterUp = () => {
    return (
        <div className="w-full h-full px-4 pt-6 sm:pt-0">
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 md:gap-10 xl:gap-14">
                <Stat1
                    num={8000}
                    suffix="+"
                    subheading="Applications"
                />
                {/* <div className="h-[1px] w-12 sm:h-6 sm:w-[1px]" /> */}
                <Stat1
                    num={4000}
                    suffix="+"
                    subheading="Clients"
                />
                {/* <div className="h-[1px] w-12 sm:h-6 sm:w-[1px]" /> */}
                <Stat1
                    num={34}
                    suffix="+"
                    subheading="years of Experience"
                />
            </div>
        </div>
    );
};

const Stat1 = ({ num, suffix, decimals = 0, subheading }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex flex-col items-center w-full sm:w-3/5 bg-primary">
            <p className="mb-2 text-center text-info text-2xl md:text-3xl xl:text-[48px] font-cormorant font-medium">
                <span ref={ref}></span>
                <span className="text-lg lg:text-[48px]">{suffix}</span>
            </p>
            <p className="text-center text-2xl md:text-3xl xl:text-[48px] text-info font-cormorant font-medium">{subheading}</p>
        </div>
    );
};

