import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SpotifyButton from '../SpotifyButton';

import Playlist from '../Playlist';

const Home = () => {
    let [searchParams,] = useSearchParams();
    let [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const isAuth = () => {
            return searchParams.has("code") && searchParams.has("state");
        };
        const getPlaylists = async () => {
            if (!isAuth()) {
                return;
            }
            const response = await fetch(`http://127.0.0.1:8000/api/playlists?code=${searchParams.get("code")}&state=${searchParams.get("state")}&platform=spotify&redirect_uri=http://192.168.1.107:3000`);
            const data = await response.json();
            if (response.ok) {
                setPlaylists(data.playlists);
            }
        }
        getPlaylists();
    }, [searchParams]);

    if (playlists.length > 0) {
        console.log("playlists", playlists);
    }

    return (
        <div>
            <h1>Home</h1>
            <SpotifyButton />
            {playlists.map((playlist, index) => (<Playlist playlist={playlist} key={index} />))}
        </div>
    );
}

export default Home;