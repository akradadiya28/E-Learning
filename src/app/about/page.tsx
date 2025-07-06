import { PageBreadcrumb } from "@/components/common/PageBreadcrumb";
import PrimaryButton from "@/components/common/PrimaryButton";
import Partners from "@/components/home/Partners";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import OfferSection from "./_components/Offersection";
import Newsletter from "@/components/home/Newsletter";
import LearningJourney from "@/components/home/LearningJourney";
import JourneySection from "@/components/home/JourneySection";
import TestimonialsSection from "@/components/home/Testimonial";

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", current: true },
  ];
  return (
    <>
      <PageBreadcrumb items={breadcrumbs} showLogo={true} title={"About Us"} />
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/banner/video.png"
                alt="Students learning"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-[#EFEEFE] primary-color hover:bg-orange-100 mb-4">
                  Get More About Us
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-semibold capitalize  text-gray-900 mb-4">
                  Empowering Students to reach their{" "}
                  <span
                    className="primary-text-background -translate-y-1 text-white text-[1.6rem] font-semibold inline-flex items-center justify-center w-32 h-10 bg-no-repeat bg-center bg-contain"
                    style={{ display: "inline-flex" }}
                  >
                    Potential
                  </span>{" "}
                  Goal for next level challenge
                </h2>
                <p className="text-gray-600 mb-6">
                  Groove&apos;s intuitive shared inbox makes it easy for team
                  members to organize, prioritize and.In this episode.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "The Most World Class Instructors",
                  "Access Your Class anywhere",
                  "Flexible Course Plan",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <PrimaryButton>Start Free Trial</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
      <Partners />
      {/* What we Offer */}
      <OfferSection />
      {/* Newsletter */}
      <Newsletter />
      {/* Start Learning Todya */}
      <JourneySection />
      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}
