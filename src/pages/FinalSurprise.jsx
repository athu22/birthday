import { motion } from "framer-motion";
import BlowCandle from "../components/BlowCandle";
import { useEffect, useState } from "react";


export default function FinalSurprise() {
  const [showQuestion, setShowQuestion] = useState(false);

  // Show the silent question after everything settles
  useEffect(() => {
    const timer = setTimeout(() => {
      // show only once per device
      if (!localStorage.getItem("smileShown")) {
        setShowQuestion(true);
        localStorage.setItem("smileShown", "true");
      }
    }, 6500); // calm pause

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
       
      {/* Soft glowing background */}
      <div style={styles.glow} />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={styles.card}
      >
        <h1 style={styles.title}>Sakshi 💖</h1>

        <p style={styles.message}>
          Today is not just your birthday…  
          it’s a celebration of <strong>you</strong>.
        </p>

        <p style={styles.message}>
          Your kindness, your strength, your smile —  
          they quietly make the world a better place.
        </p>

        <p style={styles.message}>
          May every dream you hold close to your heart  
          find its way to reality ✨
        </p>

        {/* Candle moment */}
        <BlowCandle />

        {/* Final line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={styles.finalLine}
        >
          Always remember — you are loved, today and every day 🤍
        </motion.p>

        <p style={styles.signature}>
          — Someone who truly cares 🌸
        </p>

        {/* 🌟 The Silent Question */}
        {showQuestion && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
            style={styles.silentQuestion}
          >
            Did you smile?
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fdfcfb,#e2d1c3)",
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
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  card: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: 28,
    padding: "40px 25px",
    maxWidth: 380,
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    zIndex: 1,
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 34,
    marginBottom: 10,
    color: "#2b2b2b",
  },
  message: {
    fontSize: 15,
    color: "#444",
    marginTop: 14,
    lineHeight: 1.6,
  },
  finalLine: {
    marginTop: 30,
    fontSize: 14,
    color: "#333",
    fontStyle: "italic",
  },
  signature: {
    marginTop: 20,
    fontSize: 13,
    color: "#666",
  },
  silentQuestion: {
    marginTop: 45,
    fontSize: 12,
    color: "#555",
    fontStyle: "italic",
  },
};
