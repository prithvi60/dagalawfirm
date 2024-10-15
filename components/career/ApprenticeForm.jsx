import React from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ApprenticeForm = ({ type, desc, title }) => {
    return (
        <section className="flex flex-col items-center justify-center gap-2 px-5 mt-14 md:mt-16 md:gap-6 lg:px-16 lg:py-12">
            <h1 className='py-6 uppercase text-center text-4xl lg:text-6xl xl:text-[96px] font-merriWeather font-bold tracking-wider text-info'>{type}</h1>
            <div className="flex flex-col gap-8 md:flex-row">
                <div className="space-y-5 md:space-y-10 md:mt-16 basis-full md:basis-2/5">
                    <h4 className='text-lg font-semibold tracking-wide text-center capitalize sm:text-xl xl:text-2xl font-merriWeather text-info'>{title}</h4>
                    <div className="relative w-full">
                        <FaQuoteLeft className="absolute text-xl -left-2 -top-4 xl:-top-2 xl:-left-0 text-info" />
                        <p className='text-sm font-normal tracking-wide text-center sm:text-base font-merriWeather text-info'>{desc}</p>
                        <FaQuoteRight className="absolute text-xl -right-2 -bottom-3 xl:-right-0 xl:-bottom-4 text-info" />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-5 space-y-8 justify-normal lg:flex-row md:w-3/5 py-7">
                    <div className="w-full px-6 py-8 mx-auto space-y-4 bg-info/80">
                        <h3 className="w-full text-4xl font-normal text-center capitalize text-secondary font-libreCaslonDisplay">
                            Let’s Connect
                        </h3>
                        <form>
                            {/* User Name */}
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-white capitalize">
                                    Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter your User Name"
                                        className="w-full py-2 pl-6 pr-10 text-white bg-transparent border outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <FaRegUser className="absolute text-xl right-4 top-3 text-neutral-200" />
                                </div>
                            </div>
                            {/* Email */}
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-white capitalize">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your User Name"
                                        className="w-full py-2 pl-6 pr-10 text-white bg-transparent border outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <BsEnvelopeAtFill className="absolute text-xl right-4 top-3 text-neutral-200" />
                                </div>
                            </div>
                            {/* phone no. */}
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-white capitalize">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter your User Name"
                                        className="w-full py-2 pl-6 pr-10 text-white bg-transparent border outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <FaPhoneAlt className="absolute text-xl right-4 top-3 text-neutral-200" />
                                </div>
                            </div>
                            {/* Message */}
                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-white capitalize">
                                    Query
                                </label>
                                <div className="relative">
                                    <textarea
                                        placeholder="Enter Your Queries"
                                        rows={3}
                                        className="w-full py-2 pl-6 pr-10 text-white bg-transparent border outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <MdOutlineMessage className="absolute text-xl right-4 top-8 text-neutral-200" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-white capitalize">
                                    Resume
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        // onChange={handleFileChange}
                                        className="p-1.5 outline-none text-primary   cursor-pointer w-full"
                                    />
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="w-full mx-auto mb-5 text-center">
                                <button
                                    type="submit"
                                    className="px-5 py-3 transition cursor-pointer rounded-xl w-max text-info hover:bg-opacity-90 bg-secondary disabled:bg-opacity-40"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApprenticeForm
