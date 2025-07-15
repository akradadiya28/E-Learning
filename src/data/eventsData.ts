import type { Event, EventCategory } from "@/types/event"

export const eventsData: Event[] = [
  {
    id: "1",
    title: "The Accessible Target Sizes Cheatsheet",
    slug: "accessible-target-sizes-cheatsheet",
    description: "Learn about accessible target sizes and how to implement them in your designs for better user experience.",
    image: "/images/events/event1.jpg",
    date: "25 June, 2024",
    location: "United Kingdom",
    category: "Design",
    featured: true,
    createdAt: "2024-06-01",
    updatedAt: "2024-06-15",
    tags: ["Accessibility", "Design", "UX"]
  },
  {
    id: "2",
    title: "Aewe Creating Futures Through Technology",
    slug: "creating-futures-through-technology",
    description: "Explore how technology is shaping the future and creating new opportunities for innovation.",
    image: "/images/events/event2.jpg",
    date: "25 June, 2024",
    location: "Tokyo Japan",
    category: "Technology",
    featured: true,
    createdAt: "2024-06-02",
    updatedAt: "2024-06-16",
    tags: ["Technology", "Innovation", "Future"]
  },
  {
    id: "3",
    title: "Exactly How Technology Can Make Reading",
    slug: "technology-can-make-reading",
    description: "Discover how modern technology is revolutionizing the way we read and consume content.",
    image: "/images/events/event3.jpg",
    date: "25 June, 2024",
    location: "Colorado",
    category: "Education",
    featured: false,
    createdAt: "2024-06-03",
    updatedAt: "2024-06-17",
    tags: ["Reading", "Technology", "Education"]
  },
  {
    id: "4",
    title: "Learning JavaScript With Imagination",
    slug: "learning-javascript-with-imagination",
    description: "A creative approach to learning JavaScript programming through imaginative examples and projects.",
    image: "/images/events/event4.jpg",
    date: "25 June, 2024",
    location: "Alexander City",
    category: "Programming",
    featured: false,
    createdAt: "2024-06-04",
    updatedAt: "2024-06-18",
    tags: ["JavaScript", "Programming", "Learning"]
  },
  {
    id: "5",
    title: "Make Your Magnificent May 2023 Edition",
    slug: "magnificent-may-2023-edition",
    description: "Join us for an inspiring event focused on personal and professional development.",
    image: "/images/events/event5.jpg",
    date: "25 June, 2024",
    location: "Alaska",
    category: "Personal Development",
    featured: false,
    createdAt: "2024-06-05",
    updatedAt: "2024-06-19",
    tags: ["Development", "Motivation", "Growth"]
  },
  {
    id: "6",
    title: "Accessible Target Sizes Cheatsheet",
    slug: "accessible-target-sizes-cheatsheet-2",
    description: "Advanced techniques for implementing accessible target sizes in modern web applications.",
    image: "/images/events/event6.jpg",
    date: "25 June, 2024",
    location: "Estes Park",
    category: "Design",
    featured: false,
    createdAt: "2024-06-06",
    updatedAt: "2024-06-20",
    tags: ["Accessibility", "Web Design", "Standards"]
  },
  {
    id: "7",
    title: "Color mechanics that he came up with during",
    slug: "color-mechanics-during-development",
    description: "Understanding color theory and mechanics in design and development processes.",
    image: "/images/events/event7.jpg",
    date: "25 June, 2024",
    location: "Walsenburg",
    category: "Design",
    featured: false,
    createdAt: "2024-06-07",
    updatedAt: "2024-06-21",
    tags: ["Color Theory", "Design", "Mechanics"]
  },
  {
    id: "8",
    title: "How To Design Effective User Onboarding",
    slug: "design-effective-user-onboarding",
    description: "Best practices for creating user onboarding experiences that convert and retain users.",
    image: "/images/events/event8.jpg",
    date: "25 June, 2024",
    location: "New York",
    category: "UX Design",
    featured: false,
    createdAt: "2024-06-08",
    updatedAt: "2024-06-22",
    tags: ["UX", "Onboarding", "User Experience"]
  }
]

export const eventCategories: EventCategory[] = [
  { id: "1", name: "All Events", slug: "all", count: 8 },
  { id: "2", name: "Design", slug: "design", count: 3 },
  { id: "3", name: "Technology", slug: "technology", count: 2 },
  { id: "4", name: "Education", slug: "education", count: 1 },
  { id: "5", name: "Programming", slug: "programming", count: 1 },
  { id: "6", name: "Personal Development", slug: "personal-development", count: 1 }
]