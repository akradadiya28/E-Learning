import { Suspense } from "react";
import { notFound } from "next/navigation";
import { LessonContent } from "@/components/lesson/LessonContent";
import { LessonSidebar } from "@/components/lesson/LessonSidebar";
import { LessonHeader } from "@/components/lesson/LessonHeader";
import { lessonData } from "@/data/lessonData";

interface LessonPageProps {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

async function LessonPageContent({ params }: LessonPageProps) {
  const resolvedParams = await params;
  const { courseId, lessonId } = resolvedParams;

  // In a real app, you would fetch the lesson data based on courseId and lessonId
  const lesson = lessonData.find(l => l.id === lessonId && l.courseId === courseId);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <LessonHeader lesson={lesson} />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Course Content */}
        <div className="lg:w-80 xl:w-96 bg-white border-r border-gray-200 lg:h-[calc(100vh-80px)] lg:sticky lg:top-20 order-2 lg:order-1">
          <LessonSidebar lesson={lesson} />
        </div>

        {/* Main Lesson Content */}
        <div className="flex-1 order-1 lg:order-2">
          <LessonContent lesson={lesson} />
        </div>
      </div>
    </div>
  );
}

export default function LessonPage({ params }: LessonPageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
        </div>
      }
    >
      <LessonPageContent params={params} />
    </Suspense>
  );
}