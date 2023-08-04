import './style.css';

import ImageDiv from './ImageDiv';

import kotfmThumbnail from './data/media/kotfm-thumbnail.jpg';
import miThumbnail from './data/media/mi-thumbnail.jpg';
import napoleonThumbnail from './data/media/napoleon-thumbnail.jpg';
import oppenheimerThumbnail from './data/media/oppenheimer-thumbnail.jpg';
import wonkaThumbnail from './data/media/wonka-thumbnail.jpg';

import koftmTrailer from './data/media/kotfm-trailer.mp4';
import miTrailer from './data/media/mi-trailer.mp4';
import napoleonTrailer from './data/media/napoleon-trailer.mp4';
import oppenheimerTrailer from './data/media/oppenheimer-trailer.mp4';
import wonkaTrailer from './data/media/wonka-trailer.mp4';

function Section(props) {
    const imageSources = [{ kotfmThumbnail }, { miThumbnail }, { napoleonThumbnail }, { oppenheimerThumbnail }, { wonkaThumbnail }];
    const videoSources = [{ koftmTrailer }, { miTrailer }, { napoleonTrailer }, { oppenheimerTrailer }, { wonkaTrailer }];


    return (
        <div id={props.sectionId} className="section">

        </div>
    );
}

export default Section;
