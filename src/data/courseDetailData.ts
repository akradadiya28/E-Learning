import type { CourseDetail } from "@/types/courseDetail";

export const courseDetailData: CourseDetail = {
  id: "1",
  title: "Resolving Conflicts Between Designers And Engineers",
  slug: "resolving-conflicts-designers-engineers",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis dolor sit amet, consectetur adipiscing elited do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  shortDescription:
    "Master the art of bridging communication gaps between design and development teams for better project outcomes.",
  category: "Development",
  subcategory: "Team Management",
  level: "Expert",
  price: 18.0,
  originalPrice: 32.0,
  currency: "USD",
  rating: 4.5,
  reviewCount: 156,
  studentCount: 2250,
  duration: "11h 20m",
  totalLessons: 12,
  totalQuizzes: 145,
  language: "English",
  lastUpdated: "24/07/2024",
  createdAt: "2024-01-15",

  instructor: {
    id: "instructor-1",
    name: "David Millar",
    title: "Senior Product Manager & UX Expert",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "David is a seasoned product manager with over 8 years of experience in bridging the gap between design and development teams. He has worked with Fortune 500 companies and startups alike.",
    rating: 4.8,
    studentCount: 15420,
    courseCount: 12,
    experience: "8+ years",
    socialLinks: {
      twitter: "https://twitter.com/davidmillar",
      linkedin: "https://linkedin.com/in/davidmillar",
      website: "https://davidmillar.dev",
    },
  },

  curriculum: [
    {
      id: "section-1",
      title: "Introduction to Design-Development Collaboration",
      duration: "2h 30m",
      lessons: [
        {
          id: "lesson-1-1",
          title: "Understanding the Designer Mindset",
          duration: "15m",
          type: "video",
          isPreview: true,
        },
        {
          id: "lesson-1-2",
          title: "Understanding the Developer Mindset",
          duration: "18m",
          type: "video",
          isPreview: true,
        },
        {
          id: "lesson-1-3",
          title: "Common Sources of Conflict",
          duration: "22m",
          type: "video",
          isPreview: false,
        },
        {
          id: "lesson-1-4",
          title: "Quiz: Identifying Conflict Patterns",
          duration: "10m",
          type: "quiz",
          isPreview: false,
        },
      ],
    },
    {
      id: "section-2",
      title: "Communication Strategies",
      duration: "3h 15m",
      lessons: [
        {
          id: "lesson-2-1",
          title: "Establishing Common Language",
          duration: "25m",
          type: "video",
          isPreview: false,
        },
        {
          id: "lesson-2-2",
          title: "Design Handoff Best Practices",
          duration: "30m",
          type: "video",
          isPreview: false,
        },
        {
          id: "lesson-2-3",
          title: "Code Review for Designers",
          duration: "28m",
          type: "video",
          isPreview: false,
        },
      ],
    },
    {
      id: "section-3",
      title: "Tools and Workflows",
      duration: "2h 45m",
      lessons: [
        {
          id: "lesson-3-1",
          title: "Collaborative Design Tools",
          duration: "20m",
          type: "video",
          isPreview: false,
        },
        {
          id: "lesson-3-2",
          title: "Version Control for Designers",
          duration: "35m",
          type: "video",
          isPreview: false,
        },
      ],
    },
  ],

  features: [
    "Lifetime Access",
    "Mobile Access",
    "Certificate of Completion",
    "Downloadable Resources",
    "Community Access",
    "Expert Support",
  ],

  requirements: [
    "Basic understanding of design principles",
    "Familiarity with development concepts",
    "Experience working in teams",
    "Access to design tools (Figma, Sketch, etc.)",
  ],

  targetAudience: [
    "Product Managers",
    "UX/UI Designers",
    "Frontend Developers",
    "Team Leads",
    "Project Managers",
  ],

  learningOutcomes: [
    "Work with color & Gradients & Grids",
    "All the useful shortcuts",
    "Be able to create Flyers, Brochures, Advertisements",
    "How to work with Images & Text",
  ],

  heroImage: "/images/courses/c1.jpg",
  previewVideo: "https://example.com/preview-video.mp4",

  certificates: true,
  downloadableResources: true,
  lifetimeAccess: true,
  mobileAccess: true,

  reviews: [
    {
      id: "review-1",
      studentName: "Sarah Johnson",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment:
        "Excellent course! Really helped me understand how to work better with our development team.",
      date: "2024-03-15",
      helpful: 12,
    },
    {
      id: "review-2",
      studentName: "Mike Chen",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      comment:
        "Great insights and practical tips. The instructor explains complex concepts very clearly.",
      date: "2024-03-10",
      helpful: 8,
    },
  ],

  tags: [
    "Design",
    "Development",
    "Team Management",
    "Communication",
    "Collaboration",
  ],
  metaTitle: "Resolving Conflicts Between Designers And Engineers - SkillGro",
  metaDescription:
    "Learn how to bridge the gap between design and development teams with proven strategies and communication techniques.",
};
