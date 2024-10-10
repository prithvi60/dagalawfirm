import ContactDetails, { ContactDetailsAddress } from "@/components/contact/ContactDetails";
import ContactHero from "@/components/contact/ContactHero";
import React from "react";

const Page = () => {
    return (
        <main>
            <ContactHero />
            <ContactDetails
                style={
                    "flex flex-col md:flex-row h-full border-2 border-info"
                }
                src={"/contact-sample-1.jpeg"}
                title={"phone"}
                data={phoneNo}
            />
            <ContactDetails
                style={
                    "flex flex-col md:flex-row-reverse h-full border-2 border-info"
                }
                src={"/contact-sample-2.jpeg"}
                title={"Email"}
                data={emails}
            />
            <ContactDetailsAddress />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.12746916387!2d80.27536107436742!3d13.091106987235392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f57ca5a5627%3A0xf19388f24d84a737!2sDaga%20%26%20Daga%20Intellectual%20Property%20Attorneys!5e0!3m2!1sen!2sin!4v1728555161132!5m2!1sen!2sin" width={"100%"} height={"100%"} className="w-full h-[50vh] sm:h-[70vh]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </main>
    );
};

export default Page;

const phoneNo = ["+91 8767856540", "+91 8767856540"]
const emails = ["xxxx@gmail.com", "urgyrg@gmail.com"]