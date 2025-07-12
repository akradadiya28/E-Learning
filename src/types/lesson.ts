export interface LessonData {
  id: string;
  courseId: string;
  courseTitle: string;
  courseRating: number;
  courseStudents: string;
  courseDuration: string;
  title: string;
  description: string;
  duration: string;
  type: "video" | "text" | "quiz";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  videoUrl: string;
  currentLessonId: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  
  learningObjectives: string[];
  resources: {
    title: string;
    type: string;
    size: string;
    url: string;
  }[];
  
  sections: {
    id: string;
    title: string;
    duration: string;
    lessons: {
      id: string;
      title: string;
      duration: string;
      type: "video" | "text" | "quiz";
      isCompleted: boolean;
      isLocked: boolean;
      isPreview?: boolean;
    }[];
  }[];
}