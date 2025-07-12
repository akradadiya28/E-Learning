"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Download, MessageCircle } from "lucide-react";
import type { LessonData } from "@/types/lesson";

interface LessonTabsProps {
  lesson: LessonData;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function LessonTabs({ lesson, activeTab, onTabChange }: LessonTabsProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "resources", label: "Resources" },
    { id: "notes", label: "Notes" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Lesson Description */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {lesson.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {lesson.description}
              </p>
            </div>

            {/* What you'll learn */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What you&apos;ll learn in this lesson
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Lesson Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="font-medium text-gray-900">{lesson.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Difficulty</div>
                  <Badge variant="secondary">{lesson.difficulty}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Type</div>
                  <div className="font-medium text-gray-900">{lesson.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Language</div>
                  <div className="font-medium text-gray-900">{lesson.language}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Lesson Resources
            </h3>
            
            {lesson.resources.length > 0 ? (
              <div className="space-y-4">
                {lesson.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                        <p className="text-sm text-gray-500">{resource.type} • {resource.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No resources available for this lesson.</p>
              </div>
            )}
          </div>
        )}

        {/* Notes Tab */}
        {activeTab === "notes" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">My Notes</h3>
              <Button size="sm">Add Note</Button>
            </div>
            
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">You haven&apos;t added any notes yet.</p>
              <Button variant="outline">Create Your First Note</Button>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Lesson Reviews
            </h3>
            
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No reviews available for this lesson.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Download, MessageCircle } from "lucide-react";
import type { LessonData } from "@/types/lesson";

interface LessonTabsProps {
  lesson: LessonData;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function LessonTabs({ lesson, activeTab, onTabChange }: LessonTabsProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "resources", label: "Resources" },
    { id: "notes", label: "Notes" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Lesson Description */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {lesson.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {lesson.description}
              </p>
            </div>

            {/* What you'll learn */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What you'll learn in this lesson
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Lesson Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="font-medium text-gray-900">{lesson.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Difficulty</div>
                  <Badge variant="secondary">{lesson.difficulty}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Type</div>
                  <div className="font-medium text-gray-900">{lesson.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Language</div>
                  <div className="font-medium text-gray-900">{lesson.language}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Lesson Resources
            </h3>
            
            {lesson.resources.length > 0 ? (
              <div className="space-y-4">
                {lesson.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                        <p className="text-sm text-gray-500">{resource.type} • {resource.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No resources available for this lesson.</p>
              </div>
            )}
          </div>
        )}

        {/* Notes Tab */}
        {activeTab === "notes" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">My Notes</h3>
              <Button size="sm">Add Note</Button>
            </div>
            
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">You haven't added any notes yet.</p>
              <Button variant="outline">Create Your First Note</Button>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Lesson Reviews
            </h3>
            
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No reviews available for this lesson.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}