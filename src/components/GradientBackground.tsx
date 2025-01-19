import { motion } from "framer-motion";
import { useRef, useState } from "react";

export const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  const constraintsRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <motion.div
      ref={constraintsRef}
      className="relative w-full h-[40vh] overflow-hidden rounded-2xl mb-8 flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)",
            "linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)",
            "linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Floating blobs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-yellow-500/30 blur-3xl"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          delay: 0.1,
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-red-500/30 blur-3xl"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          delay: 0.2,
        }}
      />
      {children}
    </motion.div>
  );
};