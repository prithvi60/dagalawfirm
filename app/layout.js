import Navbar from "@/components/Navbar";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Toaster } from "react-hot-toast";

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

export const metadata = {
  title: "Daga & Daga Intellectual Property Attorneys",
  description:
    "Trusted legal support for your important matters. Here to guide and protect you every step of the way.",
  image: "/path/to/logo.svg",
};

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
