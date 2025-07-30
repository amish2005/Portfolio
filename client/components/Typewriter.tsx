import { useTypewriter } from '@/hooks/use-typewriter';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

export default function Typewriter({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '',
  showCursor = true 
}: TypewriterProps) {
  const { displayText, isComplete } = useTypewriter({ text, speed, delay });

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <span className="animate-pulse text-portfolio-accent">|</span>
      )}
    </span>
  );
}
