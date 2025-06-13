import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Scissors, Award, Building, Users } from "lucide-react";

interface TrustStatItem {
  text: string;
  value: string;
  icon: React.ReactNode;
}

const trustStats: TrustStatItem[] = [
  {
    value: "5000+",
    text: "Haircuts Completed",
    icon: <Scissors className="w-4 h-4 text-sage" />
  },
  {
    value: "10+",
    text: "Years of Experience",
    icon: <Building className="w-4 h-4 text-sage" />
  },
  {
    value: "5+",
    text: "Styling Specialists",
    icon: <Award className="w-4 h-4 text-sage" />
  },
  {
    value: "100%",
    text: "Client Satisfaction",
    icon: <Users className="w-4 h-4 text-sage" />
  }
];

// Define the component with a completely explicit export
export const TrustBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
  
  window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Create a large array of repeated items to ensure continuous scrolling
  const extendedTrustStats = [...trustStats, ...trustStats, ...trustStats, ...trustStats, ...trustStats, ...trustStats];
  
  return (
    <div className="py-6 overflow-hidden bg-white border-t border-sage/10" ref={containerRef}>
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Animation that moves from right to left */}
        <motion.div
          className="flex items-center gap-10 py-1"
          initial={{ x: 0 }}
          animate={{
            x: [0, -2000]  // Use a large negative value to ensure long movement
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            }
          }}
          style={{
            position: "relative",
            width: "max-content"
          }}
        >
          {extendedTrustStats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center px-5 py-2 rounded-full border border-transparent shadow-sm min-w-max flex-shrink-0"
              style={{
                background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, #94a3b8, #f9a8d4) border-box"
              }}
            >
              {stat.icon}
              <span className="ml-2 font-bold text-gradient">{stat.value}</span>
              <span className="ml-2 text-xs text-rich-black whitespace-nowrap">{stat.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Add default export
export default TrustBanner;