import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, User, Briefcase, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: Code2 },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-portfolio-surface/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-width section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              <Code2 className="w-8 h-8 text-portfolio-accent" />
              <span>Amish</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-portfolio-accent bg-portfolio-accent/10"
                        : "text-portfolio-text-muted hover:text-portfolio-text hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <Button
                asChild
                className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white"
              >
                <a
                  href="https://drive.usercontent.google.com/u/0/uc?id=1rwXiD39FQpCt-fzlMjMVsKz9qHtc0H-d&export=download"
                  download
                  className="flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-portfolio-text" />
              ) : (
                <Menu className="w-6 h-6 text-portfolio-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 bg-portfolio-surface/95 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-portfolio-accent bg-portfolio-accent/10"
                        : "text-portfolio-text-muted hover:text-portfolio-text hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <Button
                asChild
                className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white mt-4"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16" />
    </>
  );
}
