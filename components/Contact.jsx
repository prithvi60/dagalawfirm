import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <section className="px-5 space-y-8 py-7 lg:px-16 lg:py-12 font-merriWeather">
            <h4 className="text-xl font-medium tracking-wide capitalize font-merriWeather text-info sm:text-2xl lg:text-3xl">Ready to Take the Next Step? Reach Out Today!</h4>
            <div className="flex flex-col items-start md:gap-32 md:flex-row gap-9">
                <p className="text-base font-normal basis-full md:basis-3/5 md:text-lg font-merriWeather ">Our team is here to provide the guidance you need. Contact us now to discuss your case and explore the best solutions for you.</p>
                <Link href={"/contact"} className='px-4 py-2 text-sm font-normal tracking-wide bg-info text-primary md:text-lg font-merriWeather'>Get in touch</Link>
            </div>
        </section>
    )
}

export default Contact
