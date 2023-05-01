import Song from "./Song";

const Playlist = ({ playlist }) => {
    console.log("playlist", playlist)
    return (
        <div>
            <span>{playlist.title}</span>
            {playlist.songs?.map(({ title, artists }, index) => (<Song title={title} artists={artists} key={index} />))}

        </div>);
};

export default Playlist;