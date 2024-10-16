import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import DagaApproach from "@/components/DagaApproach";
import FirmIntro from "@/components/FirmIntro";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import PracticesComponent from "@/components/PracticesComponent";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <FirmIntro />
      <AboutUs />
      <DagaApproach />
      <PracticesComponent />
      {/* <Testimonial /> */}
      <Team />
      <Contact />
      <Modal />
    </main>
  );
}
