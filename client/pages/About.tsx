import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Instagram,
  FileText,
  Download,
  ExternalLink,
  Award,
  Calendar,
  Users,
  Target,
  Zap,
  Globe,
  Database,
  Smartphone,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Globe,
      description: "Building responsive, modern user interfaces",
      skills: [
        { name: "React", level: 90, years: 4 },
        { name: "TypeScript", level: 80, years: 3 },
        { name: "Next.js", level: 80, years: 2 },
        { name: "Tailwind CSS", level: 80, years: 3 },
        { name: "JavaScript", level: 90, years: 5 }
      ]
    },
    {
      name: "Backend Development",
      icon: Database,
      description: "Scalable server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 90, years: 4 },
        { name: "Express.js", level: 90, years: 4 },
        { name: "PostgreSQL", level: 85, years: 3 },
        { name: "MongoDB", level: 85, years: 2 },
        { name: "Socket.IO", level: 75, years: 2 },
        { name: "GraphQL", level: 40, years: 2 },
      ]
    },
    // {
    //   name: "Mobile Development",
    //   icon: Smartphone,
    //   description: "Cross-platform mobile applications",
    //   skills: [
    //     { name: "React Native", level: 85, years: 2 },
    //     { name: "Flutter", level: 70, years: 1 },
    //     { name: "Expo", level: 88, years: 2 },
    //     { name: "iOS (Swift)", level: 65, years: 1 },
    //     { name: "Android (Kotlin)", level: 60, years: 1 }
    //   ]
    // },
    // {
    //   name: "AI & Machine Learning",
    //   icon: Brain,
    //   description: "Intelligent systems and data analysis",
    //   skills: [
    //     { name: "TensorFlow", level: 80, years: 2 },
    //     { name: "PyTorch", level: 75, years: 2 },
    //     { name: "Scikit-learn", level: 85, years: 3 },
    //     { name: "Pandas", level: 90, years: 3 },
    //     { name: "OpenAI API", level: 70, years: 1 }
    //   ]
    // },
    // {
    //   name: "DevOps & Cloud",
    //   icon: Zap,
    //   description: "Infrastructure and deployment automation",
    //   skills: [
    //     { name: "Docker", level: 85, years: 3 },
    //     { name: "AWS", level: 80, years: 2 },
    //     { name: "CI/CD", level: 82, years: 3 },
    //     { name: "Kubernetes", level: 70, years: 1 },
    //     { name: "Vercel", level: 90, years: 3 }
    //   ]
    // }
    {
      name: "DSA & Problem Solving",
      description: "Proficient in solving algorithmic problems using Java",
      skills: [
        { name: "Java", level: 95 },
        { name: "Arrays & Strings", level: 95 },
        { name: "Recursion & Backtracking", level: 80 },
        { name: "HashMaps & Heaps", level: 80 },
        { name: "Trees & Graphs", level: 50 },
        { name: "DP & Memoization", level: 80 },
        { name: "Greedy Algorithms", level: 80 }
      ]
    }
  ];
  const socialProfiles = [
    {
      name: "GitHub",
      username: "@amish2005",
      url: "https://github.com/amish2005",
      icon: Github,
      description: "Showcasing my projects, code experiments, and open-source contributions.",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "LinkedIn",
      username: "amish2005",
      url: "https://www.linkedin.com/in/amish2005/",
      icon: Linkedin,
      description: "Connecting through tech, collaboration, and professional growth.",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "LeetCode",
      username: "amish04",
      url: "https://leetcode.com/u/amish04/",
      icon: Target,
      description: "Solved 200+ problems to strengthen my grasp on data structures and algorithms.",
      color: "from-orange-500 to-yellow-600"
    },
    {
      name: "CodeForces",
      username: "amish04",
      url: "https://codeforces.com/profile/amish04",
      icon: Award,
      description: "Solved 100+ problems while sharpening my competitive programming skills and speed.",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "GeeksforGeeks",
      username: "amishsha8g1c",
      url: "https://www.geeksforgeeks.org/user/amishsha8g1c/",
      icon: Users,
      description: "Solved 100+ problems to deepen my understanding of core CS concepts and problem-solving techniques.",
      color: "from-green-500 to-green-700"
    },
  ];

  const experience = [
    {
      title: "Software Developer Intern",
      company: "Smalsus Infolabs",
      link: "#",
      period: "Dec 2025 - Jan 2026",
      description: "Worked as a Web Developer Intern, contributing to the development of scalable and high-performance web interfaces while gaining exposure to enterprise-level application workflows.",
      technologies: ["Applied advanced React.js (Hooks, Context API, state management) to build responsive UI components.", "Explored SharePoint backends, working with REST APIs and authentication flows.", "Gained exposure to production-level AI integrations in real-world applications."],
    },
    {
      title: "Web Developer Intern",
      company: "Tranova GlobalScapes",
      link: "https://drive.google.com/file/d/1S-rAgiy49fP9a9qK3O4DkU1LZLIlzSjw/view?usp=sharing",
      period: "June 2025 - Present",
      description: "Leading the backend development of the internship project, responsible for architecting and implementing the core infrastructure and main website using Next.js, Node.js, Express.js, and integrating Clerk for seamless authentication and user management.",
      technologies: ["Designed and developed secure authentication flows using Clerk integrated with a custom Node.js and Next.js stack.", "Collaborated closely with the frontend team to enable seamless API consumption and real-time updates.", "Orchestrated server-side rendering with Next.js and Express to optimize performance and SEO."],
    }
  ];

  const hackathonProjects = [
    {
      title: "HackWithMait",
      date: "October 2024",
      category: "GatherNet",
      link: "https://drive.google.com/file/d/1p0-0hSB94BUZlPT0N1-LxcLFD1sYeo2t/view?usp=sharing",
      description: "Developed Gathernet, a local peer-to-peer communication platform enabling real-time interaction between devices within a limited physical range.",
      technologies: ["HTML", "Node.js", "MongoDB", "CSS", "Geolocation API", "geoLib"],
      achievement: "🏆 Round 1 Qualifier",
      impact: "Facilitated nearby peer-to-peer communication over the internet using location-aware networking.",
      prize: "Recognition Certificate"
    },
    // {
    //   title: "EcoTracker",
    //   date: "January 2024",
    //   category: "Environmental Tech",
    //   description: "Built a carbon footprint tracking application with AI-powered recommendations for sustainable living and environmental impact reduction.",
    //   technologies: ["React Native", "Python", "TensorFlow", "Firebase", "OpenAI"],
    //   achievement: "🥈 2nd Place",
    //   impact: "Helped 5,000+ users reduce their carbon footprint by 25%",
    //   prize: "$2,500 Cash Prize"
    // },
    // {
    //   title: "HealthBot AI",
    //   date: "September 2023",
    //   category: "Healthcare Innovation",
    //   description: "Created an AI-powered chatbot for preliminary health diagnosis and symptom checking with integration to local healthcare providers.",
    //   technologies: ["Python", "FastAPI", "React", "OpenAI", "PostgreSQL"],
    //   achievement: "🥇 1st Place",
    //   impact: "Assisted 10,000+ users with health consultations",
    //   prize: "$5,000 Grand Prize"
    // }
  ];

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container-width section-padding">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-2">
              <div className="relative w-full h-90 mx-auto lg:mx-0">
                <img
                  src="/amish1.jpg"
                  alt="Amish - Full Stack Developer"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>

              {/* Location Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-portfolio-text-muted">
                <MapPin className="w-4 h-4 text-portfolio-accent" />
                <span>Delhi, India</span>
              </div>

              {/* Contact Info Grid - Moved Here */}
              <div className="grid grid-cols-1 gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/in/amish2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-portfolio-surface/30 border border-white/10">
                    <Linkedin className="w-4 h-4 text-portfolio-accent" />
                    <div>
                      <p className="text-xs text-portfolio-text-muted">LinkedIn</p>
                      <p className="text-sm font-medium text-portfolio-text">amish2005</p>
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-portfolio-surface/30 border border-white/10">
                  <Phone className="w-4 h-4 text-portfolio-accent" />
                  <div>
                    <p className="text-xs text-portfolio-text-muted">Phone</p>
                    <p className="text-sm font-medium text-portfolio-text">+91 9582489489</p>
                  </div>
                </div>
                <a
                  href="mailto:amishsharma2005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-portfolio-surface/30 border border-white/10">
                    <Mail className="w-4 h-4 text-portfolio-accent" />
                    <div>
                      <p className="text-xs text-portfolio-text-muted">Email</p>
                      <p className="text-sm font-medium text-portfolio-text">amishsharma2005@gmail.com</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Resume Download */}
              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white px-8 py-3"
                >
                  <a href="https://drive.usercontent.google.com/u/0/uc?id=1_GP4kk5J4e5CUK73ne3bCN6w1BgG4hCV&export=download" download className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                  About Me
                </h1>

                <div className="space-y-4 text-lg text-portfolio-text-muted leading-relaxed">
                  <p>
                    I'm a passionate and results-oriented <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with over 2 years of experience building responsive, scalable applications using the MERN stack, Next.js, and modern web technologies. I love bridging the gap between design and functionality — turning ideas into elegant, real-world digital solutions.
                  </p>

                  <p>
                    What started as a fascination with full stack development quickly grew into a deep interest in backend architecture, database modeling, and the evolving landscape of AI & Machine Learning. I don’t just enjoy building intuitive user interfaces — I’m equally excited by the infrastructure and intelligence that power them.
                  </p>

                  <p>
                    Beyond development, I actively sharpen my problem-solving skills on LeetCode and Codeforces, and continuously deepen my understanding of system design and scalable architecture to engineer robust solutions.
                  </p>

                  <p>
                    I'm also a strong believer in continuous learning and collaboration. Whether it's contributing to open-source projects, mentoring peers, or participating in tech communities, I find immense value in sharing knowledge and growing together. I take pride in writing clean, maintainable code and am always exploring better ways to solve real-world problems — not just for the present, but with future scalability in mind.
                  </p>

                  <p>
                    When I'm not immersed in code, you'll find me enjoying a game of cricket, experimenting with new technologies, or working on side projects that combine creativity with code. Whether it’s through clean code, thoughtful architecture, or creative expression, I strive to build experiences that make an impact.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Professional Profiles Section */}
      <section className="py-16 bg-portfolio-surface/30">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Profiles</span>
            </h2>
            <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
              Connect with me across various platforms where I share my work and insights
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly gap-6">

            {socialProfiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <Card
                  key={index}
                  className="w-[350px] group bg-portfolio-surface/50 hover:bg-portfolio-surface/80 transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${profile.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-portfolio-text">{profile.name}</h3>
                        <p className="text-sm text-portfolio-text-muted">{profile.username}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors" />
                    </div>
                    <p className="text-sm text-portfolio-text-muted mb-4">{profile.description}</p>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full border-portfolio-accent/30 text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                    >
                      <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        Visit Profile
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
              My journey through various roles and technologies
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-[1.02]"
              >
                <Card
                  key={index}
                  className="bg-portfolio-surface/50 hover:bg-portfolio-surface/80 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-portfolio-text mb-1">
                          {job.title}
                        </h3>
                        <p className="text-portfolio-accent font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-portfolio-text-muted mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <p className="text-portfolio-text-muted mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block break-words px-3 py-1 sm:px-4 sm:py-1.5 bg-portfolio-accent/10 text-portfolio-accent text-sm sm:text-base rounded-full text-center"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
              Comprehensive skill set across modern development technologies with years of hands-on experience
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card
                  key={categoryIndex}
                  className="w-[320px] bg-slate-800/80 border border-slate-700/50 hover:bg-slate-800/90 transition-all duration-200 overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {category.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => {
                        // Define skill-specific colors and icons
                        const getSkillColor = (skillName: string) => {
                          const skillColors: { [key: string]: string } = {
                            'React': 'bg-purple-500',
                            'JavaScript': 'bg-orange-500',
                            'TypeScript': 'bg-blue-500',
                            'Tailwind CSS': 'bg-pink-400',
                            'Vue.js': 'bg-green-500',
                            'Next.js': 'bg-gray-800',
                            'Node.js': 'bg-green-600',
                            'Python': 'bg-yellow-500',
                            'Express.js': 'bg-gray-700',
                            'PostgreSQL': 'bg-blue-600',
                            'MongoDB': 'bg-green-700',
                            'FastAPI': 'bg-teal-500',
                            'React Native': 'bg-blue-400',
                            'Flutter': 'bg-blue-400',
                            'Expo': 'bg-indigo-600',
                            'iOS (Swift)': 'bg-gray-600',
                            'Android (Kotlin)': 'bg-orange-600',
                            'TensorFlow': 'bg-orange-500',
                            'PyTorch': 'bg-red-500',
                            'Scikit-learn': 'bg-blue-500',
                            'Pandas': 'bg-purple-600',
                            'OpenAI API': 'bg-green-500',
                            'Docker': 'bg-blue-500',
                            'AWS': 'bg-orange-400',
                            'CI/CD': 'bg-gray-600',
                            'Kubernetes': 'bg-blue-600',
                            'Vercel': 'bg-black'
                          };
                          return skillColors[skillName] || 'bg-gray-500';
                        };

                        const getSkillIcon = (skillName: string) => {
                          // Return appropriate icons or use a default
                          return "●"; // Simple dot for now, can be enhanced with actual icons
                        };

                        return (
                          <div
                            key={skillIndex}
                            className="group"
                            onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded ${getSkillColor(skill.name)} flex items-center justify-center text-white text-xs font-bold`}>
                                  {getSkillIcon(skill.name)}
                                </div>
                                <span className="text-sm font-medium text-white">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-sm font-semibold text-slate-300">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="relative">
                              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-cyan-400 rounded-full transition-all duration-500 ease-out"
                                  style={{
                                    width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : `${skill.level}%`
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hackathon Achievements Section */}
      <section className="py-16 bg-portfolio-surface/30">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🏆 <span className="gradient-text">Hackathon Achievements</span>
            </h2>
            <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
              Competitive programming and innovation challenges where I've made an impact
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly gap-6">
            {hackathonProjects.map((hackathon, index) => (
              <a
                href={hackathon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-[1.02]"
              >
              <Card
                key={index}
                className="w-full sm:w-[90%] md:w-[400px] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-portfolio-accent/30 transition-all duration-200 overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-cyan-400">
                      {hackathon.title}
                    </h3>
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {hackathon.achievement}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      <span>{hackathon.category}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {hackathon.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="p-6 border-b border-slate-700/50">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact & Prize */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-purple-400">Impact</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {hackathon.impact}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-semibold text-amber-400">Prize</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {hackathon.prize}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
