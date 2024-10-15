import Image from 'next/image'
import React from 'react'

export const PersonDescription = ({ data }) => {
    return (
        <section className="relative flex flex-col gap-5 px-5 border-t-2 mt-14 md:mt-16 md:flex-row lg:pl-16 border-info py-7 lg:px-16 lg:py-12 md:gap-10">
            <div className='basis-full md:basis-2/5'>
                <div className="relative w-full md:h-[320px] h-[280px] overflow-hidden group z-0 contrast-100  md:sticky md:top-32">
                    <Image alt="sample-image" src={data.img} fill className="object-cover object-top transition-all duration-200 ease-in-out group-hover:scale-110" />
                    <div className="absolute left-0 z-10 flex items-center justify-between w-full gap-4 px-5 bottom-0 lg:px-8 backdrop-brightness-[0.70] pb-2">
                        <div className="block">
                            <h3 className="mb-4 text-xl font-medium text-white md:text-xl xl:text-2xl font-merriWeather">{data.name}</h3>
                            <div className='px-4 py-2 text-sm font-normal tracking-wide  bg-[#1a1a1a] text-primary font-merriWeather w-max'>{data.position}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full space-y-4 basis-3/5 md:space-y-8">
                <div className='space-y-2'>
                    <h1 className="font-bold tracking-wide capitalize text-xl lg:text-2xl xl:text-[36px] font-merriWeather text-info">
                        About - {data.name}
                    </h1>
                    <p className="text-sm italic font-bold tracking-wide capitalize md:text-base font-merriWeather text-info">
                        Daga and Daga Intellectual Property Attorneys
                    </p>
                </div>
                <ul className="space-y-5 text-sm font-normal md:text-base md:space-y-10 font-merriWeather">
                    {data.desc.map((list, idx) => (
                        <li key={idx}>{list}</li>
                    ))}
                </ul>
                <div></div>
            </div>

        </section>
    )
}
