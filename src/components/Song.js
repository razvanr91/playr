import React from "react";

export default function Player({ currentSong }) {
    return (
        <div className="song-container">
            <img className="current-song-img" src={currentSong.cover} alt={`${currentSong.name}`} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
}