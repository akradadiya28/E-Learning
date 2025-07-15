import CartContent from "@/components/cart/CartContent";
import { PageLayout } from "@/components/common/PageLayout";

export default function CartPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cart", current: true },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageLayout breadcrumbs={breadcrumbs}>
        <CartContent />
      </PageLayout>
    </div>
  );
}
