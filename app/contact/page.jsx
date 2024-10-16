import { ContactDetailsAddress } from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import React from "react";

const Page = () => {
    return (
        <main>
            {/* <ContactHero /> */}
            <ContactForm />
            <ContactDetailsAddress data1={phoneNo} data2={emails} title1={"phone"} title2={"Email"} />
        </main>
    );
};

export default Page;

const phoneNo = ["+91- 9551028280"]
const emails = ["enquiry@dagaanddaga.com"]