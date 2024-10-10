import Image from 'next/image'
import React from 'react'

const ContactDetails = ({ style, src, title, data }) => {
    return (
        <section className={`${style} relative`}>
            <div className="relative w-full md:h-[370px] h-[280px] overflow-hidden md:basis-2/5">
                <Image alt="sample-image" src={src} fill className="object-cover object-center" />
            </div>
            <div className={`block m-auto w-max px-5 py-5 basis-3/5 lg:px-16 "}`}>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-montserrat text-info">{title}</h4>
                    <ul className='space-y-2 text-base font-normal list-disc list-inside w-max md:text-lg font-merriWeather'>
                        {data.map((list, idx) => (
                            <li key={idx}>{list}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails

export const ContactDetailsAddress = () => {
    return (
        <section className={`flex flex-col md:flex-row h-full border-2 border-info relative`}>
            <div className="relative w-full md:h-[370px] h-[280px] overflow-hidden md:basis-2/5">
                <Image alt="sample-image" src={"/contact-sample-3.jpeg"} fill className="object-cover object-center" />
            </div>
            <div className={`block m-auto w-max px-5 py-5 basis-3/5 lg:px-16 "}`}>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">Office Address</h4>
                    <ul className='space-y-2 text-base font-normal list-inside w-max md:text-lg font-montserrat'>
                        <li>Daga & Daga Law Firm</li>
                        <li>3rd floor, Swarna shree complex, Sowcarpet, 36, Veerappan St</li>
                        <li>Sowcarpet,</li>
                        <li>Chennai - 600001,</li>
                        <li>Tamil Nadu, India.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}