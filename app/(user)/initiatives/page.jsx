import EventLaw from "@/components/initiatives/EventLaw";
import InitiativeHero from "@/components/initiatives/InitiativeHero";
import React from "react";

const Page = () => {
    return (
        <main>
            <InitiativeHero />
            <EventLaw mainTitle={'"TAIYARI JEET KI"'} title={"Career Counselling Event"} bgImg={"/event-1.jpeg"} img={"/event-3.jpeg"} data={event1} styles={"flex flex-col justify-center md:justify-start items-center md:flex-row"} />
            <EventLaw mainTitle={'Intellectual Property Rights (IPR)'} title={"Workshop"} bgImg={"/event-2.jpeg"} img={"/event-4.jpeg"} data={event2} styles={"flex flex-col justify-center md:justify-start items-center md:flex-row-reverse"} />
        </main>
    );
};

export default Page;

const event1 = [
    "At the 'Taiyari Jeet Ki' career counselling event, organized by the Terapanth Professional Forum and DFC, Jayesh Kumar Daga, the Head of Litigation, delivered an inspiring session aimed at guiding young minds toward making informed career decisions. His talk provided invaluable insights into the dynamic and evolving legal landscape of India, encouraging the next generation of professionals to explore the exciting and diverse opportunities in the field of law.",
    "He emphasized how the legal profession is not only integral to upholding justice but also offers vast potential for growth, intellectual challenge, and social impact. He outlined key aspects of the profession, from litigation to corporate law, judiciary and emerging areas like alternative dispute resolutions, highlighting the ways in which young lawyers can contribute to society while building rewarding careers.",
];

const event2 = [
    "Jayesh Kumar Daga, representing Daga & Daga, conducted an enriching workshop on Intellectual Property Rights (IPR) at Shri Shankarlal Sundarbai Shasun Jain College for Women. The workshop was a deep dive into the fundamentals of IPR, where he emphasized the critical importance of IPR education, particularly for students poised to become the innovators and creators of tomorrow.",
    "Throughout the session, he demystified key concepts related to patents, trademarks, copyrights, and designs, providing practical examples to illustrate their relevance in today's competitive landscape. His engaging delivery and passion for the subject inspired the students, fostering a deeper understanding of how IPR serves as a tool to protect and encourage creativity and innovation.",
    "The students, bright and enthusiastic, were highly engaged, posing thoughtful questions and actively participating in discussions. ",
];
