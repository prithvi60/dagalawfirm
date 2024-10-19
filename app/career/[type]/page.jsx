import ApprenticeForm from "@/components/career/ApprenticeForm";
import BusinessForm from "@/components/career/BusinessForm";
import React from "react";

const Page = ({ params }) => {
    const { type } = params;
    return (
        <main>
            {type === "internship" ? (
                <ApprenticeForm type={type} title={"Looking to Join Us?"} desc={"We are always on the lookout for talented, driven, and passionate legal professionals to join our team. If you're interested, we’d love to hear from you.Please fill in your details, and we will review your application. If there is a suitable vacancy, our team will get in touch with you. Please mail your resume to enquiry@dagaanddaga.com"} />
            ) : (
                <BusinessForm type={type} title={"Looking to Join Us?"} desc={"We are always on the lookout for talented, driven, and passionate legal professionals to join our team. If you're interested, we’d love to hear from you.Please fill in your details, and we will review your application. If there is a suitable vacancy, our team will get in touch with you. Please mail your resume to enquiry@dagaanddaga.com"} />
            )}
        </main>
    );
};

export default Page;
