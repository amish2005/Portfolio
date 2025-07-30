import { Link } from "react-router-dom";
import { Construction, ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

interface PlaceholderPageProps {
  title: string;
  description: string;
  suggestedContent?: string[];
}

export default function PlaceholderPage({ 
  title, 
  description, 
  suggestedContent = [] 
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />
      
      <section className="pt-20 pb-16 min-h-screen flex items-center justify-center">
        <div className="container-width section-padding">
          <Card className="bg-portfolio-surface/50 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-portfolio-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Construction className="w-12 h-12 text-portfolio-accent" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">{title}</span> Coming Soon
              </h1>
              
              <p className="text-lg text-portfolio-text-muted mb-8 leading-relaxed">
                {description}
              </p>

              {suggestedContent.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-portfolio-text mb-4">
                    This page will include:
                  </h3>
                  <ul className="text-portfolio-text-muted space-y-2">
                    {suggestedContent.map((item, index) => (
                      <li key={index} className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white"
                >
                  <Link to="/" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Request This Page
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-portfolio-text-muted mt-8">
                Want to see this page implemented? Let me know what content would be most valuable to you!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
