import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, setSelectedVideo }) => {
    const { snippet } = video;
    return (
        <div
            className="video-item item"
            onClick={() => setSelectedVideo(video)}
        >
            <img
                className="ui image"
                alt={snippet.description}
                src={snippet.thumbnails.medium.url}
            ></img>
            <div className="content">
                <q className="header">{snippet.title}</q>
            </div>
        </div>
    );
};

export default VideoItem;
