import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export default function Countdown() {
  const navigate = useNavigate();
  const targetDate = new Date("2026-02-02T00:10:00");

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date());
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - new Date();
      setTimeLeft(diff);

      if (diff <= 0) {
        clearInterval(timer);
        setFinished(true);

        // Go to Wish page after animation
        setTimeout(() => navigate("/wish"), 5500);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, targetDate]);

  if (timeLeft <= 0 && !finished) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const pad = n => n.toString().padStart(2, "0");

  return (
    <div style={styles.container}>
       
      <AnimatePresence>
        {!finished ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.card}
          >
            <h2 style={styles.title}>Time Until u r Day 💖</h2>

            <div style={styles.watch}>
              <TimeBox label="DAYS" value={pad(days)} />
              <TimeBox label="HRS" value={pad(hours)} />
              <TimeBox label="MIN" value={pad(minutes)} />
              <TimeBox label="SEC" value={pad(seconds)} />
            </div>

            <p style={styles.note}>Every second brings us closer ✨</p>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={styles.celebration}
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              style={styles.celebrateText}
            >
              It’s Your Day, Sakshi 💖
            </motion.h1>

            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              style={styles.heart}
            >
              🤍
            </motion.div>

            <p style={styles.subCelebrate}>
              Something beautiful is waiting…
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ⌚ Time box */
function TimeBox({ value, label }) {
  return (
    <div style={styles.timeBox}>
      <div style={styles.timeValue}>{value}</div>
      <div style={styles.timeLabel}>{label}</div>
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
    textAlign: "center",
    overflow: "hidden",
  },
  card: {
    background: "rgba(255,255,255,0.9)",
    borderRadius: 30,
    padding: "50px 35px",
    maxWidth: 420,
    width: "90%",
    boxShadow: "0 30px 70px rgba(0,0,0,0.15)",
  },
  title: {
    marginBottom: 30,
    color: "#444",
  },
  watch: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  timeBox: {
    background: "#fff",
    borderRadius: 16,
    padding: "14px 12px",
    minWidth: 62,
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
  },
  timeValue: {
    fontSize: 28,
    fontFamily: "Playfair Display",
  },
  timeLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: "#777",
  },
  note: {
    marginTop: 25,
    fontSize: 13,
    color: "#555",
    fontStyle: "italic",
  },
  celebration: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  celebrateText: {
    fontFamily: "Playfair Display",
    fontSize: 34,
    color: "#2b2b2b",
  },
  heart: {
    marginTop: 30,
    fontSize: 36,
  },
  subCelebrate: {
    marginTop: 20,
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
  },
};
