import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Player({ currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo }) {

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

    return (
        <div className="controls">
            <div className="time-control">
                <p>{timeModifier(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                <p>{timeModifier(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="previousTrack" size="2x" icon={faAngleDoubleLeft} />
                <FontAwesomeIcon onClick={playHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="nextTrack" size="2x" icon={faAngleDoubleRight} />
            </div>
        </div>
    );
}