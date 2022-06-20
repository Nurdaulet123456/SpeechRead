// CSS
import "./Albums.css";
import "../../index.css";
import "../sideBar/SideBar.css";
import "../songs/Songs.css";

// Import other files and hooks
import SideBar from "../sideBar/SideBar";
import AlbumsItem from "../AlbumItems/Albums";

const Albums = () => {
  return (
    <div className="albums">
      <div className="container">
        <div className="albums__inner">
          <SideBar />
          <AlbumsItem />
        </div>
      </div>
    </div>
  );
};

export default Albums;
