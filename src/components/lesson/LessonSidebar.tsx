"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle,
  Lock,
  FileText,
  HelpCircle,
  Clock,
} from "lucide-react";
import type { LessonData } from "@/types/lesson";

interface LessonSidebarProps {
  lesson: LessonData;
}

export function LessonSidebar({ lesson }: LessonSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["section-1"]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getLessonIcon = (type: string, isCompleted: boolean, isLocked: boolean) => {
    if (isLocked) return <Lock className="w-4 h-4 text-gray-400" />;
    if (isCompleted) return <CheckCircle className="w-4 h-4 text-green-500" />;

    switch (type) {
      case "video":
        return <Play className="w-4 h-4 text-blue-500" />;
      case "text":
        return <FileText className="w-4 h-4 text-gray-500" />;
      case "quiz":
        return <HelpCircle className="w-4 h-4 text-purple-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900 mb-2">Course Content</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{lesson.completedLessons} of {lesson.totalLessons} lessons</span>
            <span>{lesson.progress}% complete</span>
          </div>
          <Progress value={lesson.progress} className="h-2" />
        </div>
      </div>

      {/* Course Sections */}
      <div className="flex-1 overflow-y-auto">
        {lesson.sections.map((section) => (
          <div key={section.id} className="border-b border-gray-100">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 text-sm mb-1">
                    {section.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{section.lessons.length} lessons</span>
                    <span>•</span>
                    <span>{section.duration}</span>
                  </div>
                </div>
                <div className="ml-2">
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </div>
            </button>

            {/* Section Lessons */}
            {expandedSections.includes(section.id) && (
              <div className="bg-gray-50">
                {section.lessons.map((lessonItem) => (
                  <button
                    key={lessonItem.id}
                    className={`w-full p-3 pl-6 text-left hover:bg-gray-100 transition-colors border-l-2 ${
                      lessonItem.id === lesson.currentLessonId
                        ? "border-purple-500 bg-purple-50"
                        : "border-transparent"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {getLessonIcon(
                          lessonItem.type,
                          lessonItem.isCompleted,
                          lessonItem.isLocked
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-sm font-medium ${
                            lessonItem.id === lesson.currentLessonId
                              ? "text-purple-700"
                              : lessonItem.isLocked
                              ? "text-gray-400"
                              : "text-gray-900"
                          }`}
                        >
                          {lessonItem.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{lessonItem.duration}</span>
                          </div>
                          {lessonItem.isPreview && (
                            <Badge variant="outline" className="text-xs">
                              Preview
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            Previous
          </Button>
          <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
            Next Lesson
          </Button>
        </div>
      </div>
    </div>
  );
}