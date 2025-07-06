import { PageBreadcrumb } from "@/components/common/PageBreadcrumb";
import React from "react";

export default function ContactUs() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us", current: true },
  ];
  return (
    <>
      <PageBreadcrumb
        items={breadcrumbs}
        showLogo={true}
        title={"Contact Us"}
      />
    </>
  );
}
