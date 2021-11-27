import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Player({ setSongs, setCurrentSong, currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs }) {
    // Effect
    useEffect(() => {
        const newSongs = songs.map(song => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true
                };
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        });
        setSongs(newSongs);
    }, [currentSong])

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

    async function skipTrackHandler(direction) {
        let currentIndex = songs.findIndex(song => song.id === currentSong.id);

        if (direction === "next") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        } else if (direction === "previous") {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();
    }

    // Add Styles

    let trackAnimation = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className="controls">
            <div className="time-control">
                <p>{timeModifier(songInfo.currentTime)}</p>
                <div style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }} className="track">
                    <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                    <div style={trackAnimation} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? timeModifier(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="previousTrack" onClick={() => skipTrackHandler("previous")} size="2x" icon={faAngleDoubleLeft} />
                <FontAwesomeIcon onClick={playHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="nextTrack" onClick={() => skipTrackHandler("next")} size="2x" icon={faAngleDoubleRight} />
            </div>
        </div>
    );
}