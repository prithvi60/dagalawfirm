"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import toast from "react-hot-toast";
import Link from "next/link";
import { childVariants, variant1, variant2, variants } from "@/libs/Variants";

const ContactForm = ({ title1, title2 }) => {
    const initialFormData = {
        userName: "",
        phoneNo: "",
        userEmail: "",
        clientEmail: "",
        subject: "",
        message: "",
        attachments: [],
    };
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(true);
        const emailFormData = {
            userName: formData.userName,
            userEmail: formData.userEmail,
            phone: formData.phoneNo,
            clientEmail: "enquiry@dagaanddaga.com",
            subject: `New Form Submission - Customer Enquiry`,
            message: formData.message,
            attachments: formData.attachments,
            type: "Contact",
        };

        try {
            const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailFormData),
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Error: ${response.status} ${errorData}`);
            }

            const data = await response.json();

            if (data.success) {
                setStatus(false);
                toast.success("Thank you. We will revert back shortly!", {
                    position: "top-right",
                    duration: 3000,
                    style: {
                        border: "1px solid #65a34e",
                        padding: "16px",
                        color: "#65a34e",
                    },
                    iconTheme: {
                        primary: "#65a34e",
                        secondary: "#FFFAEE",
                    },
                });
                setFormData(initialFormData);
                e.target.reset();
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            setStatus(false);
            toast.error("We are unable to receive your details. Please try again.", {
                position: "top-right",
                duration: 3000,
                style: {
                    border: "1px solid #EB1C23",
                    padding: "16px",
                    color: "#EB1C23",
                },
                iconTheme: {
                    primary: "#EB1C23",
                    secondary: "#FFFAEE",
                },
            });
        }
    };

    return (
        <section className="px-5 py-8 lg:px-16 lg:py-12 font-merriWeather mt-14">
            <div className="flex flex-col gap-8 md:flex-row">
                <motion.div
                    variants={variants}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="relative h-full space-y-5 md:space-y-7 lg:sticky lg:top-20 basis-full md:basis-2/5"
                >
                    <h4 className="text-lg font-semibold tracking-wide text-center capitalize md:text-left sm:text-xl xl:text-2xl font-merriWeather text-info">
                        Have questions?
                        <br />
                        We’re here to help
                    </h4>
                    <motion.div variants={childVariants} className="relative w-full">
                        <p className="text-sm font-normal tracking-wide text-center md:text-justify sm:text-base font-merriWeather text-copy">
                            Drop us a message, and we&apos;ll get back to you as soon as
                            possible
                        </p>
                    </motion.div>
                    <motion.div
                        variants={childVariants}
                        className="hidden md:flex flex-col gap-2.5 "
                    >
                        <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">
                            Office Address
                        </h4>
                        <ul className="w-full space-y-2 text-sm font-normal text-justify list-inside md:text-lg font-merriWeather">
                            <li>Daga & Daga Intellectual Property Attorneys</li>
                            <li>3rd floor, Swarna Shree Complex, 36, Veerappan St</li>
                            <li>Sowcarpet,</li>
                            <li>Chennai - 600001,</li>
                            <li>Tamil Nadu, India.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={childVariants}
                        className="hidden md:flex flex-col  gap-2.5"
                    >
                        <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">
                            {title2}
                        </h4>
                        <ul className="space-y-2 text-sm font-normal list-inside w-max md:text-lg font-merriWeather">
                            <Link
                                href="mailto:enquiry@dagaanddaga.com"
                                className="hover:text-info/80"
                            >
                                enquiry@dagaanddaga.com
                            </Link>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={childVariants}
                        className="flex-col hidden gap-3 md:flex"
                    >
                        <h4 className="text-lg font-medium tracking-wide capitalize md:text-xl font-merriWeather text-info">
                            {title1}
                        </h4>
                        <ul className="space-y-2 text-sm font-normal list-inside w-max md:text-lg font-merriWeather">
                            <h4 className="hidden md:block">+91- 9551028280</h4>
                            <h4 className="hidden md:block">044-29550176</h4>
                            <Link
                                href="tel:+919551028280"
                                className="block hover:text-info/80 md:hidden"
                            >
                                +91- 9551028280
                            </Link>
                            <Link
                                href="tel:044-29550176"
                                className="block hover:text-info/80 md:hidden"
                            >
                                044-29550176
                            </Link>
                        </ul>
                    </motion.div>
                </motion.div>
                <div className="flex flex-col items-center w-full gap-5 space-y-8 justify-normal lg:flex-row md:w-3/5">
                    <motion.div
                        variants={variant2}
                        viewport={{ amount: 0.3, once: true }}
                        initial="initial"
                        whileInView="animate"
                        className="w-full px-6 py-8 mx-auto space-y-4 bg-info/80"
                    >
                        <h3 className="w-full text-4xl font-normal text-center capitalize text-secondary font-libreCaslonDisplay">
                            Let’s Connect
                        </h3>
                        <form
                            onSubmit={handleSubmit}
                        // action="https://public.herotofu.com/v1/9ff1e250-8df8-11ef-82c2-4bbcc1388e1d" method="post" accept-charset="UTF-8"
                        >
                            {/* User Name */}
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-white capitalize">
                                    Name
                                </label>
                                {/* <input
                                    type="text"
                                    name="Page"
                                    value={"Internship"}
                                    className="hidden"
                                /> */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="userName"
                                        value={formData.userName || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your user name"
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
                                        name="userEmail"
                                        value={formData.userEmail || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email ID"
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
                                        name="phoneNo"
                                        value={formData.phoneNo || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your phone no."
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
                                        name="message"
                                        value={formData.message || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your queries"
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
                                    disabled={status ? true : false}
                                    className={`px-5 py-3 transition cursor-pointer rounded-xl w-max text-info hover:bg-opacity-90 bg-secondary disabled:cursor-not-allowed disabled:bg-opacity-80 ${status && "animate-pulse"}`}
                                >
                                    {status ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
