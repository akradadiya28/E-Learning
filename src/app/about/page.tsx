import Partners from "@/components/home/Partners";
import Newsletter from "@/components/home/Newsletter";
import TestimonialsSection from "@/components/about/Testimonial";
import AboutBanner from "@/components/about/AboutBanner";
import OfferSection from "@/components/about/OfferSection";
import JourneySection from "@/components/about/JourneySection";
import { PageLayout } from "@/components/common/PageLayout";

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", current: true },
  ];
  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
      showAnimations={false}
    >
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
    </PageLayout>
  );
}
