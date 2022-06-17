// CSS
import "./Main.css";
import "../../index.css";

// Other Files and Hooks
import SideBar from "../sideBar/SideBar";
import Songs from "../songs/Songs";

let songs_obj = [
  {
    id: 1,
    artist: "Neffex",
    name: "Cold",
  },

  {
    id: 1,
    artist: "Neffex",
    name: "Cold",
  },

  {
    id: 1,
    artist: "Neffex",
    name: "Cold",
  },

  {
    id: 1,
    artist: "Neffex",
    name: "Cold",
  },
];

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="main__inner">
          <SideBar />
          <Songs songsMusic={songs_obj} />
        </div>
      </div>
    </div>
  );
}

export default Main;
