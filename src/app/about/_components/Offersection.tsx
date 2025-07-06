import { FaUserGraduate, FaBookOpen, FaCertificate } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";

const offers = [
  {
    icon: <FaUserGraduate className="text-white text-3xl" />,
    iconBg: "bg-[#1CD6F2]",
    title: "Expert Tutors",
    desc: "When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.",
    cardBg: "bg-[#F1FDFF]",
    shadow: "shadow-[4px_6px_0_0_#C9E4E9]",
  },
  {
    icon: <FaBookOpen className="text-white text-3xl" />,
    iconBg: "bg-[#6C63FF]",
    title: "Effective Courses",
    desc: "When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.",
    cardBg: "bg-[#EDEAFF]",
    shadow: "shadow-[4px_6px_0_0_#C8C1ED]",
  },
  {
    icon: <FaCertificate className="text-white text-3xl" />,
    iconBg: "bg-[#FFC727]",
    title: "Earn Certificate",
    desc: "When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.",
    cardBg: "bg-[#FFF7E2]",
    shadow: "shadow-[4px_6px_0_0_#EBE0C4]",
  },
];

export default function OfferSection() {
  return (
    <section className="py-16 bg-[#F8F8FB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-[#EFEEFE] text-[#6C63FF] text-sm font-semibold mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Learn New Skills When And Where You Like
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            when known printer took a galley of type scrambl edmake
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch cards">
          {offers.map((offer, idx) => (
            <div
              key={offer.title}
              className={`relative flex-1 min-w-[260px] max-w-md ${offer.cardBg} rounded-2xl p-6 pt-8 ${offer.shadow} transition`}
            >
              {/* Decorative stars */}
              <MdAutoAwesome className="absolute top-4 right-6 text-2xl text-gray-300/60" />
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${offer.iconBg} mb-4 shadow-md`}
              >
                {offer.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-[#181942] mb-2 flex items-center">
                {offer.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-[#181942] opacity-80 leading-relaxed">
                {offer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
