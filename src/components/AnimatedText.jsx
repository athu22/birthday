import { motion } from "framer-motion";

export default function AnimatedText({ text }) {
  return (
    <motion.h1
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.h1>
  );
}
