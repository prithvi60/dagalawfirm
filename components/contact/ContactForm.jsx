import React from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const ContactForm = () => {
    return (
        <section className="flex flex-col items-start gap-5 p-6 justify-normal lg:flex-row">
            <div className="w-full px-10 py-4 mx-auto space-y-4 bg-info/85">
                <h3 className="w-full text-2xl font-normal text-center capitalize md:text-3xl lg:text-4xl text-secondary font-libreCaslonDisplay">
                    Let’s Connect
                </h3>
                <form>
                    {/* User Name */}
                    <div className="mb-4 text-sm md:text-base">
                        <label className="mb-2.5 block font-medium text-white capitalize">
                            Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter your User Name"
                                className="w-full py-2 pl-6 pr-10 text-white bg-transparent border  outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <FaRegUser className="absolute text-xl right-4 top-3 text-neutral-200" />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="mb-4 text-sm md:text-base">
                        <label className="mb-2.5 block font-medium text-white capitalize">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your User Name"
                                className="w-full py-2 pl-6 pr-10 text-white bg-transparent border  outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <BsEnvelopeAtFill className="absolute text-xl right-4 top-3 text-neutral-200" />
                        </div>
                    </div>
                    {/* phone no. */}
                    <div className="mb-4 text-sm md:text-base">
                        <label className="mb-2.5 block font-medium text-white capitalize">
                            Phone Number
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter your User Name"
                                className="w-full py-2 pl-6 pr-10 text-white bg-transparent border  outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <FaPhoneAlt className="absolute text-xl right-4 top-3 text-neutral-200" />
                        </div>
                    </div>
                    {/* Message */}
                    <div className="mb-6 text-sm md:text-base">
                        <label className="mb-2.5 block font-medium text-white capitalize">
                            Message
                        </label>
                        <div className="relative">
                            <textarea
                                placeholder="Enter Your Message"
                                rows={3}
                                className="w-full py-2 pl-6 pr-10 text-white bg-transparent border  outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <MdOutlineMessage className="absolute text-xl right-4 top-8 text-neutral-200" />
                        </div>
                    </div>
                    {/* Submit */}
                    <div className="w-full mx-auto mb-5 text-center">
                        <button
                            type="submit"
                            className="px-6 py-1.5 text-sm md:text-base md:py-3 transition cursor-pointer md:px-5 rounded-xl w-max text-info hover:bg-opacity-90 bg-secondary disabled:bg-opacity-40"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
