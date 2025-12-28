export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: ("dev" | "ml" | "mobile" | "fullstack")[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  info1?: string;
  info2?: string;
  info3?: string;
  head1?: string;
  head2?: string;
  head3?: string;
}

export const projects: Project[] = [
  {
    title: "GatherNet",
    description: "Gathernet is a Node.js-based platform that detects your location and shows nearby events, sports, and activities—helping you explore and connect with what's happening around you in real-time.",
    longDescription: "Gathernet is a location-aware social discovery platform built using Node.js that automatically detects your current location and curates a personalized feed of nearby events, sports activities, meetups, and gatherings. It bridges the gap between online and offline communities by helping users engage with what’s happening around them in real-time—encouraging spontaneous participation, local exploration, and meaningful social connections.",
    tags: ["Node.js", "MongoDB", "Geo Location API"],
    category: ["fullstack"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    githubUrl: "https://github.com/amish2005/HWM-GatherNet",
    featured: false,
    info3: "1 month",
    head3: "Duration",
    info2: "Real Time",
    head2: "Location",
    info1: "Node.js",
    head1: "Backend",
  },
  {
    title: "AI Website Generator",
    description: "AI Website Generator is an AI-powered web application that transforms natural language prompts into responsive, production-grade website layouts, with built-in no-code editing for real-time customization of design and styling.",
    longDescription: `AI-WEBSITE-GENERATOR is a full-stack AI-driven website building platform designed to streamline and accelerate frontend development workflows. The application leverages Next.js and modern UI tooling to convert natural language prompts into responsive, production-ready web layouts, significantly reducing the time required for website prototyping and iteration. Beyond automated generation, the platform features an interactive no-code visual editing layer that allows users to dynamically refine AI-generated websites through intuitive controls for typography, color theming, font sizing, and layout adjustments, eliminating the need for manual code modification. The system is backed by a robust backend architecture utilizing PostgreSQL with Drizzle ORM for structured data management, and ImageKit for optimized image storage and delivery. With a scalable component-driven design and API-based AI orchestration, AI-WEBSITE-GENERATOR bridges the gap between AI automation and user-controlled customization, offering a powerful, developer-friendly solution for modern website creation.`,
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Drizzle ORM", "ImageKit", "OpenRouter", "Drizzle ORM", "React", "TypeScript"],
    category: ["fullstack", "ml"],
    image: "https://i.postimg.cc/y8XYjLR3/Gemini-Generated-Image-yb7pecyb7pecyb7p.png",
    liveUrl: "#",
    githubUrl: "https://github.com/amish2005/ai-website-generator",
    featured: true,
    info3: "1 month",
    head3: "Duration",
    info2: "AI Powered",
    head2: "Website Gen",
    info1: "Next.js",
    head1: "Project",
  },
  {
    title: "MedSync",
    description: "MedSync is a Node.js-based medical management system that bridges hospitals and patients through synchronized portals, enabling real-time access to services like bed availability, OPD schedules, appointments, and inventory tracking.",
    longDescription: "MedSync is an integrated medical management platform developed using HTML, CSS, JavaScript, Node.js, MySQL, and Bootstrap. It connects hospitals and patients through two synchronized portals. The hospital portal allows staff to manage bed availability, OPD schedules, and medical inventory, while the patient portal offers real-time access to medical services such as viewing schedules and booking online appointments. The system enhances efficiency by streamlining hospital operations and improving patient experience through seamless, real-time interaction.",
    tags: ["Node.js", "Multer", "Javascript", "Express"],
    category: ["fullstack"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/amish2005/MedSync",
    featured: true,
    info3: "2 months",
    head3: "Duration",
    info2: "Real Time",
    head2: "Sync",
    info1: "RESTful",
    head1: "APIs",
  },
  {
    title: "Intern Portal",
    description: "Intern Portal is a MERN stack-based internship platform that uses a powerful scraping model to collect and display real-time listings from platforms like Unstop and Internshala. It features personalized dashboards, one-click apply, skill-based internship matching, and live application tracking.",
    longDescription: "Intern Portal is a full-fledged MERN stack web application designed to streamline the internship search process for students and early professionals. At its core, the platform integrates a powerful Puppeteer-based scraping model that fetches real-time internship listings from popular platforms like Unstop and Internshala. This ensures users always have access to the latest, verified opportunities without needing to switch between sites.",
    tags: ["React", "Puppeter", "Node.js", "Cherio", "MongoDB", "Chromium", "Cron"],
    category: ["fullstack", "ml"],
    image: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    githubUrl: "https://github.com/amish2005/internPortal",
    featured: true,
    info3: "1 month",
    head3: "Duration",
    info2: "Web",
    head2: "Scraping",
    info1: "Cron",
    head1: "Jobs",
  },
  // {
  //   title: "Fitness Tracking App",
  //   description: "Mobile fitness application with workout tracking, nutrition logging, and progress analytics. Includes social features, custom workout plans, and integration with wearable devices.",
  //   longDescription: "A comprehensive fitness platform that helps users track workouts, monitor nutrition, and achieve their health goals. The app uses machine learning to provide personalized workout recommendations.",
  //   tags: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit"],
  //   category: "mobile",
  //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   year: "2022"
  // },
  // {
  //   title: "Real Estate Platform",
  //   description: "Full-stack real estate marketplace with property listings, virtual tours, mortgage calculator, and agent management system. Features advanced search filters and map integration.",
  //   longDescription: "This platform revolutionizes property discovery with 3D virtual tours, AI-powered property recommendations, and integrated financing tools. Built to handle thousands of concurrent users.",
  //   tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Mapbox"],
  //   category: "fullstack",
  //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: true,
  //   year: "2023"
  // },
  // {
  //   title: "Sentiment Analysis API",
  //   description: "RESTful API for sentiment analysis of text data using natural language processing. Supports multiple languages and provides confidence scores with detailed emotion breakdowns.",
  //   longDescription: "This API processes thousands of text samples per minute, providing accurate sentiment analysis for customer feedback, social media monitoring, and content moderation applications.",
  //   tags: ["Python", "NLTK", "FastAPI", "Docker", "Redis", "PostgreSQL"],
  //   category: "ml",
  //   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   year: "2022"
  // },
  // {
  //   title: "Portfolio Website Builder",
  //   description: "Drag-and-drop website builder for creative professionals. Features customizable templates, integrated blogging platform, client gallery, and e-commerce capabilities.",
  //   longDescription: "An intuitive website builder that empowers creatives to showcase their work professionally. Includes SEO optimization, responsive design templates, and integrated payment processing.",
  //   tags: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary", "Docker"],
  //   category: "dev",
  //   image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   year: "2022"
  // }
];
