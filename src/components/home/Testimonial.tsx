"use client";

import { useRef } from "react";
import Image from "next/image";

// Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Wade Warren",
    image: "/images/banner/image.png",
    rating: 5,
    testimonial:
      "when an unknown printer took alley ffrerer area typey and scrambled to make a type specimen book hass",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    image: "/images/banner/image.png",
    rating: 5,
    testimonial:
      "when an unknown printer took alley ffrerer area typey and scrambled to make a type specimen book hass",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    image: "/images/banner/image.png",
    rating: 5,
    testimonial:
      "when an unknown printer took alley ffrerer area typey and scrambled to make a type specimen book hass",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "/images/banner/image.png",
    rating: 5,
    testimonial:
      "when an unknown printer took alley ffrerer area typey and scrambled to make a type specimen book hass",
  },
  {
    id: 5,
    name: "Mike Davis",
    image: "/images/banner/image.png",
    rating: 5,
    testimonial:
      "when an unknown printer took alley ffrerer area typey and scrambled to make a type specimen book hass",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-[#EFEEFE] text-[#6C63FF] text-sm font-semibold mb-4">
            Our Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Students Think And Say
            <br />
            About SkillGrow
          </h2>
          <p className="text-gray-600 text-lg">
            when known printer took a galley of type scrambl edmake
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg -ml-6 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg -mr-6 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-purple-600",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-purple-600",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="testimonials-swiper !pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative min-h-[200px]">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-purple-200 text-6xl font-serif leading-none">
                    "
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <StarRating rating={testimonial.rating} />
                      <h4 className="font-semibold text-gray-900 text-lg mb-3">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        " {testimonial.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          opacity: 0.3 !important;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
