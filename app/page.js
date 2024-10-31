import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import DagaApproach from "@/components/DagaApproach";
import FirmIntro from "@/components/FirmIntro";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import PracticesComponent from "@/components/PracticesComponent";
import Team from "@/components/Team";
import Head from 'next/head';
export default function Home() {
  return (
    <>
    <Head>
        <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "LawFirm",
              "name": "Daga & Daga Intellectual Property Attorneys",
              "url": "https://dagaanddaga.com/",
              "logo": "https://dagaanddaga.com/daga-new-logo.png",
              "description": "Trusted legal support for your important matters. Here to guide and protect you every step of the way.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Swarna Shree Complex, 3rd Floor, 36, Veerappan St",
                "addressLocality": "Sowcarpet",
                "addressRegion": "Tamil Nadu, Chennai",
                "postalCode": "600001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9551028280",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/daga-daga"
              ],
              "department": {
                "@type": "LegalService",
                "name": "Intellectual Property Law",
                "serviceType": "IPR Services"
              }
            }
            `}
        </script>
    </Head>
    <main>
      <Hero />
      <FirmIntro />
      <AboutUs />
      <DagaApproach />
      <PracticesComponent />
      <Team />
      <Contact />
      <Modal />
    </main>
    </>
  );
}
