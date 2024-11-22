import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster />
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
