import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  cplus,
  carrent,
  jobit,
  java,
  tripguide,
  threejs,
  weather,
  tripguideVideo,
  chatappVideo,
  betterlinks,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Timeline",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Projects",
    icon: web,
  },
  {
    title: "Mobile App Projects",
    icon: mobile,
  },
  {
    title: "Backend & API Development",
    icon: backend,
  },
  {
    title: "Software Design & OOP",
    icon: creator,
  },
];

const technologies = [
  {
    name: "cplus",
    icon: cplus,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Full-Stack MERN Web Application (Recent Project)",
    company_name: "Academic Project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Janaury 2025 - April 2025",
    points: [
      "Designed and deployed a full-stack MERN web application using MongoDB Atlas, Express.js, React.js, and Node.js.",
      "Developed a REST API for secure data retrieval and managed environment variables (env) for security.",
      "Hosted backend and frontend on AWS EC2, ensuring seamless API communication.",
      "Implemented CORS and authentication policies for secure API access.",
    ],
  },
  {
    title:
      "Android AI-Powered Text Summarizer & Proofreader App (Recent Project)",
    company_name: "Academic Project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2025 - December 2025",
    points: [
      "Designed and developed an Android application (QuickText AI) that summarizes and proofreads text using Google Gemini AI, providing real-time feedback.",
      "Applied MVVM architecture with clear separation of UI, business logic, and data layers using ViewModel, StateFlow, and lifecycle-aware components.",
      "Implemented asynchronous processing with Kotlin Coroutines to handle AI requests efficiently and safely within the app lifecycle.",
      "Focused on secure, reliable, and user-centered mobile development with a polished portrait-only UI, ViewBinding, and responsive UX design.",
    ],
  },
  {
    title: "Backend & API Development",
    company_name: "Academic Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Janaury  2025 - April 2025",
    points: [
      "Developed a RESTful API using Node.js and Express.js, integrated with MongoDB, and tested endpoints using Thunder Client.",
      "Deployed the API on AWS Elastic Beanstalk, ensuring scalable and reliable access.",
      "Built a client/server application in C# with MVC architecture, implementing a Data Access Layer for efficient data handling.",
      "Created dynamic front-end functionality using JavaScript and DOM manipulation, and performed thorough debugging and manual testing.",
    ],
  },
  {
    title: "Advanced C++ Systems – Unit Test–Driven Projects",
    company_name: "Academic Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "September 2024 - December 2024",
    points: [
      "Developed two advanced C++ systems using a test-driven approach: a multi-calendar date/time library and an expression evaluator.",
      "Implemented core algorithms including Julian Day Number calculations, calendar conversions, and the Shunting Yard algorithm for expression parsing.",
      "Applied object-oriented design, operator overloading, date arithmetic, and robust handling of edge cases validated through Boost unit tests.",
      "Extended functionality to support multiple data types, boolean logic, date-based expressions, and error-tolerant execution.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Service Marketplace",
    description:
      "A full‑stack service marketplace platform where users can browse and hire service providers, while providers can showcase services, manage profiles, and communicate with clients in real time. Built with a modern JAMstack architecture using Next.js. ", //TypeScript, Tailwind CSS, custom UI components, Zustand, and a custom authentication system.
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "zustand",
        color: "orange-text-gradient",
      },
    ],

    image: carrent,
    video: betterlinks,
    objectFit: "contain",
    source_code_link: "https://betterlink.ca/",
  },
  {
    name: "Chat Application",
    description:
      "A real-time chat application connecting a React (Vite) client to a Node.js server using WebSockets. It supports user login, sending/receiving messages, and live updates with simple in-memory state and static asset hosting.",
    tags: [
      {
        name: "React+Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "WebSocketAPI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    video: chatappVideo,
    objectFit: "contain",
    source_code_link:
      "https://github.com/Oumer1234/ChatApp-Project--Client-and-Serever-Side-",
  },
  {
    name: "Weather Web App",
    description:
      "A small client-side weather web app that looks up a city’s location using OpenWeatherMap’s geocoding API, then fetches and displays current weather (temperature, description, humidity, wind, and icon).",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Node ",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    video: tripguideVideo,
    source_code_link: "https://github.com/Oumer1234/WeatherWEB",
  },
];

export { services, technologies, experiences, testimonials, projects };
