import { useEffect, useRef } from "react";
import music from "../assets/music/song.mp3";

// ...existing code...
export default function MusicPlayer() {
  const audioRef = useRef(null);

  // ...existing code...
  useEffect(() => {
    const audio = audioRef.current;
    console.log("MusicPlayer: useEffect run, audioRef:", audio);
    if (!audio) return;

    const startMusic = () => {
      console.log("MusicPlayer: startMusic called");

      audio.volume = 0.4;

      const onCanPlay = () => {
        console.log("MusicPlayer: onCanPlay");
        try { audio.currentTime = 35; } catch (e) { console.warn(e); }
        audio.play().then(()=> {
          console.log("MusicPlayer: played from canplay");
        }).catch(err => {
          console.warn("MusicPlayer: play rejected in onCanPlay", err);
        });
        localStorage.setItem("musicStarted", "true");
        audio.removeEventListener("canplay", onCanPlay);
      };

      // If we've previously set the flag, try to resume if audio is paused.
      if (localStorage.getItem("musicStarted")) {
        console.log("MusicPlayer: found musicStarted flag — checking audio state");
        if (!audio.paused) {
          console.log("MusicPlayer: audio already playing, nothing to do");
          return;
        }
        // attempt to resume (this call is still inside the user gesture)
        const resumePromise = audio.play();
        if (resumePromise !== undefined) {
          resumePromise
            .then(() => {
              console.log("MusicPlayer: resumed play despite flag");
              localStorage.setItem("musicStarted", "true");
            })
            .catch((err) => {
              console.warn("MusicPlayer: resume play rejected", err);
              // fallback: wait for canplay
              audio.addEventListener("canplay", onCanPlay);
              audio.load();
            });
        } else {
          audio.addEventListener("canplay", onCanPlay);
          audio.load();
        }
        return;
      }

      // First-time start: try immediate play (inside user gesture), fallback to canplay.
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("MusicPlayer: immediate play succeeded");
            try { audio.currentTime = 35; } catch (e) { console.warn(e); }
            localStorage.setItem("musicStarted", "true");
          })
          .catch((err) => {
            console.warn("MusicPlayer: immediate play rejected", err);
            audio.addEventListener("canplay", onCanPlay);
            audio.load();
          });
      } else {
        console.log("MusicPlayer: play() returned undefined, waiting for canplay");
        audio.addEventListener("canplay", onCanPlay);
        audio.load();
      }
    };

    window.addEventListener("start-music", startMusic);
    console.log("MusicPlayer: listener added");
    return () => {
      window.removeEventListener("start-music", startMusic);
      console.log("MusicPlayer: listener removed");
    };
  }, []);

  return <audio ref={audioRef} src={music} loop preload="auto" />;
}