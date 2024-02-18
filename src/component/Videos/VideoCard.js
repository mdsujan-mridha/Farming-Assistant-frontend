import React from 'react';
import ReactPlayer from 'react-player'

const VideoCard = ({ item }) => {



    return (
        <div className='w-full'>
            <ReactPlayer
                url={item?.videoUrl}
                controls={true}
                muted={true}
                playIcon
                style={{
                    width: '100%'
                }}
            />
            <h1> {item?.title} </h1>
            <p> {item?.description} </p>
        </div>
    );
};

export default VideoCard;