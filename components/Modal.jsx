"use client"
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
        const hasAcceptedDisclaimer = localStorage.getItem('hasAcceptedDisclaimer');
        if (!hasAcceptedDisclaimer) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, []);

    return (
        <div className={` px-4 py-64 place-content-center ${!isOpen ? "hidden" : "grid"}`}>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
    const router = useRouter()

    const handleGoBack = () => {
        router.back();
    };

    const handleUnderstood = () => {
        localStorage.setItem('hasAcceptedDisclaimer', 'true');
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
                    className="fixed inset-0 z-[1000] grid p-8 overflow-y-scroll cursor-pointer bg-slate-900/20 backdrop-blur place-items-center"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl p-6 overflow-hidden text-white rounded-lg shadow-xl cursor-default bg-secondary"
                    >
                        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        <div className="relative z-10">
                            <div className="grid w-16 h-16 mx-auto mb-2 text-3xl text-white rounded-full bg-info place-items-center">
                                <FiAlertCircle />
                            </div>
                            <h3 className="mb-2 text-3xl font-bold text-center text-info">
                                Disclaimer
                            </h3>
                            <p className="mb-6 text-center text-black">
                                This caution notice is being addressed on behalf of the law firm Anand and Anand, having its registered office at B - 41, Nizamuddin East, New Delhi 110 013, India.

                                The general public is hereby cautioned that certain unknown individuals and agencies have been trying to mislead the public by issuing legal notices and other statement/correspondence

                                unauthorisedly using our identity ANAND AND ANAND, PRAVIN ANAND, anandandanand etc. whilst wrongfully claiming to be part of our firm and making false claims and allegations.

                                Please be advised that any person willingly corresponding with such individuals and agencies in any manner whatsoever will be doing so at their own risk, as to costs and consequences. We strongly recommend that no one should respond to such solicitations, and we will not accept any liability whatsoever for any loss that the general public may incur owing to transactions made with such unknown individuals and agencies making false claims.

                                In case you come across any such fraudulent activity, you may kindly contact our Chief Information Officer Mr. Subroto Panda at subroto@anandandanand.com so that appropriate action may be taken.
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleGoBack}
                                    className="w-full py-2 font-semibold text-white transition-colors rounded bg-info hover:bg-info/50 "
                                >
                                    Nah, go back
                                </button>
                                <button
                                    onClick={handleUnderstood}
                                    className="w-full py-2 font-semibold text-indigo-600 transition-opacity bg-white rounded hover:opacity-90"
                                >
                                    Understood!
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
