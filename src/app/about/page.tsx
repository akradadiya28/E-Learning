import { PageBreadcrumb } from "@/components/common/PageBreadcrumb";
import Partners from "@/components/home/Partners";
import Newsletter from "@/components/home/Newsletter";
import TestimonialsSection from "@/components/about/Testimonial";
import AboutBanner from "@/components/about/AboutBanner";
import OfferSection from "@/components/about/OfferSection";
import JourneySection from "@/components/about/JourneySection";

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", current: true },
  ];
  return (
    <>
      <PageBreadcrumb items={breadcrumbs} showLogo={true} />
      {/* About Banner */}
      <AboutBanner />
      {/* Parteners */}
      <Partners />
      {/* What we Offer */}
      <OfferSection />
      {/* Newsletter */}
      <Newsletter />
      {/* Start Learning Today */}
      <JourneySection />
      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}
