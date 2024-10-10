import Image from 'next/image'
import React from 'react'

const PracticesComponent = ({ style, src, title }) => {
    return (
        <section className={`${style} relative`}>
            {/* <div className="absolute w-full h-full bg-no-repeat bg-contain md:basis-2/5" style={{
                backgroundImage: `url("/sample-1.jpeg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            </div> */}
            <div className="relative w-full md:h-[370px] h-[280px] overflow-hidden md:basis-2/5">
                <Image alt="sample-image" src={src} fill className="object-cover object-center" />
            </div>
            <div className={`block px-5 py-5  space-y-5  basis-3/5 lg:px-16 ${!title && "mt-4 md:mt-14"}`}>
                {title === true && (<h2 className="text-2xl font-medium tracking-wide capitalize lg:text-center md:text-3xl text-info font-cormorant">Practice areas where we excel</h2>)}

                <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-montserrat text-info">Practice</h4>
                <p className="text-base font-normal md:text-lg font-montserrat">Lorem ipsum dolor sit amet consectetur. Suscipit erat neque nulla pulvinar massa gravida volutpat libero. Purus id nibh urna ac. Facilisis purus diam urna mattis phasellus mauris. Sem nec vel ultricies nunc.Lorem ipsum dolor sit amet consectetur. Suscipit erat neque nulla pulvinar massa gravida volutpat libero. Purus id nibh urna ac. </p>
            </div>
        </section>
    )
}

export default PracticesComponent
