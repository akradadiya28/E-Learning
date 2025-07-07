import { PageLayout } from "@/components/common/PageLayout";
import ContactUs from "@/components/contact-us/ContactUs";

export default function page() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us", current: true },
  ];

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
      showAnimations={false}
    >
      <ContactUs />
    </PageLayout>
  );
}
