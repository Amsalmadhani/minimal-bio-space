import { motion } from "framer-motion";

const highlights = [
  {
    year: "2023",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    description: "Leading the frontend development team"
  },
  {
    year: "2021",
    title: "Software Engineer",
    company: "Startup Inc",
    description: "Built core product features"
  },
  {
    year: "2019",
    title: "Junior Developer",
    company: "Digital Agency",
    description: "Worked on client projects"
  }
];

export const Career = () => {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-mono font-bold mb-8"
      >
        Career Highlights
      </motion.h2>
      <div className="space-y-8">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-muted p-6 rounded-lg hover:border-primary/50 transition-colors"
          >
            <div className="font-mono text-sm text-muted-foreground mb-2">
              {highlight.year}
            </div>
            <h3 className="text-lg font-semibold mb-1">{highlight.title}</h3>
            <div className="text-muted-foreground mb-2">{highlight.company}</div>
            <p className="text-sm text-muted-foreground">{highlight.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};