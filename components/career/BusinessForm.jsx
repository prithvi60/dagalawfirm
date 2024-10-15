import React from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const BusinessForm = ({ type, desc }) => {
    return (
        <section className="flex flex-col items-center justify-center gap-6 px-5 mt-10 lg:px-16 lg:py-12">
            <h1 className='text-3xl py-6 uppercase text-center sm:text-4xl lg:text-6xl xl:text-[96px] font-merriWeather font-bold tracking-wider text-info'>{type}</h1>
            <p className='text-sm font-normal tracking-wide text-center sm:text-base font-merriWeather text-info'>{desc}</p>
            <div className="flex flex-col items-center w-full gap-5 space-y-8 justify-normal lg:flex-row md:w-4/5 xl:w-3/4 py-7 ">
                <div className="w-full py-8 mx-auto space-y-4 px-14 bg-info/80">
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
                                Message
                            </label>
                            <div className="relative">
                                <textarea
                                    placeholder="Enter Your Message"
                                    rows={3}
                                    className="w-full py-2 pl-6 pr-10 text-white bg-transparent border outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                />
                                <MdOutlineMessage className="absolute text-xl right-4 top-8 text-neutral-200" />
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
        </section>
    )
}

export default BusinessForm
