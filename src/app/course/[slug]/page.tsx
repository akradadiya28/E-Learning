import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CourseHero } from "@/components/course-detail/CourseHero";
import { CourseTabs } from "@/components/course-detail/CourseTabs";
import { CourseSidebar } from "@/components/course-detail/CourseSidebar";
import { courseDetailData } from "@/data/courseDetailData";
import { PageLayout } from "@/components/common/PageLayout";

interface CourseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function CourseDetailContent({ params }: CourseDetailPageProps) {
  // In a real app, you would fetch the course data based on the slug
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "";
  const course = courseDetailData.slug === slug ? courseDetailData : null;

  if (!course) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <CourseHero course={course} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <CourseTabs course={course} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar course={course} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    {
      label: "Resolving Conflicts Between Designers And Engineers",
      current: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageLayout
        breadcrumbs={breadcrumbs}
        backgroundVariant="default"
        backgroundIntensity="light"
        showAnimations={false}
      >
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              Loading...
            </div>
          }
        >
          <CourseDetailContent params={params} />
        </Suspense>
      </PageLayout>
    </div>
  );
}
