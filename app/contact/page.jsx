import { ContactDetailsAddress } from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";

const Page = () => {
    return (
        <main>
            <ContactForm title1={"phone"} title2={"Email"} />
            <ContactDetailsAddress data1={phoneNo} data2={emails} title1={"phone"} title2={"Email"} />
        </main>
    );
};

export default Page;

const phoneNo = ["+91- 9551028280"]
const emails = ["enquiry@dagaanddaga.com"]