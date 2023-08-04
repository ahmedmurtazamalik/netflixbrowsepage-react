import './style.css';

function SectionTitle(props) {
    return (
        <div id={props.containerId} className="title">
            <h2 id={props.headingId}>{props.headingText}</h2>
        </div>
    );
}

export default SectionTitle;
