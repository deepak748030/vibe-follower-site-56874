import { useEffect, useState } from "react";

const FallingStars = () => {
  const [stars, setStars] = useState<Array<{ 
    id: number; 
    left: string; 
    delay: string; 
    duration: string;
    size: number;
    drift: string;
  }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 80 }, (_, i) => {
      const size = 1 + Math.random() * 3; // Random size between 1-4px
      const drift = (Math.random() - 0.5) * 150; // Random drift between -75px and 75px
      
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 12}s`, // Slower, more varied speeds
        size,
        drift: `${drift}px`,
      };
    });
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--drift': star.drift,
          } as React.CSSProperties & { '--drift': string }}
        />
      ))}
    </div>
  );
};

export default FallingStars;
