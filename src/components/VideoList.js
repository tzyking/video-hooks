import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, setSelectedVideo }) => {
    return (
        <div className="ui list">
            {videos.map((video, index) => (
                <VideoItem
                    key={index}
                    video={video}
                    setSelectedVideo={setSelectedVideo}
                />
            ))}
        </div>
    );
};

export default VideoList;
