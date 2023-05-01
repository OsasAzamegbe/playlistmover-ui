const Playlist = ({ playlist }) => {
    console.log("playlist", playlist)
    return (<div><span>Playlist: {playlist.title}</span></div>);
};

export default Playlist;