import Image from 'next/image'
import React from 'react'

export const PersonDescription = ({ data }) => {
    return (
        <section className="relative flex flex-col gap-5 px-5 border-t-2 md:flex-row lg:pl-16 border-info py-7 lg:px-16 lg:py-12 md:gap-10">
            <div className='basis-full md:basis-2/5'>
                <div className="relative w-full md:h-[320px] h-[280px] overflow-hidden group z-0 contrast-100 rounded-lg md:sticky md:top-32">
                    <Image alt="sample-image" src={data.img} fill className="object-cover object-top transition-all duration-200 ease-in-out group-hover:scale-110" />
                    <div className="absolute left-0 z-10 flex items-center justify-between w-full gap-4 px-5 bottom-4 lg:px-8">
                        <div className="block">
                            <h3 className="mb-4 text-xl font-medium text-white md:text-xl xl:text-2xl font-montserrat">{data.name}</h3>
                            <div className='p-2 text-sm font-normal tracking-wide rounded-lg bg-info text-primary font-montserrat w-max'>{data.position}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full space-y-4 basis-3/5 md:space-y-8">
                <div className='space-y-2'>
                    <h1 className="font-bold tracking-wide capitalize text-xl lg:text-2xl xl:text-[36px] font-merriWeather text-info">
                        About - {data.name}
                    </h1>
                    <p className="text-sm font-bold tracking-wide capitalize md:text-base font-merriWeather text-info">
                        Daga and Daga Intellectual Property Attorneys
                    </p>
                </div>
                <ul className="space-y-5 text-sm font-normal md:text-base md:space-y-10 font-montserrat">
                    <li>A visionary leader and the guiding light behind Daga and Daga Intellectual Property
                        Attorneys. Ashok Kumar J. Daga has been a cornerstone in shaping the firm&#39;s legacy since its
                        inception in 1994. Hailing from a family with deep ties to the jewellery industry, he set forth
                        on a path to forge a legacy that was distinctly his own. As a first-generation lawyer, his
                        unwavering zeal and entrepreneurial spirit fuelled his ambition to establish this remarkable
                        empire. Driven by a deep-seated passion for law and a steadfast dedication to excellence, he
                        has built Daga and Daga into one of the most respected names in the intellectual property
                        realm.</li>
                    <li>His journey began with a Bachelor of Arts (BA) degree in 1985, followed by a Bachelor of
                        Law (BL) in 1988. His formative years in law were deeply influenced by his mentor, V.
                        Veeraghavan, under whose guidance he honed his legal acumen and strategic thinking in
                        Intellectual Property. The principles instilled in him during this time became the foundation
                        of Daga and Daga’s core values.</li>
                    <li>For him, Daga and Daga is more than just a professional establishment—it is an emotion, a
                        reflection of his lifelong dedication to protecting and empowering businesses through robust
                        intellectual property solutions. Over the years, the firm has proudly served more than 4,000
                        clients, handled several complex litigations, successfully filed more than 8,000 applications
                        for IP prosecution, and diligently protected the intellectual property rights of countless
                        businesses, industries and conglomerates. His professionalism shines through in every facet
                        of his work, from his thoughtful approach to clients, proficient handling of complex cases,
                        and respectful, kind interactions with the entire team. His leadership is also marked by his
                        dedication to mentoring the next generation of legal minds, having trained and guided a
                        significant number of interns who have gone on to make their mark in the legal profession.</li>
                    <li>He believes that &quot;Every challenge harbors a solution, provided we engage in thoughtful
                        reflection.&quot; With a visionary outlook and an unyielding dedication to justice, Ashok Kumar J.
                        Daga resolutely steers Daga and Daga, nurturing an environment where the interests of
                        clients reign supreme, and intellectual property is safeguarded with precision, integrity, and
                        passion.</li>
                </ul>
                <div></div>
            </div>

        </section>
    )
}
