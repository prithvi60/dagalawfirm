import { services } from '@/libs/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const PracticesComponent = () => {
    return (
        <>
            <h2 className="flex justify-center px-5 text-xl font-medium tracking-wide capitalize py-7 lg:px-16 lg:py-12 md:text-3xl text-info font-merriWeather">Practice areas where we excel</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {services.map((item, idx) => (
                    <div key={idx} className={`font-merriWeather flex flex-col md:flex-row justify-center items-center h-full border-2 border-info relative py-10`}>
                        <div className="relative w-full mx-auto overflow-hidden size-28 md:m-auto md:size-44 md:basis-1/2">
                            <Image alt="sample-image" src={item.icon} fill className="object-contain object-center" />
                        </div>
                        <div className={`block px-5 py-5 space-y-2 md:space-y-5 w-full md:w-3/5 text-center md:text-start`}>
                            <h4 className="w-full text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">{item.menu}</h4>
                            <div className="flex items-center justify-center gap-2 md:justify-start">
                                <Link
                                    href={`/services/${item.ref}`}
                                    className="text-sm font-normal tracking-wide underline hover:bg-opacity-70 text-info font-merriWeather underline-offset-4 decoration-info "
                                >
                                    Learn more
                                </Link>
                                <FaArrowRightLong className="text-sm text-info" />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default PracticesComponent
