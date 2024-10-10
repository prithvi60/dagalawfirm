import Contact from "@/components/Contact";
import FirmIntro from "@/components/FirmIntro";;
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import PracticesComponent from "@/components/PracticesComponent";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <FirmIntro />
      <PracticesComponent
        style={
          "flex flex-col md:flex-row h-full border-2 mt-7 lg:mt-12 border-info"
        }
        src={"/sample-1.jpeg"}
        title={true}
      />
      <PracticesComponent
        style={"flex flex-col md:flex-row-reverse h-full border-2 border-info"}
        src={"/sample-2.jpeg"}
        title={false}
      />
      <PracticesComponent
        style={
          "flex flex-col md:flex-row h-full border-2 mb-7 lg:mb-12 border-info"
        }
        src={"/sample-3.jpeg"}
        title={false}
      />
      <Testimonial />
      <Team />
      <Contact />
      <Modal />
    </main>
  );
}
