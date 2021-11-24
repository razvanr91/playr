import React from "react";
import "./styles/styles.scss";

// Add components
import Controls from "./components/Controls"
import Song from "./components/Song"

function App() {
  return (
    <div className="App">
      <Song />
      <Controls />
    </div>
  );
}

export default App;
