import React, { useState, useRef } from 'react';

function ImageDiv(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
        if (videoRef.current) {
            videoRef.current.style.display = 'block';
            videoRef.current.currentTime = 0;
            videoRef.current.addEventListener('canplay', () => {
                videoRef.current.play().catch(error => {
                    console.error('Error playing video:', error);
                });
            });
        }
        props.onMouseEnter();
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
        if (videoRef.current) {
            videoRef.current.style.display = 'none';
            videoRef.current.pause();
        }
        props.onMouseLeave();
    };

    return (
        <div className="imagediv" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video
                ref={videoRef}
                className="trailer"
                loop
                muted
                width="295"
                height="166"
                poster={props.imageSource}
                style={{ display: 'none' }}
            >
                <source src={props.videoSource} type="video/mp4" />
            </video>
            <img
                className="image"
                src={props.imageSource}
                alt="trailerImage"
                style={{ display: isMouseOver ? 'none' : 'block' }}
            />
        </div>
    );
}

export default ImageDiv;