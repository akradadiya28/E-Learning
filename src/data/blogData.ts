import type { BlogPost, BlogCategory } from "@/types/blog"

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-trends-2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI integration to new frameworks.",
    content: "Full blog content here...",
    image: "/images/blog/blog1.webp",
    author: {
      name: "John Doe",
      avatar: "/images/authors/john-doe.jpg",
      bio: "Senior Web Developer with 10+ years of experience"
    },
    category: "Web Development",
    readTime: "5 min read",
    publishedAt: "2024-06-15",
    updatedAt: "2024-06-15",
    tags: ["Web Development", "Trends", "2024"],
    featured: true
  },
  {
    id: "2",
    title: "Mastering React Hooks: A Complete Guide",
    slug: "mastering-react-hooks-complete-guide",
    excerpt: "Learn everything you need to know about React Hooks with practical examples and best practices.",
    content: "Full blog content here...",
    image: "/images/blog/blog2.webp",
    author: {
      name: "Jane Smith",
      avatar: "/images/authors/jane-smith.jpg",
      bio: "React Expert and Technical Writer"
    },
    category: "React",
    readTime: "8 min read",
    publishedAt: "2024-06-14",
    updatedAt: "2024-06-14",
    tags: ["React", "Hooks", "JavaScript"],
    featured: true
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use Which",
    slug: "css-grid-vs-flexbox-when-to-use",
    excerpt: "Understanding the differences between CSS Grid and Flexbox and when to use each layout method.",
    content: "Full blog content here...",
    image: "/images/blog/blog3.webp",
    author: {
      name: "Mike Johnson",
      avatar: "/images/authors/mike-johnson.jpg",
      bio: "CSS Specialist and Frontend Developer"
    },
    category: "CSS",
    readTime: "6 min read",
    publishedAt: "2024-06-13",
    updatedAt: "2024-06-13",
    tags: ["CSS", "Grid", "Flexbox"],
    featured: false
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    slug: "building-accessible-web-applications",
    excerpt: "A comprehensive guide to creating web applications that are accessible to all users.",
    content: "Full blog content here...",
    image: "/images/blog/blog4.webp",
    author: {
      name: "Sarah Wilson",
      avatar: "/images/authors/sarah-wilson.jpg",
      bio: "Accessibility Expert and UX Designer"
    },
    category: "Accessibility",
    readTime: "10 min read",
    publishedAt: "2024-06-12",
    updatedAt: "2024-06-12",
    tags: ["Accessibility", "UX", "Web Standards"],
    featured: false
  },
  {
    id: "5",
    title: "TypeScript Best Practices for Large Applications",
    slug: "typescript-best-practices-large-applications",
    excerpt: "Learn how to structure and organize TypeScript code for maintainable large-scale applications.",
    content: "Full blog content here...",
    image: "/images/blog/blog5.webp",
    author: {
      name: "David Brown",
      avatar: "/images/authors/david-brown.jpg",
      bio: "TypeScript Expert and Software Architect"
    },
    category: "TypeScript",
    readTime: "12 min read",
    publishedAt: "2024-06-11",
    updatedAt: "2024-06-11",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    featured: false
  },
  {
    id: "6",
    title: "The Complete Guide to Next.js 14",
    slug: "complete-guide-nextjs-14",
    excerpt: "Everything you need to know about Next.js 14, including new features and migration guide.",
    content: "Full blog content here...",
    image: "/images/blog/blog1.webp",
    author: {
      name: "Emily Davis",
      avatar: "/images/authors/emily-davis.jpg",
      bio: "Next.js Specialist and Full-stack Developer"
    },
    category: "Next.js",
    readTime: "15 min read",
    publishedAt: "2024-06-10",
    updatedAt: "2024-06-10",
    tags: ["Next.js", "React", "Full-stack"],
    featured: true
  }
]

export const blogCategories: BlogCategory[] = [
  { id: "1", name: "All Posts", slug: "all", count: 6 },
  { id: "2", name: "Web Development", slug: "web-development", count: 2 },
  { id: "3", name: "React", slug: "react", count: 1 },
  { id: "4", name: "CSS", slug: "css", count: 1 },
  { id: "5", name: "TypeScript", slug: "typescript", count: 1 },
  { id: "6", name: "Next.js", slug: "nextjs", count: 1 }
]