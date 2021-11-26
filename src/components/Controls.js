import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Player({ setCurrentSong, currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs }) {

    // State
    function timeModifier(time) {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    function playHandler() {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    function dragHandler(e) {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    }

    function skipTrackHandler(direction) {
        let currentIndex = songs.findIndex(song => song.id === currentSong.id);

        if (direction === "next") {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        } else if (direction === "previous") {
            if ((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }

    }

    return (
        <div className="controls">
            <div className="time-control">
                <p>{timeModifier(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                <p>{timeModifier(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="previousTrack" onClick={() => skipTrackHandler("previous")} size="2x" icon={faAngleDoubleLeft} />
                <FontAwesomeIcon onClick={playHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="nextTrack" onClick={() => skipTrackHandler("next")} size="2x" icon={faAngleDoubleRight} />
            </div>
        </div>
    );
}