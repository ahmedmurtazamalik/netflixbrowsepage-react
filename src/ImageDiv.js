import './style.css';

function ImageDiv(props) {
    return (
        <div className="imagediv">
            <video className="trailer" loop muted width="295" height="166" poster={props.imageSource}>
                <source src={props.videoSource} type="video/mp4" />
            </video>
            <img className="image" src={props.imageSource} />
        </div>
    );
}

export default ImageDiv;
