import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// const ContactDetails = ({ style, src, title, data }) => {
//     return (
//         <section className={`${style} relative`}>
//             <div className="relative w-full md:h-[370px] h-[280px] overflow-hidden md:basis-2/5">
//                 <Image alt="sample-image" src={src} fill className="object-cover object-center" />
//             </div>
//             <div className={`block m-auto w-max px-5 py-5 basis-3/5 lg:px-16 "}`}>
//                 <div className='flex flex-col items-center justify-center gap-5'>
//                     <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">{title}</h4>
//                     <ul className='space-y-2 text-base font-normal list-disc list-inside w-max md:text-lg font-merriWeather'>
//                         {data.map((list, idx) => (
//                             <li key={idx}>{list}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ContactDetails

export const ContactDetailsAddress = ({ title1, title2 }) => {
    return (
        <section className={`flex flex-col md:flex-row h-full border-2 border-info relative font-merriWeather`}>
            <div className="relative w-full h-[320px] md:h-auto overflow-hidden md:basis-2/5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.12746916387!2d80.27536107436742!3d13.091106987235392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f57ca5a5627%3A0xf19388f24d84a737!2sDaga%20%26%20Daga%20Intellectual%20Property%20Attorneys!5e0!3m2!1sen!2sin!4v1728555161132!5m2!1sen!2sin" width={"100%"} height={"100%"} className="w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={`grid-cols-1 sm:grid-cols-2 grid md:place-content-center md:place-items-center gap-5 w-full py-8 md:py-5 basis-3/5 px-5 "}`}>
                <div className='flex flex-col items-center gap-3 md:justify-center'>
                    <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">{title1}</h4>
                    <ul className='space-y-2 text-sm font-normal list-inside w-max md:text-lg font-merriWeather'>
                        <h4 className='hidden md:block'>+91- 9551028280</h4>
                        <Link href="tel:+919551028280" className='block hover:text-info/80 md:hidden'>+91- 9551028280</Link>
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">{title2}</h4>
                    <ul className='space-y-2 text-sm font-normal list-inside w-max md:text-lg font-merriWeather'>
                        <Link href="mailto:enquiry@dagaanddaga.com" className='hover:text-info/80'>enquiry@dagaanddaga.com</Link>
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center gap-5 sm:col-span-2'>
                    <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">Office Address</h4>
                    <ul className='w-full space-y-2 text-sm font-normal text-center list-inside md:text-lg font-merriWeather'>
                        <li>Daga & Daga Intellectual Property Attorneys</li>
                        <li>3rd floor, Swarna Shree Complex, 36, Veerappan St</li>
                        <li>Sowcarpet,</li>
                        <li>Chennai - 600001,</li>
                        <li>Tamil Nadu, India.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}