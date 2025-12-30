import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [displayText, setDisplayText] = useState("");
  const targetText = "404 - SYSTEM ERROR: PAGE_NOT_FOUND";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(targetText.slice(0, index));
      index++;
      if (index > targetText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio-bg relative overflow-hidden font-mono text-center px-4">
      {/* Background Matrix-like effect (simplified) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-portfolio-accent to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-portfolio-accent to-transparent delay-75" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-portfolio-accent to-transparent delay-150" />
      </div>

      <div className="relative z-10 space-y-8 max-w-lg mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black text-portfolio-accent tracking-tighter opacity-80 glitch-effect">
            404
          </h1>
          <div className="h-8">
            <p className="text-lg md:text-xl text-green-400 font-bold bg-black/30 inline-block px-4 py-1 rounded border border-green-500/30">
              {displayText}
              <span className="animate-pulse">_</span>
            </p>
          </div>
          <p className="text-portfolio-text-muted">
            The requested route <span className="text-portfolio-text italic">"{location.pathname}"</span> does not exist in this sector.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Return to Base
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
