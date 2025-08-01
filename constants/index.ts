import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsBrowserChrome, BsFolder, BsTwitterX } from "react-icons/bs";
import { HistoryType } from "@/types";
import { IoInformationCircle } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { GiSnake } from "react-icons/gi";
import { FcMusic } from "react-icons/fc";
import { TiWeatherCloudy } from "react-icons/ti";

export const techIcons: { [key: string]: string } = {
  react: "/icons/re.svg",
  "next.js": "/icons/next.svg",
  tailwindcss: "/icons/tail.svg",
  typescript: "/icons/ts.svg",
  appwrite: "/icons/appwrite.svg",
  gsap: "/icons/gsap.svg",
  prisma: "/icons/prisma.svg",
  redis: "/icons/redis.svg",
  paystack: "/icons/paystack-2.svg",
};

export const projects = [
  {
    id: "snapgram",
    title: "Snapgram",
    description:
      "A modern social media web app that lets users share photos, videos, and stories in real time. It mimics the experience of platforms like Instagram with a focus on simplicity and responsiveness. Users can upload content, follow others, and interact through likes and views. It’s designed for creators and social media enthusiasts who want a lightweight, fast, and visually engaging experience.",
    thumbnail: "/images/snapgram.png",
    year: "2024",
    technologies: ["React", "Tailwindcss", "Typescript", "Appwrite"],
    liveUrl: "https://snapgram-patroncodes.vercel.app/",
    githubUrl: "https://github.com/patroncodes/snapgram",
    features: [
      "User Authentication and Management",
      "Content Management (posts, stories, highlights)",
      "Like and save functionality",
      "Personalized user profiles",
    ],
    challenges: [
      "Handling errors and providing proper feedback",
      "Working with Tanstack Query, since it was my first time",
      "Creating intuitive data visualizations",
    ],
    learnings: [
      "How to use TanStack Query for managing server state, caching, and background data synchronization",
      "How to create and implement Appwrite Functions",
    ],
  },
  {
    id: "pixel-care",
    title: "Pixel Care",
    description:
      "A healthcare management platform tailored for clinics, hospitals, and solo practitioners. It helps medical professionals manage appointments, patient records, and doctor-patient interactions efficiently. It prioritizes ease of use, data security, and speed. The platform serves both healthcare providers and patients looking for organized, digital-first medical experiences",
    thumbnail: "/images/pixelcare.png",
    year: "2024",
    technologies: ["Next.js", "Tailwindcss", "Typescript", "Appwrite"],
    liveUrl: "https://pixel-care.vercel.app",
    githubUrl: "https://github.com/patroncodes/pixel-care",
    features: [
      "Appointment Scheduling",
      "Medical Records Management",
      "Real-Time Notifications",
      "Responsive design",
    ],
    challenges: [
      "Handling sensitive data",
      "Ensuring role based access control",
    ],
    learnings: ["Efficient state and data management"],
  },
  {
    id: "brainwave",
    title: "Brainwave",
    description:
      "Brainwave is an AI-powered landing page for a fictional product or service that blends cutting-edge animations with modern web design. It demonstrates the power of motion and interactivity in user interfaces. It's aimed at startups and creative agencies seeking to make a bold visual impression with their digital presence.",
    thumbnail: "/images/brainwave.png",
    year: "2024",
    technologies: ["React", "Tailwindcss", "Typescript", "GSAP"],
    liveUrl: "https://pixel-brainwave.vercel.app",
    githubUrl: "https://github.com/patroncodes/pixel-brainwave",
    features: [
      "Hero Animation and Smooth Transitions",
      "Interactive Content Sections",
      "Typescript-Driven Component Structure",
    ],
    challenges: [
      "Working with GSAP since it's my first time",
      "Performance Optimization",
      "Synchronizing animation timelines",
    ],
    learnings: [
      "Mastering animation with GSAP",
      "Design for Experience",
      "Strong Tying with Typescript",
    ],
  },
  {
    id: "e-library",
    title: "Bookwise",
    description:
      "An online e-library platform that allows students and academic institutions to access digital learning materials with ease. Users can browse categorized books, tracks academic resources, and potentially download or preview them. The platform is built for educational communities aiming to modernize access to knowledge and streamline digital content distribution.",
    thumbnail: "/images/e-library.png",
    year: "2025",
    technologies: ["Next.js", "Tailwindcss", "Typescript", "Prisma", "Redis"],
    liveUrl: "https://university-library-theta-jet.vercel.app/",
    githubUrl: "https://github.com/patroncodes/university-library",
    features: [
      "Searchable Digital Library",
      "Categorized Book Listings",
      "Book Preview and Borrowing Option",
      "Admin and Upload Panel",
    ],
    challenges: [
      "Resource Management (Books, PDFs, etc)",
      "Scalability of Content",
    ],
    learnings: [],
  },
  {
    id: "school-manager",
    title: "SchoolSync",
    description:
      "SchoolSync is an all-in-one school management application designed to streamline every aspect of school operations. From managing student records, staff profiles, classes, and lesson schedules to handling payments and academic performance, SchoolSync offers a centralized platform for administrators, teachers, parents, and students. With intuitive dashboards and real-time data tracking, it simplifies school-related tasks, enhances communication, and improves overall efficiency.",
    thumbnail: "/images/e-library.png",
    year: "2025",
    technologies: ["Next.js", "Tailwindcss", "Typescript", "Paystack"],
    liveUrl: "https://university-library-theta-jet.vercel.app/",
    githubUrl: "https://github.com/patroncodes/school-manager",
    features: [],
    challenges: [],
    learnings: [],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Epiphanus was an absolute pleasure. His promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "Michael Chen",
    designation: "Product Manager at TechFlow",
    src: "/images/profile.jpg",
  },
  {
    quote:
      "Epiphanus's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Epiphanus is the ideal partner.",
    name: "Emily Watson",
    designation: "",
    src: "/images/no-img.png",
  },
];

export const skills: { [key: string]: string[] } = {
  frontend: ["HTML & CSS", "Javascript (TS)", "React", "Next.js"],
  backend: ["Upstash Redis", "PostgreSQL", "GraphQL", "Appwrite"],
  tools: ["Tanstack-Query", "Vite", "Github", "Prisma"],
  mobile: ["React Native", "Expo"],
};

export const socialMediaPlatforms = [
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/onyeso-epiphanus-8651b1284",
  },
  {
    title: "Twitter",
    icon: BsTwitterX,
    href: "https://x.com/patroncodes",
  },
  {
    title: "GitHub",
    icon: FaGithub,
    href: "https://github.com/patroncodes",
  },
];

export const gallery = [
  {
    title: "Today",
    date: new Date(),
    items: [
      {
        id: "today-1",
        type: "video",
        title: "What was bro thinking?😂",
        thumbnail: "/videos/listen.mp4",
        date: new Date(),
        isFavorite: false,
      },
    ],
  },
  {
    title: "May 20",
    date: new Date(),
    items: [
      {
        id: "may-1",
        type: "photo",
        title: "",
        thumbnail: "/images/movieflix1.jpg",
        date: new Date(),
        isFavorite: true,
      },
      {
        id: "may-2",
        type: "photo",
        title: "",
        thumbnail: "/images/movieflix2.jpg",
        date: new Date(),
        isFavorite: true,
      },
      {
        id: "may-3",
        type: "photo",
        title: "",
        thumbnail: "/images/movieflix3.jpg",
        date: new Date(),
        isFavorite: true,
      },
      {
        id: "may-4",
        type: "photo",
        title: "",
        thumbnail: "/images/movieflix4.jpg",
        date: new Date(),
        isFavorite: true,
      },
      {
        id: "may-5",
        type: "photo",
        title: "",
        thumbnail: "/images/profile.jpg",
        date: new Date(),
        isFavorite: true,
      },
      {
        id: "may-6",
        type: "photo",
        title: "",
        thumbnail: "/images/profile-animated.png",
        date: new Date(),
        isFavorite: true,
      },
    ],
  },
];

export const browserHistory: HistoryType[] = [
  {
    id: 1,
    query: "GitHub",
    time: "10:02",
  },
  {
    id: 2,
    query: "MDN Web Docs",
    time: "13:45",
  },
  {
    id: 3,
    query: "Vercel",
    time: "13:52",
  },
];

// Each array is a screen. Each screen is allowed to have only 9 apps. Your app won't be displayed if you don't adhere to that.
// Screen 1 should have only 6 apps
export const mobileApps = [
  [
    { name: "Info", icon: IoInformationCircle, color: "bg-gray-400" },
    { name: "Snake", icon: GiSnake, color: "bg-green-600" },
    { name: "iTunes", icon: FcMusic, color: "bg-red-200" },
  ],
  [
    { name: "Weather", icon: TiWeatherCloudy, color: "bg-blue-500" },
    { name: "Guess", icon: LuBrain, color: "text-primary bg-white" },
    { name: "Projects", icon: BsFolder, color: "bg-yellow-300" },
    { name: "Info", icon: IoInformationCircle, color: "bg-gray-400" },
    { name: "Snake", icon: GiSnake, color: "bg-green-600" },
    { name: "iTunes", icon: FcMusic, color: "bg-red-200" },
    {
      name: "Chrome",
      icon: BsBrowserChrome,
      color:
        "bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 text-white",
    },
  ],
  [
    // Intentionally left empty for the music player widget. Add your apps in another array
  ],
];
