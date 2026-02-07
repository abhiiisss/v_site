import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = [
    { size: 24, left: "5%", top: "10%", delay: "0s", duration: "6s" },
    { size: 16, left: "15%", top: "70%", delay: "1s", duration: "7s" },
    { size: 32, left: "85%", top: "15%", delay: "0.5s", duration: "5s" },
    { size: 20, left: "90%", top: "60%", delay: "2s", duration: "8s" },
    { size: 28, left: "10%", top: "40%", delay: "1.5s", duration: "6.5s" },
    { size: 18, left: "75%", top: "80%", delay: "3s", duration: "7s" },
    { size: 22, left: "50%", top: "5%", delay: "0.8s", duration: "5.5s" },
    { size: 14, left: "30%", top: "85%", delay: "2.5s", duration: "6s" },
    { size: 26, left: "95%", top: "35%", delay: "1.2s", duration: "7.5s" },
    { size: 20, left: "3%", top: "55%", delay: "0.3s", duration: "6s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <Heart
          key={index}
          size={heart.size}
          className="floating-heart fill-primary"
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
