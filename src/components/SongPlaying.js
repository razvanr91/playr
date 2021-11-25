import React from "react";

export default function SongPlaying({ currentSong, setCurrentSong, songs, audioRef, isPlaying, setSongs }) {
    function songSelectHandler() {
        let selectedSong = songs.filter(song => song.id === currentSong.id)
        setCurrentSong(selectedSong[0]);

        let newSongs = songs.map(song => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        });
        setSongs(newSongs);

        if (isPlaying) {
            let playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(audio => {
                    audioRef.current.play();
                })
            }
        }
    }

    return (
        <div onClick={songSelectHandler} className={`song-library ${currentSong.active ? 'selected' : ''}`}>
            <img src={currentSong.cover} alt={`${currentSong.name}`} />
            <div className="song-details">
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    );
}