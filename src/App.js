import React, { useRef, useState } from "react";
import "./styles/styles.scss";

// Add components
import Controls from "./components/Controls"
import Song from "./components/Song"
import Library from "./components/Library";

// Import Utils
import data from "./data";
import Nav from "./components/Nav";

function App() {
  // References
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  function songInfoHandler(e) {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    let roundedCurrent = Math.round(current);
    let roundedDuration = Math.round(duration)
    let animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage: animation })
  }

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Controls setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} currentSong={currentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} />
      <audio onTimeUpdate={songInfoHandler} onLoadedMetadata={songInfoHandler} ref={audioRef} src={currentSong.audio} />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus} />
    </div>
  );
}

export default App;
