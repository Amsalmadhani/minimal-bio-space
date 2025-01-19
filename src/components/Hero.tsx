import { motion } from "framer-motion";
import { GradientBackground } from "./GradientBackground";
import { useEffect, useState } from "react";

export const Hero = () => {
  const name = "John Doe";
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
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
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
            className="inline-block ml-1"
          >
            |
          </motion.span>
        </motion.h1>
      </GradientBackground>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-muted-foreground font-mono"
      >
        Software Engineer & Creative Technologist
      </motion.p>
    </section>
  );
};