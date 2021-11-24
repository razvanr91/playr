import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function Player({ currentSong, isPlaying, setIsPlaying }) {
    // References
    const audioRef = useRef(null);

    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    });

    function songInfoHandler(e) {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration })
    }

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

    return (
        <div className="controls">
            <div className="time-control">
                <p>{timeModifier(songInfo.currentTime)}</p>
                <input type="range" />
                <p>{timeModifier(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="previousTrack" size="2x" icon={faAngleDoubleLeft} />
                <FontAwesomeIcon onClick={playHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="nextTrack" size="2x" icon={faAngleDoubleRight} />
            </div>
            <audio onTimeUpdate={songInfoHandler} onLoadedMetadata={songInfoHandler} ref={audioRef} src={currentSong.audio} />
        </div>
    );
}