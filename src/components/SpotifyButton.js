import { getAuth } from "../logic/MusicApi";
import Button from "./Button";

const SpotifyButton = () => {
    return (<Button onClickHandler={getAuth} text="Connect to Spotify" />);
}

export default SpotifyButton;