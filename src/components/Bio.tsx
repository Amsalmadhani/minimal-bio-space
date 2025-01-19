import { motion } from "framer-motion";

export const Bio = () => {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-mono font-bold mb-8"
      >
        Bio
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg leading-relaxed text-muted-foreground"
      >
        I'm a software engineer with a passion for building beautiful, functional, and accessible web applications. Currently focused on exploring the intersection of artificial intelligence and human-computer interaction.
      </motion.p>
    </section>
  );
};