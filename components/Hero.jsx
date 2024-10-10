import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CounterUp } from './CounterUp'

const Hero = () => {
    return (
        <section className="relative flex flex-col sm:flex-row w-full h-full md:h-[75vh] xl:h-[85vh] mt-24 overflow-hidden xl:mt-20 mb-8 lg:mb-12">
            <div className="basis-full sm:basis-4/5">
                <div className="absolute top-10 md:top-1/2 md:-translate-y-1/2 left-0 flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-bold py-2 px-3.5 z-10 w-full sm:w-3/5 lg:w-3/5">
                    <div className='flex flex-col md:justify-between items-start gap-6 md:gap-14 p-2 w-[90%]'>
                        <h1 className='font-medium tracking-wide uppercase text-xl md:text-4xl lg:text-[48px] font-merriWeather text-secondary leading-8 lg:!leading-[50px]'>Expert legal solution with INTEGRITY</h1>
                        <div className='flex items-center justify-center gap-5 pb-3.5'>
                            <Link href={""} className='p-2 text-sm font-normal tracking-wide rounded-lg md:p-3 bg-info text-primary md:text-lg font-montserrat'>Contact us</Link>
                            <Link href={""} className='p-2 text-sm font-normal tracking-wide bg-transparent border-2 rounded-lg text-s text-primary md:text-lg border-secondary font-montserrat '>Our Services</Link>
                        </div>
                    </div>
                </div>

                <div className="relative z-0 w-full h-[55vh] md:h-[75vh] xl:h-[85vh]">
                    <Image
                        alt="bg image"
                        src={"/hero-bg.jpeg"}
                        fill
                        className="object-cover object-left md:object-center"
                    />
                </div>
            </div>
            <div className="basis-full sm:basis-1/5">
                <CounterUp />
            </div>
        </section>
    )
}

export default Hero
