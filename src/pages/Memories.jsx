import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import eyesImage from "../assets/images/eyes.jpeg";


/* ✍️ Letter Content */
const letterText = `
Dear Sakshi 🤍,

Somewhere along the way, without even realizing it,
you became the best part of my life.

In the middle of busy days, tired nights,
and silent struggles — thinking of you feels like calm.

And if I’m being honest,
the thing I admire the most is your eyes.

They don’t just look beautiful.
They hold warmth, understanding, and quiet strength.

On days when motivation feels low,
thinking of your eyes gives me the strength to work harder,
to move forward, and to become better.

You may not realize it,
but you inspire me more than you know.

I just wanted you to know —
you matter deeply to me.
`;

const mySignature = "— Om";

export default function Memories() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showSignature, setShowSignature] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showAnchorOverlay, setShowAnchorOverlay] = useState(false);

  const containerRef = useRef(null);
  const navigate = useNavigate();

  /* ✍️ Typing effect */
  useEffect(() => {
    if (index < letterText.length) {
      const t = setTimeout(() => {
        setText(prev => prev + letterText[index]);
        setIndex(prev => prev + 1);
      }, 35);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => setShowSignature(true), 800);
      setTimeout(() => setShowButton(true), 1800);
    }
  }, [index]);

  /* 🌙 Auto-scroll */
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop =
        containerRef.current.scrollHeight;
    }
  }, [text]);

  /* 🖼️ Handle button click */
  const handleFinalClick = () => {
    setShowAnchorOverlay(true);

    // Navigate after 4.5 seconds
    setTimeout(() => {
      navigate("/final");
    }, 5500);
  };

  const finishedWriting = index >= letterText.length;

  return (
    <div style={styles.page}>
       
      {/* MAIN CONTENT */}
      <motion.div
        style={{
          ...styles.container,
          filter: showAnchorOverlay ? "blur(6px)" : "none",
          transition: "filter 0.8s ease",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={styles.paper}
          ref={containerRef}
        >
          <pre style={styles.text}>
            {text}
            {!finishedWriting && <span style={styles.cursor}>|</span>}
          </pre>

          {/* 🧿 Eyes */}
          {finishedWriting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              style={styles.eyesBox}
            >
              <img src={eyesImage} alt="Her Eyes" style={styles.eyesImage} />
              <p style={styles.eyesText}>
                It’s your eyes…  
                they give me strength to move forward 🤍
              </p>
            </motion.div>
          )}

          {/* 💌 Signature */}
          {showSignature && (
            <div style={styles.signatureBox}>
              <span style={styles.signatureText}>{mySignature}</span>
            </div>
          )}

          {/* 🎁 Button */}
          {showButton && (
            <button style={styles.button} onClick={handleFinalClick}>
              One Last Surprise ✨
            </button>
          )}
        </motion.div>
      </motion.div>

      {/* 🖼️ MEMORY ANCHOR OVERLAY */}
      <AnimatePresence>
        {showAnchorOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.anchorOverlay}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              style={styles.anchorText}
            >
              Whenever life feels heavy,
              <br />
              come back to this page.
                <br />
                I believe always in you, no matter's how u r 🤍!!!!!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* 🎨 Styles */
const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
  },
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fdfbfb,#f5e6e8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  paper: {
    background: "rgba(255,255,255,0.96)",
    borderRadius: 28,
    padding: "40px 30px",
    maxWidth: 420,
    width: "100%",
    maxHeight: "85vh",
    overflowY: "auto",
    boxShadow: "0 30px 70px rgba(0,0,0,0.15)",
  },
  text: {
    whiteSpace: "pre-wrap",
    fontFamily: "'Playfair Display', serif",
    fontSize: 15,
    lineHeight: 1.8,
    color: "#333",
  },
  cursor: {
    animation: "blink 1s steps(1) infinite",
  },
  eyesBox: {
    marginTop: 40,
    textAlign: "center",
  },
  eyesImage: {
    width: "100%",
    maxWidth: 260,
    height: 90,
    objectFit: "cover",
    // borderRadius: 16,
    boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
  },
  eyesText: {
    marginTop: 16,
    fontSize: 14,
    fontStyle: "italic",
    color: "#444",
  },
  signatureBox: {
    marginTop: 35,
    textAlign: "right",
  },
  signatureText: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: 22,
  },
  button: {
    marginTop: 40,
    padding: "14px 36px",
    borderRadius: 40,
    border: "none",
    background: "#2b2b2b",
    color: "#fff",
    fontSize: 15,
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
  },
  anchorOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  anchorText: {
    fontSize: 15,
    color: "#444",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 1.6,
  },
};
