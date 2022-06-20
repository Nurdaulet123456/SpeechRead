// CSS
import './Podcast.css';
import "../../index.css";
import "../sideBar/SideBar.css";
import "../songs/Songs.css";

// Import other files 
import SideBar from '../sideBar/SideBar';
import PodcastItem from './libs/PodcastItem/PodcastItem';


function Podcast() {
    return (
        <div className="albums">
        <div className="container">
          <div className="albums__inner">
            <SideBar />
            <PodcastItem />
          </div>
        </div>
      </div>
    );
}


export default Podcast;