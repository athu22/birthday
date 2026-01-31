import { useEffect, useRef } from "react";
import music from "../assets/music/song.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startMusic = () => {
      // Start only once
      if (localStorage.getItem("musicStarted")) return;

      const onCanPlay = () => {
        audio.currentTime = 35; // ✅ jump AFTER ready
        audio.volume = 0.4;

        audio.play().catch(() => {});
        localStorage.setItem("musicStarted", "true");

        audio.removeEventListener("canplay", onCanPlay);
      };

      // Wait until audio is ready
      audio.addEventListener("canplay", onCanPlay);
      audio.load(); // force load
    };

    // Listen for button click signal
    window.addEventListener("start-music", startMusic);

    return () => {
      window.removeEventListener("start-music", startMusic);
    };
  }, []);

  return <audio ref={audioRef} src={music} loop preload="auto" />;
}
