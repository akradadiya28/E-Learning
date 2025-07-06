import { PageLayout } from "../common/PageLayout"

export default function Terms() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms of Service", current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using SkillGro, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on SkillGro for personal,
              non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The materials on SkillGro are provided on an 'as is' basis. SkillGro makes no warranties, expressed or
              implied.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall SkillGro or its suppliers be liable for any damages arising out of the use or inability
              to use the materials.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at legal@skillgro.com
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
