import Image from 'next/image'
import React from 'react'

const InitiativeHero = () => {
    return (
        <section className="relative flex flex-col md:flex-row w-full h-full md:h-[65vh] xl:h-[75vh] mt-14 overflow-hidden font-merriWeather">
            <div className="basis-full md:basis-2/5 bg-[#B28A42]">
                <div className='h-full px-10 py-16 space-y-4 xl:py-36 md:space-y-8 text-primary'>
                    {/* <h1 className='font-bold tracking-wide capitalize text-2xl lg:text-4xl xl:text-[48px] font-merriWeather leading-8 lg:!leading-[42px]'>Experienced Legal Counsel for Every Step of the Way</h1> */}
                    <p className='text-base font-normal md:text-lg font-merriWeather'>We actively engage in social initiatives, offering impactful workshops and seminars that empower individuals and communities. Our efforts extend beyond education, as we collaborate with local organizations, volunteer in various projects, and contribute meaningfully to societal development. Through these initiatives, we aim to foster positive change, promote learning, and inspire people to make a difference.</p>
                </div>
            </div>
            <div className="basis-full md:basis-3/5">
                <div className="relative z-0 w-full h-[45vh] md:h-[65vh] xl:h-[75vh]">
                    <Image
                        alt="bg image"
                        src={"/sample-5.jpeg"}
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}

export default InitiativeHero
