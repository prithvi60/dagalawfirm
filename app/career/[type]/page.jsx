import ApprenticeForm from "@/components/career/ApprenticeForm";
import BusinessForm from "@/components/career/BusinessForm";
import React from "react";

const Page = ({ params }) => {
    const { type } = params;
    return (
        <main>
            {type === "apprentice" ? (
                <ApprenticeForm type={type} desc={"As an apprentice advocate, you'll support experienced advocates with research, drafting, and case preparation, gaining essential skills for a successful legal career."} />
            ) : (
                <BusinessForm type={type} desc={"Meeting with an advocate provides expert legal guidance to help protect and advance your business interests effectively."} />
            )}
        </main>
    );
};

export default Page;
