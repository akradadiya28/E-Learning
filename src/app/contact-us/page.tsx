import { PageBreadcrumb } from "@/components/common/PageBreadcrumb";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import React from "react";

export default function ContactUs() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us", current: true },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Address",
      lines: ["Awamileaug Drive, Kensington", "London, UK"],
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Phone",
      lines: ["+1 (800) 123 456 789", "+1 (800) 123 456 789"],
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "E-mail Address",
      lines: ["info@gmail.com", "info@gmail.com"],
    },
  ];
  return (
    <>
      <PageBreadcrumb
        items={breadcrumbs}
        showLogo={true}
        title={"Contact Us"}
      />
      <section className="py-16 px-2 md:px-0 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left: Contact Info Cards */}
          <div className="flex flex-col gap-6 flex-1 max-w-md mx-auto md:mx-0">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 bg-gray-100 rounded-xl p-6"
              >
                <div className="bg-purple-600 text-white p-3 rounded-full flex items-center justify-center min-w-[48px] min-h-[48px]">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    {info.title}
                  </h4>
                  {info.lines.map((line, idx) => (
                    <div
                      key={idx}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Right: Contact Form */}
          <div className="p-6 md:p-0">
            <div className="flex-1 bg-[#f9f9f9] rounded-xl p-8 flex flex-col justify-center min-w-0 w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us Message
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form className="flex flex-col gap-4 w-full">
                <textarea
                  className="w-full min-h-[120px] rounded-lg border border-gray-200 p-3 text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
                  placeholder="Message *"
                  required
                />
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    className="flex-1 min-w-0 rounded-lg border border-gray-200 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white w-full"
                    placeholder="Name *"
                    required
                  />
                  <input
                    className="flex-1 min-w-0 rounded-lg border border-gray-200 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white w-full"
                    placeholder="E-mail *"
                    required
                    type="email"
                  />
                  <input
                    className="flex-1 min-w-0 rounded-lg border border-gray-200 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white w-full"
                    placeholder="Website *"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full shadow-[0_3px_0_0_#444] hover:bg-yellow-300 transition-all w-full md:w-auto"
                >
                  Submit Now <FaArrowRight className="ml-1 text-base" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
