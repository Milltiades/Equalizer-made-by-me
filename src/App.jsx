import sound from "./music/Transhumanism.mp3";
import { useState, useEffect } from "react";

import EqualizerBar from "./components/EqualizerBar";
import EqualizerBar2 from "./components/EqualizerBar2";
import EqualizerBar3 from "./components/EqualizerBar3";
import EqualizerBar4 from "./components/EqualizerBar4";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  const play = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (audio) {
        audio.play();
      } else {
        const newAudio = new Audio(sound);
        newAudio.currentTime = currentTime;
        newAudio.play();
        setAudio(newAudio);
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        setCurrentTime(audio.currentTime);
        setAudio(null);
        setIsPlaying(false);
      }
    };
  }, [audio]);

  return (
    <>
      <div className="playMusic">
        <button onClick={play}>
          <span class="material-symbols-outlined">
            {!isPlaying ? "play_arrow" : "Pause"}
          </span>
        </button>
        <div style={{ width: "auto", position: "relative" }}>
          <EqualizerBar isPlaying={isPlaying} />
          <EqualizerBar2 isPlaying={isPlaying} />
          <EqualizerBar3 isPlaying={isPlaying} />
          <EqualizerBar4 isPlaying={isPlaying} />
        </div>
      </div>
    </>
  );
}

export default App;
