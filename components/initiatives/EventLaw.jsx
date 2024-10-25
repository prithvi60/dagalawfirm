import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const EventLaw = ({ mainTitle, title, img, bgImg, data, styles }) => {
  return (
    <section className="w-full h-full space-y-4 border border-copy font-merriWeather">
      <div className="flex flex-col items-center justify-center gap-1 my-8 lg:items-start lg:flex-row text-info">
        <h1 className="px-3 text-3xl tracking-wider text-center uppercase md:text-4xl xl:text-6xl">
          {mainTitle}
        </h1>
        <h4 className="text-xl  xl:mt-2 md:text-3xl xl:text-[48px] tracking-wide xl:text-6xl">
          {title}
        </h4>
      </div>
      <div className="relative z-0 w-full h-[50vh]">
        <Image
          alt="bg image"
          src={bgImg}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className={`${styles} h-full gap-10 mb-5 px-5 pb-6 md:gap-6 lg:px-16 lg:pb-8`}>
        <div className="relative z-0 w-full h-72 md:w-[400px] md:h-[400px]">
          <Image
            alt="bg image"
            src={img}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="w-full md:px-5 sm:px-0 ">
          <ul className="relative w-4/5 mx-auto space-y-5 text-sm font-normal md:w-3/4 md:text-base font-merriWeather">
            <FaQuoteLeft className="absolute text-lg md:text-xl -left-7 -top-3 lg:text-2xl xl:-top-2 xl:-left-10 text-info" />
            {data.map((list, idx) => (
              <li key={idx}>{list}</li>
            ))}
            <FaQuoteRight className="absolute text-lg md:text-xl -right-6 lg:text-2xl -bottom-3 xl:-right-4 xl:-bottom-4 text-info" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventLaw;
