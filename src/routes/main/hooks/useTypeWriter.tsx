import { useEffect, useState } from "react";
const SPEED = 100;

export interface TypeWriterOptions {
  text: string;
  speed?: number;
}

export const useTypeWriter = ({ text, speed = SPEED }: TypeWriterOptions) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let letterIndex = 0;

    const interval = setInterval(() => {
      if (letterIndex < text.length) {
        setDisplayedText(text.substring(0, letterIndex + 1));
        letterIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayedText };
};
