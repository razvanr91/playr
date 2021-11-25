import React, { useRef, useState } from "react";
import "./styles/styles.scss";

// Add components
import Controls from "./components/Controls"
import Song from "./components/Song"
import Library from "./components/Library";

// Import Utils
import data from "./util";

function App() {
  // References
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });


  function songInfoHandler(e) {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration })
  }

  return (
    <div className="App">
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
      <Song currentSong={currentSong} />
      <Controls currentSong={currentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} />
      <audio onTimeUpdate={songInfoHandler} onLoadedMetadata={songInfoHandler} ref={audioRef} src={currentSong.audio} />
    </div>
  );
}

export default App;
