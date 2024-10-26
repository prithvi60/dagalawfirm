import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CounterUp } from './CounterUp'

const Hero = () => {
    return (
        <section className="relative flex flex-col w-full h-screen overflow-hidden border-b-2 font-merriWeather sm:flex-row border-copy mt-14">
            <div className="z-0 w-full h-screen bg-fixed basis-full sm:basis-4/5  bg-top bg-contain md:bg-right-top bg-no-repeat md:bg-cover bg-[url('/heromob.png')] md:bg-[url('/hero2.png')]" 
            // style={{
            //     backgroundImage: `url("/hero.webp")`,
            //      }
            //     }
                 >
                <div className="absolute top-[10vh] sm:top-1/2 md:-translate-y-1/2 left-0 flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-bold py-2 px-3.5 z-10 w-full sm:w-3/5 lg:w-3/5">
                    <div className='flex flex-col md:justify-between items-start gap-6 md:gap-10 p-2 w-full sm:w-[90%]'>
                        <h1 className='font-bold text-left tracking-wide text-2xl md:text-4xl lg:text-[48px] font-merriWeather text-secondary leading-8 lg:!leading-[50px]'>Transforming Ideas into Assets
                        </h1>
                        <p className='font-normal text-md md:text-base lg:text-lg font-merriWeather text-secondary'>Reliable legal support for all your intellectual property needs—guiding and protecting you at every step.</p>
                        <div className='flex items-center justify-start gap-5 pb-3.5 w-full md:w-auto'>
                            <Link href={"/contact"} className='px-4 py-2 text-xs font-normal tracking-wide md:p-3 bg-info text-primary md:text-lg font-merriWeather hover:scale-105'>Contact us</Link>
                            <Link href={"/services"} className='px-4 py-2 text-xs font-normal tracking-wide bg-transparent border-2 text-s text-primary md:text-lg border-secondary font-merriWeather hover:scale-105'>Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-full sm:basis-1/5 ">
                <CounterUp />
            </div>
        </section>
    )
}

export default Hero
