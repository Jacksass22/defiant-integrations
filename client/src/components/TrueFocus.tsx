import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex ?? 0);
    }
  };

  return (
    <div 
      className="relative flex gap-6 justify-center items-center flex-wrap" 
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className={`relative text-5xl font-black cursor-pointer transition-all duration-300 px-2 ${
              manualMode ? "manual" : ""
            } ${isActive && !manualMode ? "active" : ""}`}
            style={{
              filter:
                manualMode
                  ? isActive
                    ? `blur(0px)`
                    : `blur(${blurAmount}px)`
                  : isActive
                    ? `blur(0px)`
                    : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-content border-none"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
      >
        <span 
          className="absolute w-4 h-4 rounded-sm border-l-[3px] border-t-[3px] -top-2.5 -left-2.5"
          style={{ 
            borderColor: borderColor,
            filter: `drop-shadow(0px 0px 4px ${borderColor})`
          }}
        />
        <span 
          className="absolute w-4 h-4 rounded-sm border-r-[3px] border-t-[3px] -top-2.5 -right-2.5"
          style={{ 
            borderColor: borderColor,
            filter: `drop-shadow(0px 0px 4px ${borderColor})`
          }}
        />
        <span 
          className="absolute w-4 h-4 rounded-sm border-l-[3px] border-b-[3px] -bottom-2.5 -left-2.5"
          style={{ 
            borderColor: borderColor,
            filter: `drop-shadow(0px 0px 4px ${borderColor})`
          }}
        />
        <span 
          className="absolute w-4 h-4 rounded-sm border-r-[3px] border-b-[3px] -bottom-2.5 -right-2.5"
          style={{ 
            borderColor: borderColor,
            filter: `drop-shadow(0px 0px 4px ${borderColor})`
          }}
        />
      </motion.div>
    </div>
  );
};

export default TrueFocus;