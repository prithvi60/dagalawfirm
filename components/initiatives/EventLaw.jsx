import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const EventLaw = ({ mainTitle, title, img, bgImg, data, styles }) => {
  return (
    <section className="w-full h-full space-y-4 border border-info">
      <div className="flex flex-col items-center justify-center gap-1 my-8 md:flex-row text-info">
        <h1 className="px-3 text-3xl tracking-wider text-center uppercase md:text-4xl xl:text-6xl">
          {mainTitle}
        </h1>
        <h4 className="text-xl md:text-3xl xl:text-[48px] tracking-wide xl:text-6xl">
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
      <div className={`${styles} h-full gap-10 mb-5 px-5 pb-6 md:gap-6 basis-2/5 lg:px-16 lg:pb-8`}>
        <div className="relative z-0 w-full h-72 md:h-[400px]">
          <Image
            alt="bg image"
            src={img}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative px-5 sm:px-0">
          <ul className="w-full mx-auto space-y-5 text-sm font-normal md:text-base font-montserrat md:w-4/5">
            <FaQuoteLeft className="absolute text-xl md:text-2xl -top-6 sm:-top-4 -left-2 sm:left-6 text-info" />
            {data.map((list, idx) => (
              <li key={idx}>{list}</li>
            ))}
            <FaQuoteRight className="absolute right-0 text-2xl -bottom-6 sm:right-6 text-info" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventLaw;
