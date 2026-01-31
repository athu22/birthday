import { useState } from "react";
import { motion } from "framer-motion";

export default function BlowCandle() {
  const [blown, setBlown] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <div style={styles.cake}>
        <motion.div
          animate={{ opacity: blown ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => setBlown(true)}
          style={styles.flame}
        />
        <div style={styles.candle} />
      </div>

      {blown ? (
        <h3 style={{ marginTop: 30 }}>
          🌸 Make a wish, Sakshi 🌸
        </h3>
      ) : (
        <p>Tap the flame gently 🕯️</p>
      )}
    </div>
  );
}

const styles = {
  cake: {
    width: 220,
    height: 130,
    background: "linear-gradient(135deg,#ffecd2,#fcb69f)",
    borderRadius: 25,
    margin: "0 auto",
    position: "relative",
  },
  candle: {
    width: 14,
    height: 45,
    background: "#fff",
    position: "absolute",
    top: -45,
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: 6,
  },
  flame: {
    width: 22,
    height: 32,
    background: "radial-gradient(circle,#ffd700,#ff8c00)",
    position: "absolute",
    top: -75,
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "50%",
    boxShadow: "0 0 25px rgba(255,140,0,0.9)",
    cursor: "pointer",
  },
};
