import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineBox from "@/components/ValentineBox";
import VideoPopup from "@/components/VideoPopup";

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-blush)" }}
    >
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center w-full py-8">
        <ValentineBox onYesClick={() => setShowVideo(true)} />
      </main>
      
      {/* Video popup */}
      {showVideo && (
        <VideoPopup onClose={() => setShowVideo(false)} />
      )}
    </div>
  );
};

export default Index;
