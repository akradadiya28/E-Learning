import type { LessonData } from "@/types/lesson";

export const lessonData: LessonData[] = [
  {
    id: "lesson-1-1",
    courseId: "1",
    courseTitle: "The Complete Design Course: From Zero to Expert!",
    courseRating: 4.5,
    courseStudents: "2.5k",
    courseDuration: "12h 30m",
    title: "Introduction to Design Principles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis dolor sit amet, consectetur adipiscing elited do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duration: "03:03",
    type: "video",
    difficulty: "Beginner",
    language: "English",
    videoUrl: "/videos/sample-video.mp4",
    currentLessonId: "lesson-1-1",
    progress: 25,
    completedLessons: 3,
    totalLessons: 12,
    
    learningObjectives: [
      "Work with color & Gradients & Grids",
      "All the useful shortcuts",
      "Be able to create Flyers, Brochures, Advertisements",
      "How to work with Images & Text"
    ],
    
    resources: [
      {
        title: "Design Principles Cheat Sheet",
        type: "PDF",
        size: "2.5 MB",
        url: "/resources/design-principles.pdf"
      },
      {
        title: "Color Theory Guide",
        type: "PDF",
        size: "1.8 MB",
        url: "/resources/color-theory.pdf"
      },
      {
        title: "Practice Files",
        type: "ZIP",
        size: "15.2 MB",
        url: "/resources/practice-files.zip"
      }
    ],
    
    sections: [
      {
        id: "section-1",
        title: "Introduction",
        duration: "1h 30m",
        lessons: [
          {
            id: "lesson-1-1",
            title: "Course Installation",
            duration: "03:03",
            type: "video",
            isCompleted: true,
            isLocked: false
          },
          {
            id: "lesson-1-2",
            title: "Create a Simple React App",
            duration: "07:48",
            type: "video",
            isCompleted: true,
            isLocked: false,
            isPreview: true
          },
          {
            id: "lesson-1-3",
            title: "React for the Rest of us",
            duration: "10:48",
            type: "video",
            isCompleted: true,
            isLocked: false,
            isPreview: true
          }
        ]
      },
      {
        id: "section-2",
        title: "Capacitance and inductance",
        duration: "2h 15m",
        lessons: [
          {
            id: "lesson-2-1",
            title: "Understanding Capacitors",
            duration: "15:30",
            type: "video",
            isCompleted: false,
            isLocked: false
          },
          {
            id: "lesson-2-2",
            title: "Working with Inductors",
            duration: "12:45",
            type: "video",
            isCompleted: false,
            isLocked: false
          },
          {
            id: "lesson-2-3",
            title: "Quiz: Capacitance and Inductance",
            duration: "10:00",
            type: "quiz",
            isCompleted: false,
            isLocked: false
          }
        ]
      },
      {
        id: "section-3",
        title: "Final Audit",
        duration: "1h 45m",
        lessons: [
          {
            id: "lesson-3-1",
            title: "Project Review",
            duration: "25:30",
            type: "video",
            isCompleted: false,
            isLocked: true
          },
          {
            id: "lesson-3-2",
            title: "Final Assessment",
            duration: "20:00",
            type: "quiz",
            isCompleted: false,
            isLocked: true
          }
        ]
      }
    ]
  }
];