"use client";

import { useState } from "react";
import { VideoPlayer } from "@/components/lesson/VideoPlayer";
import { LessonTabs } from "@/components/lesson/LessonTabs";
import type { LessonData } from "@/types/lesson";

interface LessonContentProps {
  lesson: LessonData;
}

export function LessonContent({ lesson }: LessonContentProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-white">
      {/* Video Player */}
      <div className="relative">
        <VideoPlayer
          videoUrl={lesson.videoUrl}
          title={lesson.title}
          duration={lesson.duration}
        />
      </div>

      {/* Lesson Content Tabs */}
      <div className="p-4 md:p-6">
        <LessonTabs
          lesson={lesson}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
}