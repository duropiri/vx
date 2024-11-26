import { motion } from "framer-motion";

export const GradientText = ({ children }) => (
  <motion.span
    className="text-goldenbrown font-bold"
    style={{
      background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
      backgroundSize: "200% 100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {children}
  </motion.span>
);
