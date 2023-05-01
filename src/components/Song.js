import Artist from "./Artist";

const Song = ({ title, artists }) => {
    return (
        <div>
            <span>
                {title}
            </span>
            {artists?.map((artist, index) => (<Artist name={artist} key={index} />))}
        </div>
    );
}

export default Song;