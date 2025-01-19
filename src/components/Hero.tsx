import { motion } from "framer-motion";
import { GradientBackground } from "./GradientBackground";

export const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
      <GradientBackground>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-mono font-bold mb-4 text-black relative z-10"
        >
          John Doe
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