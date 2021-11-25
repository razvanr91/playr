import React from "react";
import SongPlaying from "./SongPlaying";

export default function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="song-container">
                {songs.map(song => <SongPlaying setSongs={setSongs} isPlaying={isPlaying} setCurrentSong={setCurrentSong} key={song.id} currentSong={song} songs={songs} audioRef={audioRef} />)}
            </div>
        </div>
    );
}