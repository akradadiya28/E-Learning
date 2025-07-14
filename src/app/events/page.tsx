import { PageLayout } from "@/components/common/PageLayout";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function EventPage() {
  // Breadcrumbs data
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/instructors" },
  ];

  const products = [
    {
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "25 June, 2024",
      title: "Exactly How Technology Can Make Reading",
      location: "Colorado",
    },
    {
      image:
        "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "12 May, 2024",
      title: "The Future of Online Learning Platforms",
      location: "California",
    },
    {
      image:
        "https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "03 April, 2024",
      title: "How AI is Changing Education",
      location: "Texas",
    },
    {
      image:
        "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "18 March, 2024",
      title: "Reading Habits in the Digital Age",
      location: "New York",
    },
    {
      image:
        "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "09 March, 2024",
      title: "The Power of Group Study Sessions",
      location: "Florida",
    },
    {
      image:
        "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "28 Feb, 2024",
      title: "Why Libraries Still Matter",
      location: "Illinois",
    },
    {
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "15 Feb, 2024",
      title: "Blending Tech and Traditional Learning",
      location: "Washington",
    },
    {
      image:
        "https://images.pexels.com/photos/256460/pexels-photo-256460.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "01 Feb, 2024",
      title: "How to Stay Motivated to Read",
      location: "Oregon",
    },
    {
      image:
        "https://images.pexels.com/photos/256464/pexels-photo-256464.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "20 Jan, 2024",
      title: "The Benefits of Early Education",
      location: "Georgia",
    },
    {
      image:
        "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "10 Jan, 2024",
      title: "How to Build a Reading Habit",
      location: "Nevada",
    },
    {
      image:
        "https://images.pexels.com/photos/256470/pexels-photo-256470.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "02 Jan, 2024",
      title: "The Science of Learning",
      location: "Arizona",
    },
    {
      image:
        "https://images.pexels.com/photos/256472/pexels-photo-256472.jpeg?auto=compress&w=400&h=300&fit=crop",
      date: "25 Dec, 2023",
      title: "Why Reading is Still Important",
      location: "Ohio",
    },
  ];
  return (
    <>
      <PageLayout breadcrumbs={breadcrumbs}>
        <section className="py-12 px-2 md:px-0 ">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 p-3 shadow-sm bg-white transition hover:shadow-lg"
                >
                  {/* Image + Date */}
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <span className="absolute left-3 bottom-3 bg-yellow-400 text-gray-900 font-semibold text-sm px-4 py-1 rounded-full shadow border border-yellow-300">
                      {product.date}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="mt-5 mb-2 text-lg font-bold text-gray-900 leading-snug">
                    {product.title}
                  </h3>
                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                    <FaMapMarkerAlt className="text-purple-600 text-base" />
                    <span>{product.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
