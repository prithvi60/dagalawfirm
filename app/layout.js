import Navbar from "@/components/Navbar";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Toaster } from "react-hot-toast";

// Meta Data
export async function generateMetadata() {
  return {
    title: "Daga & Daga Intellectual Property Attorneys",
    description:
      "Trusted legal support for your important matters. Here to guide and protect you every step of the way.",
    robots: "index, follow",
    applicationName: "Daga & Daga Intellectual Property Attorneys",
    authors: [{ name: "Webibee" }],
    generator: "Next.js",
    keywords: [
      "Daga & Daga",
      "Law Firm",
      "Intellectual Property",
      "legal services",
      "IPR Services",
      "India",
    ],
    referrer: "origin-when-cross-origin",
    creator: "Webibee",
    publisher: "Daga & Daga Intellectual Property Attorneys",
    metadataBase: new URL("https://dagaanddaga.com/"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      url: `https://dagaanddaga.com/`,
      title: "Daga & Daga Intellectual Property Attorneys",
      description:
        "Trusted legal support for your important matters. Here to guide and protect you every step of the way.",
      siteName: "Daga & Daga",
      images: [
        {
          url: "https://dagaanddaga.com/daga-new-logo.png",
        },
      ],
      "@context": "https://schema.org",
      "@type": "LawFirm",
      logo: "https://dagaanddaga.com/daga-new-logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Swarna Shree Complex, 3rd Floor, 36, Veerappan St",
        addressLocality: "Sowcarpet",
        addressRegion: "Tamil Nadu, Chennai",
        postalCode: "600001",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9551028280",
        contactType: "Customer Service",
        areaServed: "IN",
        availableLanguage: "English",
      },
      sameAs: ["https://www.linkedin.com/company/daga-daga"],
      department: {
        "@type": "LegalService",
        name: "Intellectual Property Law",
        serviceType: "IPR Services",
        serviceArea: {
          "@type": "Place",
          name: "India",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Swarna Shree Complex, 3rd Floor, 36, Veerappan St",
          addressLocality: "Sowcarpet",
          addressRegion: "Tamil Nadu, Chennai",
          postalCode: "600001",
          addressCountry: "IN",
        },
        additionalType: "https://schema.org/Service",
        url: "https://dagaanddaga.com/contact",
        description: "Get in touch with our team for any enquiries.",
      },
      additionalType: "https://schema.org/Service",
      serviceType: "Legal Services",
      url: "https://dagaanddaga.com/services",
      description:
        "Reliable legal services for all your intellectual property needs.",
    },
  };
}

const merriWeather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "300", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400"],
});

// export const metadata = {
//   title: "Daga & Daga Intellectual Property Attorneys",
//   description:
//     "Trusted legal support for your important matters. Here to guide and protect you every step of the way.",
//   image: "/path/to/logo.svg",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merriWeather.variable} ${montserrat.variable} antialiased select-none focus:outline-none`}
      >
        <Navbar />
        {children}
        <Toaster />
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
