"use client";
import React, { useState } from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import toast from "react-hot-toast";

const ApprenticeForm = ({ type, desc, title }) => {
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

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        const filePromises = files.map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const arrayBuffer = event.target.result; // This is the ArrayBuffer
                    const buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Buffer
                    resolve({
                        filename: file.name,
                        content: buffer, // Send Buffer here
                        contentType: file.type,
                    });
                };
                reader.readAsArrayBuffer(file); // Read file as ArrayBuffer
            });
        });

        const attachments = await Promise.all(filePromises);
        setFormData((prev) => ({
            ...prev,
            attachments,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(true);
        const emailFormData = {
            userEmail: formData.userEmail,
            clientEmail: "enquiry@dagaanddaga.com",
            subject: `New User Data for Review - [${formData.userName}]`,
            message: formData.message,
            attachments: formData.attachments,
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
                toast.success("Successfully Sent", {
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
            toast.error(error.message, {
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
        <section className="flex flex-col items-center justify-center gap-2 px-5 font-merriWeather mt-14 md:mt-16 md:gap-6 lg:px-16 lg:py-12">
            <h1 className="py-6 text-2xl font-bold tracking-wider text-center uppercase lg:text-3xl xl:text-4xl font-merriWeather text-info">
                {type}
            </h1>
            <div className="flex flex-col gap-8 md:flex-row">
                <div className="space-y-5 md:space-y-10 md:mt-16 basis-full md:basis-2/5">
                    <h4 className="text-lg font-semibold tracking-wide text-center capitalize sm:text-xl xl:text-2xl font-merriWeather text-info">
                        {title}
                    </h4>
                    <div className="relative w-full">
                        {/* <FaQuoteLeft className="absolute text-lg -left-2 -top-4 xl:-top-2 xl:-left-3 text-info" /> */}
                        <p className="text-sm font-normal tracking-wide text-center sm:text-base font-merriWeather text-info">
                            {desc}
                        </p>
                        {/* <FaQuoteRight className="absolute text-lg -right-2 -bottom-3 xl:-right-0 xl:-bottom-4 text-info" /> */}
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-5 space-y-8 justify-normal lg:flex-row md:w-3/5 py-7">
                    <div className="w-full px-6 py-8 mx-auto space-y-4 bg-info/80">
                        <h3 className="w-full text-4xl font-normal text-center capitalize text-secondary font-libreCaslonDisplay">
                            Let’s Connect
                        </h3>
                        <form onSubmit={handleSubmit}>
                            {/* User Name */}
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-white capitalize">
                                    Name
                                </label>
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

                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-white capitalize">
                                    Upload Resume
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        multiple
                                        onChange={handleFileChange}
                                        className="p-1.5 outline-none text-primary   cursor-pointer w-full"
                                    />
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApprenticeForm;
