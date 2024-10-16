import Image from 'next/image'
import React from 'react'
import ContactForm from './ContactForm'

const ContactHero = () => {
    return (
        <section className="relative flex flex-col w-full h-screen overflow-hidden mt-14 sm:flex-row font-merriWeather">
            <div className="w-full h-full">
                <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h3 className='font-medium tracking-wide capitalize text-xl md:text-4xl lg:text-[48px] font-merriWeather text-primary leading-8 lg:!leading-[50px]'>Let’s Connect!</h3>
                    <h3 className='font-medium tracking-wide capitalize text-xl md:text-4xl lg:text-[48px] font-merriWeather text-primary leading-8 lg:!leading-[50px]'>Reach out to us</h3>
                    {/* <ContactForm /> */}
                </div>
                <div className="absolute z-10 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-info/10 top-1/2 left-1/2"></div>
                <div className="relative z-0 w-full h-screen">
                    <Image
                        alt="bg image"
                        src={"/contact-hero-bg.jpeg"}
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactHero
