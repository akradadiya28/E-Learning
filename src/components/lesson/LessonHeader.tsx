"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  X,
  Menu,
  ChevronDown,
  Star,
  Users,
  Clock,
} from "lucide-react";
import type { LessonData } from "@/types/lesson";

interface LessonHeaderProps {
  lesson: LessonData;
}

export function LessonHeader({ lesson }: LessonHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side - Course Info */}
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            {/* Back Button */}
            <Link href={`/course/${lesson.courseId}`}>
              <Button variant="ghost" size="sm" className="p-2">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>

            {/* Course Title - Responsive */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h1 className="text-sm md:text-base font-semibold text-gray-900 truncate">
                  {lesson.courseTitle}
                </h1>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-1"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </div>

              {/* Expanded Info - Mobile */}
              {isExpanded && (
                <div className="mt-2 lg:hidden">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{lesson.courseRating}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{lesson.courseStudents} students</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{lesson.courseDuration}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Desktop Info */}
              <div className="hidden lg:flex items-center space-x-4 mt-1 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{lesson.courseRating}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{lesson.courseStudents} students</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.courseDuration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="hidden sm:inline-flex">
              {lesson.progress}% Complete
            </Badge>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="sm" className="lg:hidden p-2">
              <Menu className="w-4 h-4" />
            </Button>

            {/* Close Button */}
            <Link href={`/course/${lesson.courseId}`}>
              <Button variant="ghost" size="sm" className="p-2">
                <X className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}