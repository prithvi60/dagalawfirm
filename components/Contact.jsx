import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <section className="px-5 space-y-8 py-7 lg:px-16 lg:py-12">
            <h4 className="text-xl font-medium tracking-wide capitalize font-merriWeather text-info sm:text-2xl lg:text-3xl">Reach out tag line</h4>
            <div className="flex flex-col items-start md:gap-32 md:flex-row gap-9">
                <p className="text-base font-normal basis-full md:basis-3/5 md:text-lg font-montserrat ">Lorem ipsum dolor sit amet consectetur. Suscipit erat neque nulla pulvinar massa gravida volutpat libero. Purus id nibh urna ac. Facilisis purus diam urna mattis phasellus mauris. Sem nec vel ultricies nunc.Lorem ipsum dolor sit amet consectetur. </p>
                <Link href={""} className='p-2 text-sm font-normal tracking-wide rounded-lg md:p-3 bg-info text-primary md:text-lg font-montserrat'>Get in touch</Link>
            </div>
        </section>
    )
}

export default Contact
