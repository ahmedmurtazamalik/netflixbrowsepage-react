import React, { useState } from 'react';
import ImageDiv from './ImageDiv';
import sources from './RandomSources';

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function Section(props) {
    const [sectionHeight, setSectionHeight] = useState('11rem');
    const [imageDivs] = useState(
        Array.from({ length: 15 }, (_, index) => {
            const randomSourceIndex = getRandomIndex(sources);
            const { imageSource, videoSource } = sources[randomSourceIndex];
            return {
                imageSource,
                videoSource,
            };
        })
    );

    const handleMouseEnter = () => {
        setSectionHeight('15rem');
    };

    const handleMouseLeave = () => {
        setSectionHeight('11rem');
    };

    return (
        <div id={props.sectionId} className="section" style={{ height: sectionHeight }}>
            {imageDivs.map((imageData, index) => (
                <ImageDiv
                    key={index}
                    imageSource={imageData.imageSource}
                    videoSource={imageData.videoSource}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
}

export default Section;