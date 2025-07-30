import { useState } from "react";
import {
  Github,
  ExternalLink,
  Search,
  Filter,
  Code2,
  Brain,
  Smartphone,
  Globe,
  Database,
  Code,
  Laptop
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { projects } from "@shared/projects";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Projects", icon: Code2 },
    { id: "ml", label: "Machine Learning", icon: Brain },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "fullstack", label: "Full Stack", icon: Database }
  ];


  const filteredProjects = projects.filter(project => {
    const matchesCategory =
      selectedCategory === "all" ||
      (Array.isArray(project.category) &&
        (project.category as string[]).includes(selectedCategory));

    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });



  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />

      {/* Hero Section */}
      {/* <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-portfolio-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-portfolio-gradient-to/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-width section-padding relative z-10">
          <div className="text-center mb-16">
            <p className="text-portfolio-accent font-medium tracking-wider uppercase text-sm mb-4">
              My Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in full-stack development, 
              machine learning, and mobile applications. Each project represents a unique 
              challenge and innovative solution.
            </p>
          </div>
        </div>
      </section> */}



      {/* All Projects Section */}
      <section className="py-16 bg-portfolio-surface/30">
        <div className="container-width section-padding">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              All <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-portfolio-text-muted mb-8">
              Explore my complete portfolio of projects across different technologies and domains
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-portfolio-text-muted" />
                <Input
                  placeholder="Search projects by name, description, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-portfolio-bg/50 border-white/10 text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-accent"
                />
              </div>
              <div className="flex items-center gap-2 text-portfolio-text-muted">
                <Filter className="w-5 h-5" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedCategory === category.id
                        ? "bg-portfolio-accent text-white"
                        : "bg-portfolio-surface/50 text-portfolio-text-muted hover:bg-portfolio-surface/80 hover:text-portfolio-text"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-wrap justify-evenly gap-6">

            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="w-[375px] group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-portfolio-accent/30 transition-all duration-200 overflow-hidden"
              >
                {/* Header with badges */}
                <div className="p-4 flex justify-between items-start">
                  {project.featured && (
                    <div className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Featured
                    </div>
                  )}
                  <a href={project.githubUrl} target="_blank"
                    rel="noopener noreferrer"
                    className="block">
                    <button className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100">
                      <Github className="w-4 h-4 text-slate-300" />
                    </button>
                  </a>
                </div>

                {/* Project Icon/Image Area */}
                <div className="px-4 pb-6">
                  <div className="w-20 h-16 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Laptop className="w-8 h-8 text-white" />
                  </div>
                </div>
                

                {/* Content */}
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex gap-3 mb-6">
                    {[Database, Globe, Smartphone, Brain].slice(0, 4).map((Icon, iconIndex) => (
                      <div key={iconIndex} className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-md border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                    {(project.info1) && (
                      <div className="text-center">
                        <div className="text-md font-bold text-cyan-400">{project.info1}</div>
                        <div className="text-xs text-slate-400">{project.head1}</div>
                      </div>
                    )}

                    {(project.info2) && (
                      <div className="text-center">
                        <div className="text-md font-bold text-cyan-400">{project.info2}</div>
                        <div className="text-xs text-slate-400">{project.head2}</div>
                      </div>
                    )}
                    {(project.info3) && (
                      <div className="text-center">
                        <div className="font-bold text-cyan-400 text-md">{project.info3}</div>
                        <div className="text-xs text-slate-400">{project.head3}</div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-portfolio-surface/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-portfolio-text-muted" />
              </div>
              <h3 className="text-xl font-semibold text-portfolio-text mb-2">
                No projects found
              </h3>
              <p className="text-portfolio-text-muted">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>
      </section>


    </div>
  );
}
