import { useEffect, useState } from "react";

interface AsciiTextProps {
  text: string;
  className?: string;
}

const AsciiText = ({ text, className = "" }: AsciiTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-[1em] bg-white ml-1 animate-pulse" />
      )}
    </span>
  );
};

export default AsciiText;
