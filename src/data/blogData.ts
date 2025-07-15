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
    featured: true,
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends that will shape how we build and interact with websites. From AI integration to new frameworks, let's explore what's on the horizon.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how developers write code. Tools like GitHub Copilot and ChatGPT are becoming essential parts of the development workflow, helping developers write better code faster.</p>
      
      <h2>2. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly continues to gain traction, allowing developers to run high-performance applications in the browser. This technology is particularly useful for gaming, image processing, and scientific computing applications.</p>
      
      <h2>3. Jamstack Evolution</h2>
      <p>The Jamstack architecture is evolving with better tooling and more sophisticated static site generators. This approach offers improved performance, security, and developer experience.</p>
      
      <h2>4. Progressive Web Apps (PWAs)</h2>
      <p>PWAs are becoming more powerful with new APIs and capabilities, bridging the gap between web and native applications. They offer offline functionality, push notifications, and app-like experiences.</p>
      
      <h2>Conclusion</h2>
      <p>These trends represent just the beginning of what's possible in web development. As we move forward, staying updated with these technologies will be crucial for building modern, efficient, and user-friendly web applications.</p>
    `
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
    featured: true,
    content: `
      <p>React Hooks have revolutionized how we write React components. This comprehensive guide will take you through everything you need to know about hooks, from the basics to advanced patterns.</p>
      
      <h2>Understanding useState</h2>
      <p>The useState hook is the foundation of state management in functional components. It allows you to add state to functional components without converting them to class components.</p>
      
      <h2>useEffect for Side Effects</h2>
      <p>The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
      
      <h2>Custom Hooks</h2>
      <p>Custom hooks allow you to extract component logic into reusable functions. They're a powerful way to share stateful logic between components.</p>
    `
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
    featured: false,
    content: `
      <p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Understanding when to use each one is crucial for creating efficient and maintainable layouts.</p>
      
      <h2>When to Use Flexbox</h2>
      <p>Flexbox is ideal for one-dimensional layouts - either rows or columns. It's perfect for navigation bars, centering content, and distributing space among items.</p>
      
      <h2>When to Use CSS Grid</h2>
      <p>CSS Grid excels at two-dimensional layouts. Use it when you need to control both rows and columns simultaneously, such as in complex page layouts.</p>
    `
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
    featured: false,
    content: `
      <p>Building accessible web applications isn't just about compliance - it's about creating inclusive experiences for all users. This guide covers the essential principles and practices.</p>
      
      <h2>WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for making web content accessible to people with disabilities.</p>
      
      <h2>Semantic HTML</h2>
      <p>Using semantic HTML elements is the foundation of accessibility. Screen readers and other assistive technologies rely on proper markup to understand content structure.</p>
    `
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
    featured: false,
    content: `
      <p>TypeScript brings type safety to JavaScript, but managing types in large applications requires careful planning and best practices. Here's how to structure your TypeScript codebase for maintainability.</p>
      
      <h2>Type Organization</h2>
      <p>Organize your types in a logical hierarchy. Create dedicated type files for different domains of your application.</p>
      
      <h2>Utility Types</h2>
      <p>Leverage TypeScript's built-in utility types like Partial, Pick, and Omit to create flexible and reusable type definitions.</p>
    `
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
    featured: true,
    content: `
      <p>Next.js 14 introduces several exciting features that make building React applications even more powerful and efficient. Let's explore what's new and how to migrate your existing projects.</p>
      
      <h2>App Router Improvements</h2>
      <p>The App Router continues to evolve with better performance and new features. Server Components are now more stable and offer improved developer experience.</p>
      
      <h2>Turbopack Integration</h2>
      <p>Turbopack, the Rust-based bundler, is now more stable and offers significant performance improvements for development builds.</p>
    `
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