import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
       
      {/* Soft background glow */}
      <div style={styles.glow} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={styles.card}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={styles.title}
        >
          A Special Surprise ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={styles.subtitle}
        >
          Something heartfelt,  
          created with love… just for you 🤍
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
onClick={() => {
  window.dispatchEvent(new Event("start-music"));
  navigate("/countdown");
}}


          style={styles.button}
        >
          Open 🎁
        </motion.button>
      </motion.div>

      {/* Bottom hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.2 }}
        style={styles.hint}
      >
        Take a moment… and tap when you’re ready
      </motion.p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fdfbfb,#f5e6e8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    position: "relative",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    width: 320,
    height: 320,
    background: "radial-gradient(circle,#ffffffaa,transparent)",
    filter: "blur(90px)",
    top: "18%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  card: {
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(10px)",
    borderRadius: 32,
    padding: "55px 35px",
    maxWidth: 380,
    width: "100%",
    boxShadow: "0 30px 70px rgba(0,0,0,0.15)",
    zIndex: 1,
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 34,
    color: "#2b2b2b",
  },
  subtitle: {
    marginTop: 18,
    fontSize: 15,
    color: "#555",
    lineHeight: 1.7,
  },
  button: {
    marginTop: 45,
    padding: "14px 40px",
    borderRadius: 40,
    border: "none",
    background: "#2b2b2b",
    color: "#fff",
    fontSize: 15,
    cursor: "pointer",
  },
  hint: {
    marginTop: 30,
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
  },
};
