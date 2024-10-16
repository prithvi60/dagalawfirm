"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(true); // Default to open

    useEffect(() => {
        // Open the modal when the component mounts
        setIsOpen(true);
    }, []);

    useEffect(() => {
        const hasAcceptedDisclaimer = localStorage.getItem("hasAcceptedDisclaimer");
        if (!hasAcceptedDisclaimer) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, []);

    return (
        <div
            className={` px-4 py-64 place-content-center ${!isOpen ? "hidden" : "grid"
                }`}
        >
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const handleUnderstood = () => {
        localStorage.setItem("hasAcceptedDisclaimer", "true");
        setIsOpen(false);
    };

    // const handleGoBack = () => {
    //     if (document.referrer) {
    //         console.log("before");

    //         router.push(document.referrer);
    //     } else {
    //         console.log("after");
    //         router.back(); // Fallback URL if referrer is not available
    //     }
    // }
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-[1000] grid p-8 overflow-y-scroll cursor-pointer bg-slate-900/20 backdrop-blur md:place-items-center font-merriWeather"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl p-6 text-white shadow-xl cursor-default bg-secondary h-max md:h-auto"
                    >
                        <div className="relative z-10">
                            <div className="grid w-10 h-10 mx-auto mb-2 text-3xl text-white rounded-full md:h-16 md:w-16 bg-info place-items-center">
                                <FiAlertCircle />
                            </div>
                            <h3 className="mb-2 text-3xl font-bold text-center text-info">
                                Disclaimer
                            </h3>
                            <p className="py-3 text-base font-semibold text-black md:text-lg">By accessing or using this website, you acknowledge and agree
                                to the following terms:</p>
                            <ul className="mb-6 space-y-3 text-sm text-center text-black md:text-base max-h-[220px] md:max-h-[350px] overflow-scroll md:overflow-auto">
                                {/* <li className="text-base font-semibold md:text-lg">
                                    By accessing or using this website, you acknowledge and agree
                                    to the following terms:
                                </li> */}
                                <li>
                                    We, or any member of our firm, have not engaged in any form of
                                    advertisement, solicitation, personal contact, invitation, or
                                    inducement of any kind through this website, as per the laws
                                    governing the Bar Council of India.
                                </li>
                                <li>
                                    Any information accessed on this website is solely for your
                                    personal knowledge and use. Your access is based on your own
                                    initiative, and no information provided herein should be
                                    construed as legal advice or an offer of legal services.
                                </li>
                                <li>
                                    You may only access information about our firm upon your
                                    explicit request. Any documents or materials downloaded from
                                    this website are at your own discretion and risk.
                                </li>
                                <li>
                                    The transmission, receipt, or use of this website does not
                                    establish or create an attorney-client relationship.
                                </li>
                            </ul>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleGoBack}
                                    className="w-full py-2 font-semibold text-white transition-colors rounded bg-info hover:bg-info/50 "
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={handleUnderstood}
                                    className="w-full py-2 font-semibold text-white transition-opacity bg-green-600 rounded hover:opacity-90"
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
