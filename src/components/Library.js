import React from "react";
import SongPlaying from "./SongPlaying";

export default function Library({ songs }) {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="song-container">
                {songs.map(song => <SongPlaying key={song.id} currentSong={song} />)}
            </div>
        </div>
    );
}