import { motion } from "framer-motion";
import { GradientBackground } from "./GradientBackground";
import { useEffect, useState } from "react";

export const Hero = () => {
  const name = "Amsal Madhani";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < name.length) {
        const timeout = setTimeout(() => {
          setDisplayText(name.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText("");
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isTyping]);

  useEffect(() => {
    if (displayText === "") {
      const timeout = setTimeout(() => {
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayText]);

  return (
    <section className="min-h-[40vh] flex flex-col justify-center items-center text-center px-4">
      <GradientBackground>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-mono font-bold mb-4 text-black relative z-10"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-1 w-2 h-2 bg-white rounded-full align-middle"
          />
        </motion.h1>
      </GradientBackground>
    </section>
  );
};