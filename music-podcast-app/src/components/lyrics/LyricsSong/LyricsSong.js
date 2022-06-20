// CSS
import './LyricsSong.css';
import "../../../index.css";
import "../../sideBar/SideBar.css";
import "../../main/Main.css";

// Import other files 
import LyricsSongsItem from '../../lyricsItem/LyricsSongsItem';
import SideBar from '../../sideBar/SideBar';

function LyricsSong () {
    return (
        <div className="main">
        <div className="container">
          <div className="main__inner">
                <SideBar />
                <LyricsSongsItem />
          </div>
        </div>
      </div>
    );
}


export default LyricsSong