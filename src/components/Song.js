import Artist from "./Artist";

const Song = ({ title, artists, images }) => {
    const defaultSongImageSrc = "";
    return (
        <div>
            <img
                src={images.length > 0 && images[0].url ? images[0].url : defaultSongImageSrc}
                alt={`cover for music titled ${title}`} />
            <span>
                {title}
            </span>
            {/* {artists?.map((artist, index) => (<Artist name={artist} key={index} />))} */}
        </div>
    );
}

export default Song;