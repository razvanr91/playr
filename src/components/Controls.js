import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function Player() {
    return (
        <div className="controls">
            <div className="time-control">
                <p>start time</p>
                <input type="range" />
                <p>end time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="previousTrack" size="2x" icon={faAngleDoubleLeft} />
                <FontAwesomeIcon className="play" size="2x" icon={faPlayCircle} />
                <FontAwesomeIcon className="nextTrack" size="2x" icon={faAngleDoubleRight} />
            </div>
        </div>
    );
}