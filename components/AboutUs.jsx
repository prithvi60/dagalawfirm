import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
        <section className="w-full h-full px-5 border-t-2 border-copy font-merriWeather">
            <div
                className={`flex flex-col justify-center md:justify-start items-start md:items-center md:flex-row h-full gap-10 px-5 py-8 md:gap-6 lg:px-16 lg:py-10`}
            >
                <div className="relative z-0 w-full h-72 md:w-[500px] md:h-[500px]">
                    <Image
                        alt="bg image"
                        src={"/sample-6.jpg"}
                        fill
                        className="object-cover object-center"
                    />
                </div>
                {/* <div className="w-full "> */}
                <ul className="relative w-full mx-auto space-y-5 text-sm font-normal md:w-3/4 md:text-base text-justify font-merriWeather !leading-[32px]">
                    {/* <FaQuoteLeft className="absolute text-xl -left-7 -top-3 lg:text-2xl xl:-top-2 xl:-left-10 text-info" /> */}
                    {/* {data.map((list, idx) => ( */}
                    <li>
                        Backed by a team of experienced legal professionals, the firm offers
                        tailored legal advice and counsel to individuals, businesses, and
                        institutions in areas such as trademarks, copyrights, patents,
                        design protection, commercial litigation, and dispute resolution.
                        The firm represents clients before prominent forums including the
                        Madras High Court,the Delhi High Court,the Intellectual Property Rights
                        Tribunal, and several other legal bodies. Its vast expertise
                        encompasses not only the Indian legal system but also international
                        jurisdictions including China, Sri Lanka, Vietnam, the UAE,
                        Singapore etc., providing a comprehensive global
                        outreach. It has successfully represented clients from multiple
                        industries, such as technology, pharmaceuticals, fashion, media and
                        entertainment, among others.
                    </li>
                    <li>
                        The firm takes pride in staying ahead of the curve in the
                        ever-evolving legal landscape ensuring that its clients&apos; interests
                        are protected at all times. End-to-end support is
                        ensured at every stage of the journey from filing applications to defending
                        Intellectual Property Rights and navigating complex litigations with
                        efficiency and ease.
                    </li>
                    {/* ))} */}
                    {/* <FaQuoteRight className="absolute text-xl -right-6 lg:text-2xl -bottom-3 xl:-right-4 xl:-bottom-4 text-info" /> */}
                </ul>
                {/* </div> */}
            </div>
        </section>
    );
};

export default AboutUs;
