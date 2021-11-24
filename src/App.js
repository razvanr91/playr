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

  return (
    <div className="App">
      <Song />
      <Controls />
    </div>
  );
}

export default App;
