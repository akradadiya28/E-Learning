export interface NavigationItem {
  id: string
  label: string
  href?: string
  icon?: string
  badge?: string
  children?: NavigationItem[]
  description?: string
  featured?: boolean
  image?: string
}

export interface MegaMenuSection {
  id: string
  title: string
  items: NavigationItem[]
  featured?: NavigationItem[]
}

export const navigationData: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "courses",
    label: "Courses",
    children: [
      {
        id: "all-courses",
        label: "All Courses",
        href: "/courses",
        description: "Browse our complete course catalog",
        featured: true,
      },
      {
        id: "categories",
        label: "Categories",
        children: [
          {
            id: "development",
            label: "Development",
            href: "/courses/development",
            description: "Web, Mobile & Software Development",
            icon: "💻",
          },
          {
            id: "design",
            label: "Design",
            href: "/courses/design",
            description: "UI/UX, Graphic & Web Design",
            icon: "🎨",
          },
          {
            id: "business",
            label: "Business",
            href: "/courses/business",
            description: "Marketing, Finance & Management",
            icon: "💼",
          },
          {
            id: "data-science",
            label: "Data Science",
            href: "/courses/data-science",
            description: "Analytics, ML & AI",
            icon: "📊",
          },
          {
            id: "marketing",
            label: "Marketing",
            href: "/courses/marketing",
            description: "Digital Marketing & SEO",
            icon: "📈",
          },
          {
            id: "photography",
            label: "Photography",
            href: "/courses/photography",
            description: "Photo & Video Production",
            icon: "📸",
          },
        ],
      },
      {
        id: "skill-levels",
        label: "Skill Levels",
        children: [
          {
            id: "beginner",
            label: "Beginner",
            href: "/courses?skillLevel=beginner",
            description: "Perfect for getting started",
          },
          {
            id: "intermediate",
            label: "Intermediate",
            href: "/courses?skillLevel=intermediate",
            description: "Build on your existing knowledge",
          },
          {
            id: "advanced",
            label: "Advanced",
            href: "/courses?skillLevel=advanced",
            description: "Master advanced concepts",
          },
        ],
      },
      {
        id: "featured-courses",
        label: "Featured Courses",
        children: [
          {
            id: "javascript-mastery",
            label: "JavaScript Mastery",
            href: "/course/javascript-mastery",
            description: "Complete JavaScript course",
            badge: "Popular",
            image: "/images/courses/c1.jpg",
          },
          {
            id: "react-development",
            label: "React Development",
            href: "/course/react-development",
            description: "Build modern web apps",
            badge: "New",
            image: "/images/courses/c2.jpg",
          },
          {
            id: "ui-ux-design",
            label: "UI/UX Design",
            href: "/course/ui-ux-design",
            description: "Design beautiful interfaces",
            badge: "Trending",
            image: "/images/courses/c3.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "pages",
    label: "Pages",
    children: [
      {
        id: "about",
        label: "About Us",
        href: "/about",
        description: "Learn about our mission",
      },
      {
        id: "instructors",
        label: "Instructors",
        href: "/instructors",
        description: "Meet our expert instructors",
      },
      {
        id: "contact",
        label: "Contact",
        href: "/contact-us",
        description: "Get in touch with us",
      },
      {
        id: "blog",
        label: "Blog",
        href: "/blog",
        description: "Latest news and updates",
      },
      {
        id: "faq",
        label: "FAQ",
        href: "/faq",
        description: "Frequently asked questions",
      },
      {
        id: "privacy",
        label: "Privacy Policy",
        href: "/privacy",
        description: "Our privacy policy",
      },
      {
        id: "terms",
        label: "Terms of Service",
        href: "/terms",
        description: "Terms and conditions",
      },
    ],
  },
  {
    id: "shop",
    label: "Shop",
    children: [
      {
        id: "all-products",
        label: "All Products",
        href: "/shop",
        description: "Browse our complete product catalog",
        featured: true,
      },
      {
        id: "product-categories",
        label: "Categories",
        children: [
          {
            id: "ebooks",
            label: "E-books",
            href: "/shop?category=ebooks",
            description: "Digital books and guides",
            icon: "📚",
          },
          {
            id: "templates",
            label: "Templates",
            href: "/shop?category=templates",
            description: "Design templates and resources",
            icon: "📄",
          },
          {
            id: "tools",
            label: "Tools",
            href: "/shop?category=tools",
            description: "Software and applications",
            icon: "🛠️",
          },
          {
            id: "bundles",
            label: "Bundles",
            href: "/shop?category=bundles",
            description: "Course and resource bundles",
            icon: "📦",
          },
        ],
      },
      {
        id: "featured-products",
        label: "Featured Products",
        children: [
          {
            id: "design-bundle",
            label: "Design Bundle",
            href: "/shop-detail/design-bundle",
            description: "Complete design resource pack",
            badge: "Best Seller",
            image: "/images/shop/shop1.webp",
          },
          {
            id: "coding-ebook",
            label: "Coding E-book",
            href: "/shop-detail/coding-ebook",
            description: "Learn to code from scratch",
            badge: "New",
            image: "/images/shop/shop2.webp",
          },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact-us",
  },
];

export const megaMenuSections: Record<string, MegaMenuSection[]> = {
  courses: [
    {
      id: "browse",
      title: "Browse Courses",
      items: [
        {
          id: "all-courses",
          label: "All Courses",
          href: "/courses",
          description: "Browse our complete course catalog",
        },
        {
          id: "free-courses",
          label: "Free Courses",
          href: "/courses?price=free",
          description: "Start learning for free",
        },
        {
          id: "premium-courses",
          label: "Premium Courses",
          href: "/courses?price=paid",
          description: "Advanced premium content",
        },
      ],
    },
    {
      id: "categories",
      title: "Popular Categories",
      items: [
        {
          id: "development",
          label: "Development",
          href: "/courses/development",
          description: "Web, Mobile & Software Development",
          icon: "💻",
        },
        {
          id: "design",
          label: "Design",
          href: "/courses/design",
          description: "UI/UX, Graphic & Web Design",
          icon: "🎨",
        },
        {
          id: "business",
          label: "Business",
          href: "/courses/business",
          description: "Marketing, Finance & Management",
          icon: "💼",
        },
        {
          id: "data-science",
          label: "Data Science",
          href: "/courses/data-science",
          description: "Analytics, ML & AI",
          icon: "📊",
        },
      ],
    },
    {
      id: "featured",
      title: "Featured Courses",
      items: [
        {
          id: "javascript-mastery",
          label: "JavaScript Mastery",
          href: "/course/javascript-mastery",
          description: "Complete JavaScript course",
          badge: "Popular",
          image: "/images/courses/c1.jpg",
        },
        {
          id: "react-development",
          label: "React Development",
          href: "/course/react-development",
          description: "Build modern web apps",
          badge: "New",
          image: "/images/courses/c2.jpg",
        },
      ],
    },
  ],
  pages: [
    {
      id: "company",
      title: "Company",
      items: [
        {
          id: "about",
          label: "About Us",
          href: "/about",
          description: "Learn about our mission",
        },
        {
          id: "instructors",
          label: "Instructors",
          href: "/instructors",
          description: "Meet our expert instructors",
        },
        {
          id: "contact",
          label: "Contact",
          href: "/contact-us",
          description: "Get in touch with us",
        },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      items: [
        {
          id: "blog",
          label: "Blog",
          href: "/blog",
          description: "Latest news and updates",
        },
        {
          id: "faq",
          label: "FAQ",
          href: "/faq",
          description: "Frequently asked questions",
        },
        {
          id: "help",
          label: "Help Center",
          href: "/help",
          description: "Get help and support",
        },
      ],
    },
    {
      id: "legal",
      title: "Legal",
      items: [
        {
          id: "privacy",
          label: "Privacy Policy",
          href: "/privacy",
          description: "Our privacy policy",
        },
        {
          id: "terms",
          label: "Terms of Service",
          href: "/terms",
          description: "Terms and conditions",
        },
      ],
    },
  ],
  shop: [
    {
      id: "browse-products",
      title: "Browse Products",
      items: [
        {
          id: "all-products",
          label: "All Products",
          href: "/shop",
          description: "Browse our complete catalog",
        },
        {
          id: "new-arrivals",
          label: "New Arrivals",
          href: "/shop?sort=newest",
          description: "Latest products",
        },
        {
          id: "best-sellers",
          label: "Best Sellers",
          href: "/shop?sort=popular",
          description: "Most popular products",
        },
      ],
    },
    {
      id: "product-categories",
      title: "Categories",
      items: [
        {
          id: "ebooks",
          label: "E-books",
          href: "/shop?category=ebooks",
          description: "Digital books and guides",
          icon: "📚",
        },
        {
          id: "templates",
          label: "Templates",
          href: "/shop?category=templates",
          description: "Design templates",
          icon: "📄",
        },
        {
          id: "tools",
          label: "Tools",
          href: "/shop?category=tools",
          description: "Software and apps",
          icon: "🛠️",
        },
      ],
    },
  ],
};