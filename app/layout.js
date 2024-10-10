import Navbar from "@/components/Navbar";
import { Montserrat, Cormorant } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400"],
});

export const metadata = {
  title: "DAGA & DAGA",
  description:
    "Trusted legal support for your important matters.Here to guide and protect you every step of the way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
