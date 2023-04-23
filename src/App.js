import logo from './logo.svg';
import './App.css';

import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Playlist context={"spotify"}></Playlist>
      </header>
    </div>
  );
}

export default App;
