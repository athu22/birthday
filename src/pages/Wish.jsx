import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";


export default function Wish() {
  const navigate = useNavigate();

  // 🌙 Auto move to Memories page
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/memories");
    }, 6500); // 6.5 seconds (perfect reading time)

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.glow} />

     

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={styles.card}
      >
        <AnimatedText text="Happiest Birthday Sakshi 🎂" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={styles.message}
        >
          May your life be as graceful, warm,
          <br />
          and beautiful as your smile ✨
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
          style={styles.heart}
        >
          🤍
        </motion.div>

        {/* Soft hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 4 }}
          style={styles.hint}
        >
          A few words, written just for you…
        </motion.p>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fdfbfb,#f5e6e8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "relative",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    width: 300,
    height: 300,
    background: "radial-gradient(circle,#ffffffaa,transparent)",
    filter: "blur(80px)",
    top: "15%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  card: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: 30,
    padding: "50px 30px",
    maxWidth: 380,
    width: "100%",
    textAlign: "center",
    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
    zIndex: 1,
  },
  message: {
    marginTop: 30,
    fontSize: 15,
    color: "#444",
    lineHeight: 1.7,
  },
  heart: {
    marginTop: 30,
    fontSize: 32,
  },
  hint: {
    marginTop: 20,
    fontSize: 13,
    color: "#555",
    fontStyle: "italic",
  },
};
