export interface CourseDetail {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  category: string
  subcategory?: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  price: number
  originalPrice?: number
  currency: string
  rating: number
  reviewCount: number
  studentCount: number
  duration: string
  totalLessons: number
  totalQuizzes: number
  language: string
  lastUpdated: string
  createdAt: string

  // Instructor Information
  instructor: {
    id: string
    name: string
    title: string
    avatar?: string
    bio: string
    rating: number
    studentCount: number
    courseCount: number
    experience: string
    socialLinks?: {
      twitter?: string
      linkedin?: string
      website?: string
    }
  }

  // Course Content
  curriculum: {
    id: string
    title: string
    duration: string
    lessons: {
      id: string
      title: string
      duration: string
      type: "video" | "text" | "quiz" | "assignment"
      isPreview: boolean
    }[]
  }[]

  // Course Features
  features: string[]
  requirements: string[]
  targetAudience: string[]
  learningOutcomes: string[]

  // Media
  heroImage: string
  previewVideo?: string
  gallery?: string[]

  // Additional Info
  certificates: boolean
  downloadableResources: boolean
  lifetimeAccess: boolean
  mobileAccess: boolean

  // Reviews
  reviews: {
    id: string
    studentName: string
    studentAvatar?: string
    rating: number
    comment: string
    date: string
    helpful: number
  }[]

  // Related Courses
  relatedCourses?: string[]

  // SEO
  metaTitle?: string
  metaDescription?: string
  tags: string[]
}

export interface CourseProgress {
  courseId: string
  completedLessons: string[]
  currentLesson?: string
  progressPercentage: number
  enrollmentDate: string
  lastAccessDate: string
}
