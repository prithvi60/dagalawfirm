import Image from 'next/image'
import React from 'react'

const TeamHero = () => {
    return (
        <section className="relative flex flex-col sm:flex-row w-full h-full md:h-[75vh] xl:h-[85vh] overflow-hidden mt-20">
            <div className="w-full h-full">
                <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h3 className='font-medium tracking-wide capitalize text-xl md:text-4xl lg:text-[48px] font-merriWeather text-primary leading-8 lg:!leading-[50px]'>Advocacy Excellence Team</h3>
                </div>
                <div className="relative z-0 w-full h-[55vh] md:h-[75vh] xl:h-[85vh]">
                    <Image
                        alt="bg image"
                        src={"/team-bg.jpg"}
                        fill
                        className="object-cover object-top brightness-[0.35]"
                    />
                </div>
            </div>
        </section>
    )
}

export default TeamHero
