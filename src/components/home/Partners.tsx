import Image from 'next/image';
import React from 'react';

const partners = [
  'Udemy',
  'AMD',
  'Coursera',
  'Amazon',
  'Codecademy',
  'Cognizant',
  'AMD',
  'Amazon',
  'Coursera',
];

function Partners() {
  return (
    <section className="bg-[#120c3c] py-3 w-full overflow-hidden">
      <div className="relative">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {partners.map((partner, idx) => (
            <React.Fragment key={idx}>
              <span className="text-white font-bold text-lg md:text-xl">{partner}</span>
              {idx !== partners.length - 1 && (
                <Image
                src="/images/partners/brand_star.svg.png"
                alt="Arrow Right"
                width={24}
                height={24}
                className="text-yellow-400 text-2xl font-bold select-none"
                style={{ color: 'yellow' }}
              />
              )}
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="text-white font-bold text-lg md:text-xl">{partner}</span>
              {idx !== partners.length - 1 && (
                <Image
                src="/images/partners/brand_star.svg.png"
                alt="Arrow Right"
                width={24}
                height={24}
                className="text-yellow-400 text-2xl font-bold select-none"
                style={{ color: 'yellow' }}
              />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Partners;
