import { motion } from "framer-motion";
import { Code2, Brain, Palette, Terminal } from "lucide-react";

const obsessions = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Exploring new paradigms and patterns"
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine learning and neural networks"
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Creating cohesive user experiences"
  },
  {
    icon: Terminal,
    title: "Developer Tools",
    description: "Building better workflows"
  }
];

export const Obsessions = () => {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-mono font-bold mb-8"
      >
        Obsessions
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {obsessions.map((obsession, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-muted p-6 rounded-lg hover:border-primary/50 transition-colors"
          >
            <obsession.icon className="w-6 h-6 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{obsession.title}</h3>
            <p className="text-sm text-muted-foreground">{obsession.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};