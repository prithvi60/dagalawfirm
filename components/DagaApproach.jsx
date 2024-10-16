import { dagaIcons } from '@/libs/data'
import Image from 'next/image'
import React from 'react'

const DagaApproach = () => {
    return (
        <section className='w-full h-full font-merriWeather'>
            <h1 className='py-12 border-t-2 border-info uppercase text-center text-lg  md:text-xl xl:text-[40px] font-merriWeather font-bold tracking-wider text-info'>The Daga and Daga Approach</h1>
            <div className='grid grid-cols-1 border md:grid-cols-2 lg:grid-cols-3 lg:flex-nowrap border-info'>
                {dagaIcons.map((list, idx) => (
                    <div key={idx} className='block w-full p-10 space-y-2 border border-info' >
                        <div className='relative mx-auto size-28 lg:size-32'>
                            <Image alt={`${list.note} icon`} src={list.icon} fill className='object-cover object-center' />
                        </div>
                        <h4 className='text-base font-medium tracking-wide text-center capitalize md:text-lg lg:text-xl'>{list.note}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DagaApproach
