import React, { useState } from "react";
import "./styles/styles.scss";

// Add components
import Controls from "./components/Controls"
import Song from "./components/Song"

// Import Utils
import data from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Controls currentSong={currentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
    </div>
  );
}

export default App;
