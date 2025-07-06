import { PageLayout } from "../common/PageLayout"

export default function Privacy() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", current: true },
  ]

  return (
    <PageLayout
      title="Privacy Policy"
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, enroll in courses,
              or contact us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, process transactions,
              and communicate with you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at privacy@skillgro.com
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
