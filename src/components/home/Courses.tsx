"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const TABS = ["All", "UI/UX", "Web", "Mobile", "Data Science", "AI"];

const COURSES = [
  {
    title: "Learning JavaScript With Imagination",
    instructor: "David Millar",
    price: "$15.00",
    originalPrice: "$25.00",
    rating: 4.8,
    students: "2.5k",
    image: "/images/courses/c1.jpg",
    category: "Web",
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
  },
  {
    title: "The Complete Graphic Design for Beginners",
    instructor: "Jenny Wilson",
    price: "$19.00",
    originalPrice: "$29.00",
    rating: 4.9,
    students: "3.2k",
    image: "/images/courses/c2.jpg",
    category: "UI/UX",
    badge: "Popular",
    badgeColor: "bg-green-500",
  },
  {
    title: "Learning Digital Marketing on Facebook",
    instructor: "Wade Warren",
    price: "$24.00",
    originalPrice: "$34.00",
    rating: 4.7,
    students: "1.8k",
    image: "/images/courses/c3.jpg",
    category: "Mobile",
    badge: "Trending",
    badgeColor: "bg-blue-500",
  },
  {
    title: "Financial Analyst Training & Investing Course",
    instructor: "Robert Fox",
    price: "$12.00",
    originalPrice: "$22.00",
    rating: 4.6,
    students: "2.1k",
    image: "/images/courses/c4.jpg",
    category: "Data Science",
    badge: "New",
    badgeColor: "bg-purple-500",
  },
  {
    title: "Advanced React Development Masterclass",
    instructor: "Sarah Johnson",
    price: "$29.00",
    originalPrice: "$49.00",
    rating: 4.9,
    students: "4.1k",
    image: "/images/courses/c2.jpg",
    category: "Web",
    badge: "Hot",
    badgeColor: "bg-red-500",
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Michael Chen",
    price: "$39.00",
    originalPrice: "$59.00",
    rating: 4.8,
    students: "3.7k",
    image: "/images/courses/c1.jpg",
    category: "AI",
    badge: "Expert",
    badgeColor: "bg-indigo-500",
  },
  {
    title: "Mobile App Design Masterclass",
    instructor: "Emma Davis",
    price: "$22.00",
    originalPrice: "$32.00",
    rating: 4.7,
    students: "2.9k",
    image: "/images/courses/c2.jpg",
    category: "Mobile",
    badge: "Featured",
    badgeColor: "bg-pink-500",
  },
  {
    title: "Data Visualization with Python",
    instructor: "Alex Rodriguez",
    price: "$25.00",
    originalPrice: "$35.00",
    rating: 4.6,
    students: "2.3k",
    image: "/images/courses/c3.jpg",
    category: "Data Science",
    badge: "Updated",
    badgeColor: "bg-teal-500",
  },
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);

  const filteredCourses =
    activeTab === 0
      ? COURSES
      : COURSES.filter((course) => course.category === TABS[activeTab]);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our World's Best Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View our popular online and offline courses
          </p>
        </div>

        {/* Responsive Tabs */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
            {/* Mobile: Scrollable tabs */}
            <div className="flex sm:hidden overflow-x-auto scrollbar-hide bg-gray-100 rounded-lg p-1 gap-1">
              {TABS.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === index
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900 active:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tablet and Desktop: Grid layout */}
            <div className="hidden sm:grid sm:grid-cols-2 md:flex md:space-x-2 lg:space-x-4 bg-gray-100 rounded-lg p-1 gap-1 md:gap-0 justify-around">
              {TABS.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 md:px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    activeTab === index
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={filteredCourses.length > 3}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!pb-12"
          >
            {filteredCourses.map((course, index) => (
              <SwiperSlide key={index}>
                <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge
                        className={`${course.badgeColor} hover:${course.badgeColor} text-white shadow-lg`}
                      >
                        {course.badge}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {course.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({course.students})
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {course.students} students
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      By {course.instructor}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">
                          {course.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {course.originalPrice}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-200"
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden lg:flex">
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12 border-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden lg:flex">
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12 border-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 bg-transparent"
          >
            View All Courses
          </Button>
        </div>
      </div>

      <style
        jsx
        global
      >{`
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          background-color: #d1d5db !important; /* gray-300 */
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #f97316 !important; /* orange-500 */
        }
      `}</style>
    </section>
  );
};

export default Courses;
