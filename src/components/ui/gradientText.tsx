import { motion } from "framer-motion";

export const GradientText = ({ children }) => (
  <motion.span
    className="text-goldenbrown gold-text font-bold"
  >
    {children}
  </motion.span>
);
