import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  FileText,
  CheckCircle2,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  ChevronRight,
  Code2
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "amishsharma2005@gmail.com",
      link: "mailto:amishsharma2005@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9582489489",
      link: "tel:+91 9582489489",
      description: "Call for urgent matters"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Delhi, India",
      link: "#",
      description: "Available for local meetings"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/amish2005",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/amish2005/",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/amishsharma04/",
      color: "hover:text-sky-400",
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:amishsharma2005@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-portfolio-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-gradient-to/10 rounded-full blur-3xl" />
        </div>

        <div className="container-width section-padding relative z-10">
          <div className="text-center mb-16">
            <p className="text-portfolio-accent font-medium tracking-wider uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat about technology? I'd love to hear from you.
              Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={index}
                      className="group bg-portfolio-surface/50 hover:bg-portfolio-surface/80 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-portfolio-accent/20 flex items-center justify-center group-hover:bg-portfolio-accent/30 transition-colors">
                            <Icon className="w-6 h-6 text-portfolio-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-portfolio-text mb-1">
                              {info.title}
                            </h3>
                            <p className="text-portfolio-text-muted text-sm mb-2">
                              {info.description}
                            </p>
                            {info.link.startsWith('#') ? (
                              <p className="text-portfolio-accent font-medium">{info.value}</p>
                            ) : (
                              <a
                                href={info.link}
                                className="text-portfolio-accent font-medium hover:text-portfolio-accent-hover transition-colors"
                              >
                                {info.value}
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-green-400">
                    Available for Work
                  </h3>
                </div>
                <p className="text-slate-300">
                  I'm currently accepting new freelance projects and
                  collaborations. Let's discuss how we can work together to
                  bring your ideas to life.
                </p>
              </motion.div>

              <div className="justify-center items-center text-center mt-8">
                <h3 className="text-xl font-semibold text-portfolio-text mb-4">
                  Connect on Social
                </h3>
                <div className="justify-center items-center flex gap-4 space-x-4 ">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className={`w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 hover:border-slate-600 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>


            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-portfolio-surface/50">
                <CardContent className="p-12">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-portfolio-text mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-portfolio-text-muted">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-portfolio-text flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-16 bg-portfolio-bg/50 border-white/10 text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-accent"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-portfolio-text flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-16 bg-portfolio-bg/50 border-white/10 text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-accent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-portfolio-text flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="h-16 bg-portfolio-bg/50 border-white/10 text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-accent"
                          placeholder="What would you like to discuss?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-portfolio-text flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={14}
                          className="bg-portfolio-bg/50 border-white/10 text-portfolio-text placeholder-portfolio-text-muted focus:border-portfolio-accent resize-none"
                          placeholder="Tell me about your project, ideas, or any questions you have..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-portfolio-accent hover:bg-portfolio-accent-hover text-white py-6 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-portfolio-text-muted text-center">
                        By sending this message, you agree to be contacted regarding your inquiry.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>


            </div>

          </div>

        </div>

      </section>

      {/* Connect Section */}
      <section className="py-16 bg-portfolio-surface/30">

      </section>
    </div>
  );
}
