import { Heart, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import vid_v from "../assets/vid_v1.mp4"

interface VideoPopupProps {
  onClose: () => void;
}

const VideoPopup = ({ onClose }: VideoPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      
      {/* Overlay */}
      <div 
        className="video-overlay absolute inset-0"
        onClick={onClose}
      />
      
      

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl animate-scale-in">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute -top-12 right-0 text-primary-foreground hover:text-primary hover:bg-card rounded-full"
        >
          <X size={24} />
        </Button>
        
        {/* Message */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="text-accent animate-sparkle" size={24} />
            <Heart className="text-primary fill-primary animate-pulse-heart" size={32} />
            <Sparkles className="text-accent animate-sparkle" size={24} />
          </div>
          <h2 className="text-2xl md:text-4xl font-playfair font-bold text-card mb-2">
            I knew you would click Yes!
          </h2>
          <p className="text-soft-pink font-quicksand text-lg">
            You just made my heart skip a beat 💕
          </p>
        </div>
        
        {/* Video container */}
        <div className="valentine-box p-2 md:p-4 rounded-2xl">
          <div className="relative w-full aspect-video bg-secondary rounded-xl overflow-hidden">
            {/* Video */}
            
            
            {/* Placeholder overlay - remove when adding real video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/80">
              <Heart className="text-primary fill-primary mb-4 animate-pulse-heart" size={64} />
              <p className="text-muted-foreground font-quicksand text-center px-4">
                <video
              className="w-full h-full object-cover "
              controls
              poster=""
            >
              {/* Add your video source here */}
              <source src={vid_v} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              </p>
              <p className="text-muted-foreground/70 text-sm mt-2">
                v_vid
              </p>
            </div>
          </div>
        </div>
        
        {/* Extra love message */}
        <p className="text-center text-soft-pink mt-6 font-quicksand animate-bounce">
          You + Me = Forever 💖
        </p>
      </div>
    </div>
  );
};

export default VideoPopup;
