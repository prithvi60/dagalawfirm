import ApprenticeForm from "@/components/career/ApprenticeForm";
import BusinessForm from "@/components/career/BusinessForm";
import React from "react";

const Page = ({ params }) => {
    const { type } = params;
    return (
        <main>
            {type === "apprentice" ? (
                <ApprenticeForm type={type} />
            ) : (
                <BusinessForm type={type} />
            )}
        </main>
    );
};

export default Page;
