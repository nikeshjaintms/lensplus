import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export function TypewriterText({
  text,
  speed = 25,
  delay = 150,
  className = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Reset state when component mounts or text changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedText("");

    setIsTyping(true);

    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;

    // Add a slight delay before typing starts to let the container expand
    const startDelay = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.substring(0, currentIndex));
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <span className={`relative ${className}`}>
      {displayedText.split("\n").map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
      <span
        className={`inline-block w-[2px] h-[1.1em] bg-[#00AFC2] ml-[2px] align-text-bottom transition-opacity duration-200 ${
          isTyping ? "opacity-100 animate-pulse" : "opacity-0 hidden"
        }`}
        style={isTyping ? { animationDuration: "0.8s" } : undefined}
      />
    </span>
  );
}
