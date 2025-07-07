import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function ContactUs() {
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
    <section className="w-full py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 md:p-6"
              >
                <div className="bg-purple-600 text-white p-3 rounded-full flex items-center justify-center min-w-[48px] min-h-[48px]">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    {info.title}
                  </h4>
                  {info.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us Message
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form className="flex flex-col gap-4">
                <textarea
                  className="w-full min-h-[120px] rounded-lg border border-gray-200 p-3 text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
                  placeholder="Message *"
                  required
                />
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    className="flex-1 rounded-lg border border-gray-200 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
                    placeholder="Name *"
                    required
                  />
                  <input
                    className="flex-1 rounded-lg border border-gray-200 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
                    placeholder="E-mail *"
                    type="email"
                    required
                  />
                </div>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
                  placeholder="Website *"
                  required
                />
                <Button
                  size="lg"
                  className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  Submit Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
