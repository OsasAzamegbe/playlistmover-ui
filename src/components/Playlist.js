import Song from "./Song";

const Playlist = ({ playlist }) => {
    const defaultPlaylistImageSrc = "";
    return (
        <div>
            <img
                src={playlist.images.length > 0 && playlist.images[0].url ? playlist.images[0].url : defaultPlaylistImageSrc}
                alt={`cover for music playlist titled ${playlist.title}`} />
            <span>{playlist.title}</span>
            {/* {playlist.songs?.map(({ title, artists, images }, index) => (<Song title={title} artists={artists} images={images} key={index} />))} */}

        </div>);
};

export default Playlist;