export interface Instructor {
  id: string
  name: string
  title: string
  specialization: string
  bio: string
  avatar: string
  rating: number
  reviewCount: number
  studentCount: number
  courseCount: number
  experience: string
  education: string[]
  skills: string[]
  socialLinks: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    website?: string
  }
  achievements: string[]
  languages: string[]
  joinedDate: string
  isVerified: boolean
  isTopRated: boolean
}

export interface InstructorFilters {
  search: string
  specialization: string
  rating: string
  experience: string
  sortBy: string
}
