import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Instagram,
  ExternalLink,
  ChevronRight,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Typewriter from "@/components/Typewriter";
import { projects } from "@shared/projects";

export default function Index() {
  const featuredProjects = projects.filter(project => project.featured);

  // Skills are now controlled by user interaction only

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-portfolio-bg pt-10 pb-20">

        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-portfolio-accent/10 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-portfolio-gradient-to/10 rounded-full blur-2xl sm:blur-3xl" />
        </div>

        <div className="container-width section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">


                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <Typewriter
                    text="Hi, I'm "
                    speed={80}
                    delay={500}
                    showCursor={false}
                  />
                  <Typewriter
                    text="Amish"
                    speed={120}
                    delay={1200}
                    className="gradient-text"
                    showCursor={true}
                  />
                </h1>
                <div className="relative inline-block">
                  <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl xl:text-4xl leading-tight">
                    <span className="text-white">Full Stack</span>
                    <span
                      className="block sm:inline ml-0 sm:ml-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      Developer &
                    </span>
                    <span
                      className="block sm:inline ml-0 sm:ml-2 bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent"
                    >
                      ML Enthusiast
                    </span>
                  </h1>
                </div>


                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-portfolio-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I build efficient and user-centric web applications using modern full-stack technologies. Alongside web development, I'm deeply passionate about data structures, algorithms, and competitive programming, constantly sharpening my problem-solving skills.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                {[
                  { icon: Github, href: "https://github.com/amish2005", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/amish2005/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:amishsharma2005@gmail.com", label: "Instagram" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-effect flex items-center justify-center hover:bg-portfolio-accent/20 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors" />
                    </a>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-portfolio-gradient-from to-portfolio-gradient-to hover:from-portfolio-gradient-from/90 hover:to-portfolio-gradient-to/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
                >
                  <Link to="/contact">
                    Get In Touch
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 glass-effect w-full sm:w-auto"
                >
                  <Link to="/projects">
                    View Projects
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-80 lg:h-80 mx-auto">
                <img
                  src="/amish1.jpg"
                  alt="Amish - Full Stack Developer"
                  className="w-full h-full rounded-2xl object-cover bg-portfolio-surface shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-portfolio-surface/50">
        <div className="container-width section-padding">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-portfolio-text-muted max-w-2xl mx-auto px-4">
              A showcase of my recent work spanning development and machine learning projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-portfolio-surface/50 hover:bg-portfolio-surface/80 transition-all duration-200 overflow-hidden"
              >
                <div className="aspect-video bg-portfolio-bg/50 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {project.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${cat === "ml"
                            ? "bg-pink-500/20 text-pink-400"
                            : "bg-blue-500/20 text-blue-400"
                          }`}
                      >
                        {cat === "ml" ? "ML Project" : "Dev Project"}
                      </span>
                    ))}
                  </div>
                </div>


                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-text-muted mb-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/5 text-portfolio-text-muted text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white w-full sm:w-auto"
                    >
                      <a href={project.liveUrl} className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-portfolio-accent/30 text-portfolio-text-muted hover:bg-portfolio-accent/10 w-full sm:w-auto"
                    >
                      <a href={project.githubUrl} className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 sm:px-8 w-full sm:w-auto"
            >
              <Link to="/projects">
                View All Projects
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-portfolio-bg">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-portfolio-accent/5 rounded-full blur-2xl sm:blur-3xl" />
        </div>

        <div className="container-width section-padding relative z-10">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span> Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-portfolio-text-muted mb-6 sm:mb-8">
              Have a project in mind? I'd love to help bring your ideas to life with cutting-edge technology and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
              <Button
                asChild
                size="lg"
                className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white px-6 sm:px-8 w-full sm:w-auto"
              >
                <Link to="/contact">
                  Start a Project
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 sm:px-8 w-full sm:w-auto"
              >
                <Link to="/about">
                  Learn More About Me
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
