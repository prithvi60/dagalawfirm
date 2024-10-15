import ApprenticeForm from "@/components/career/ApprenticeForm";
import BusinessForm from "@/components/career/BusinessForm";
import React from "react";

const Page = ({ params }) => {
    const { type } = params;
    return (
        <main>
            {type === "interns" ? (
                <ApprenticeForm type={type} title={"the foundation for future success"} desc={"Interns are temporary team members who gain practical experience while contributing to projects under guidance."} />
            ) : (
                <BusinessForm type={type} title={"Employees are the backbone of an organization"} desc={"Employees are individuals hired by an organization to perform specific roles and contribute to its goals in exchange for compensation."} />
            )}
        </main>
    );
};

export default Page;
