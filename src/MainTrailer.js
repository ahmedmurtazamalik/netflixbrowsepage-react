import './style.css';
import trailerSource from './data/media/maintrailer.mp4';
function MainTrailer() {
    return (
        <div id="maintrailer-container">
            <video id="maintrailer" autoPlay muted loop>
                <source src={trailerSource} type="video/mp4" />
            </video>
        </div>
    );
}

export default MainTrailer;
