import ApprenticeForm from "@/components/career/ApprenticeForm";
import BusinessForm from "@/components/career/BusinessForm";
import React from "react";

const Page = ({ params }) => {
    const { type } = params;
    return (
        <main>
            {type === "internship" ? (
                <ApprenticeForm type={type} title={"the foundation for future success"} desc={"Interns are temporary team members who gain practical experience while contributing to projects under guidance."} />
            ) : (
                <BusinessForm type={type} title={"Challenge yourself"} desc={"Choose a job you love, and you will never have to work a day in your life.Stay focused on your goals and keep pushing forward—your hard work will pay off."} />
            )}
        </main>
    );
};

export default Page;
