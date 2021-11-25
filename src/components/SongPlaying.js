import React from "react";

export default function SongPlaying({ currentSong }) {
    return (
        <div className="song-library">
            <img src={currentSong.cover} alt={`${currentSong.name}`} />
            <div className="song-details">
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    );
}