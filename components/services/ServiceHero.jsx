import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceHero = () => {
    return (
        <section className="font-merriWeather relative flex flex-col md:flex-row w-full h-full md:h-[65vh] xl:h-[75vh] overflow-hidden mt-14">
            <div className="basis-full md:basis-3/5">
                <div className="relative z-0 w-full h-[45vh] md:h-[65vh] xl:h-[75vh]">
                    <Image
                        alt="bg image"
                        src={"/service-hero-bg.jpeg"}
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
            <div className="h-full basis-full md:basis-2/5">
                <div className='flex flex-col items-center justify-center h-full gap-4 p-10 text-center md:gap-8'>
                    {/* <h1 className='font-bold tracking-wide capitalize text-2xl lg:text-4xl xl:text-[48px] font-merriWeather text-info leading-8 lg:!leading-[42px]'>Experienced Legal Counsel for Every Step of the Way</h1> */}
                    <p className='text-sm font-normal md:text-base lg:text-lg font-merriWeather'>Whether you need guidance through complex litigation or personalized legal advice, our experienced attorneys are here to support you every step of the way</p>
                    <div>
                        <Link href={"/contact"} className='p-2 text-sm font-normal tracking-wide hover:bg-opacity-70 rounded-xl md:p-3 bg-info text-primary md:text-lg font-merriWeather'>Get in Touch!</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceHero
