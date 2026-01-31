import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";

import Landing from "./pages/Landing";
import Countdown from "./pages/Countdown";
import Wish from "./pages/Wish";
import Memories from "./pages/Memories";
import FinalSurprise from "./pages/FinalSurprise";

export default function App() {
  return (
    <>
      {/* 🎵 MUSIC LIVES HERE */}
      <MusicPlayer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/final" element={<FinalSurprise />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
