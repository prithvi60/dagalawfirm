import Image from 'next/image'
import React from 'react'

const SpecializationHero = ({ name }) => {
    const filteredName = name.replace(/_/g, " ")
    // console.log(filteredName);

    return (
        <section className='block mt-14 font-merriWeather'>
            <h1 className='text-3xl py-6 uppercase text-center sm:text-4xl lg:text-6xl xl:text-[96px] font-merriWeather font-bold tracking-wider text-info'>{filteredName}</h1>
            <div className="relative z-0 w-full h-[280px]">
                <Image
                    alt="bg image"
                    src={"/service-hero-bg.jpeg"}
                    fill
                    className="object-cover object-center"
                />
            </div>
        </section>
    )
}

export default SpecializationHero
