import { useState, useCallback, useRef } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValentineBoxProps {
  onYesClick: () => void;
}

const ValentineBox = ({ onYesClick }: ValentineBoxProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    if (!boxRef.current) return;
    
    const box = boxRef.current.getBoundingClientRect();
    const buttonWidth = 100;
    const buttonHeight = 44;
    const padding = 20;
    
    // Calculate random position within the box
    const maxX = box.width - buttonWidth - padding * 2;
    const maxY = 120; // Keep it within reasonable vertical range
    
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: randomX, y: randomY });
    setNoAttempts(prev => prev + 1);
  }, []);

  const getNoButtonText = () => {
    const texts = ["No", "Are you sure?", "Really?", "Think again!", "Please?", "Pretty please?", "💔"];
    return texts[Math.min(noAttempts, texts.length - 1)];
  };

  return (
    <div
      ref={boxRef}
      className="valentine-box w-full max-w-md md:max-w-lg p-8 md:p-12 mx-4 relative overflow-hidden"
    >
      {/* Decorative sparkles */}
      <Sparkles className="absolute top-4 right-4 text-accent animate-sparkle" size={20} />
      <Sparkles className="absolute bottom-4 left-4 text-accent animate-sparkle" style={{ animationDelay: "0.5s" }} size={16} />
      
      {/* Heart decoration */}
      <div className="flex justify-center mb-6">
        <Heart 
          className="text-primary fill-primary animate-pulse-heart" 
          size={48} 
        />
      </div>
      
      {/* Question */}
      <h1 className="text-2xl md:text-4xl font-playfair text-center text-foreground mb-2">
        Will you be my
      </h1>
      <h2 className="text-3xl md:text-5xl font-playfair font-bold text-center text-primary mb-8">
        Valentine?
      </h2>
      
      {/* Cute message */}
      <p className="text-center text-muted-foreground mb-8 font-quicksand">
        I've been waiting to ask you this... 💕
      </p>
      
      {/* Buttons container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative min-h-[120px]">
        <Button
          onClick={onYesClick}
          className="btn-yes px-8 py-6 text-lg rounded-full min-w-[120px] z-10"
        >
          Yes! 💖
        </Button>
        
        <Button
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton}
          className="btn-no px-8 py-6 text-lg rounded-full min-w-[120px] transition-transform duration-200"
          style={{
            transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
          }}
        >
          {getNoButtonText()}
        </Button>
      </div>
      
      {noAttempts > 2 && (
        <p className="text-center text-muted-foreground text-sm mt-4 animate-pulse">
          There's only one right answer here... 😉
        </p>
      )}
    </div>
  );
};

export default ValentineBox;
