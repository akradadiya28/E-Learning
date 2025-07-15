import type { Metadata } from "next";
import WishlistContent from "@/components/wishlist/WishlistContent";
import { PageLayout } from "@/components/common/PageLayout";

export const metadata: Metadata = {
  title: "My Wishlist - SkillGro",
  description:
    "View and manage your course wishlist. Keep track of courses you want to take and add them to your cart when ready.",
};

export default function WishlistPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Wishlist", current: true },
    ];
  return (
    <main className="min-h-screen bg-gray-50">
      <PageLayout breadcrumbs={breadcrumbs}>
        <WishlistContent />
      </PageLayout>
    </main>
  );
}
