import React from "react";

export default function Player() {
    return (
        <div className="controls">
            <div className="time-control">
                <p>start time</p>
                <input type="range" />
                <p>end time</p>
            </div>
            <div className="play-control"></div>
        </div>
    );
}