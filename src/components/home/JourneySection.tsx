"use client";
import Image from "next/image";
import {
  FaUserGraduate,
  FaPlayCircle,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";

const cards = [
  {
    icon: <FaUserGraduate className="text-3xl md:text-5xl text-[#A7A3FF]" />,
    title: "Learn with Experts",
    desc: "Curate anding area share Pluralsight content to reach your",
    url: "/images/icons/leaders.svg",
  },
  {
    icon: <FaPlayCircle className="text-3xl md:text-5xl text-[#A7A3FF]" />,
    title: "Learn Anything",
    desc: "Curate anding area share Pluralsight content to reach your",
    url: "/images/icons/computer.svg",
  },
  {
    icon: <FaCertificate className="text-3xl md:text-5xl text-[#A7A3FF]" />,
    title: "Get Online Certificate",
    desc: "Curate anding area share Pluralsight content to reach your",
    url: "/images/icons/certificate.svg",
  },
  {
    icon: <FaEnvelope className="text-3xl md:text-5xl text-[#A7A3FF]" />,
    title: "E-mail Marketing",
    desc: "Curate anding area share Pluralsight content to reach your",
    url: "/images/icons/marketing.svg",
  },
];

export default function JourneySection() {
  return (
    <section className="bg-[#282568] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-5 py-1.5 rounded-full bg-[#5751E1] text-[#fff] text-sm font-semibold mb-6">
          How We Start Journey
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Start Your Learning Journey Today!
        </h2>
        <p className="text-[#C7C6E5] max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Groove's intuitive shared inbox makesteam members together organize,
          prioritize and.In this episode.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="flex flex-col items-center text-center bg-[#292574] rounded-2xl p-5 md:p-8 transition hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div className="relative mb-4 flex items-center justify-center">
                {/* <span className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#312C7A] mb-2">
                  {card.icon}
                </span> */}
                <Image
                  className="translate-x-2"
                  height={60}
                  width={60}
                  src={card.url}
                  alt="noimage"
                />
                {/* <MdAutoAwesome className="absolute top-0 right-0 text-lg md:text-xl text-[#A7A3FF]/40" /> */}
              </div>
              <h3 className="text-sm md:text-lg  font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-[#C7C6E5]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
