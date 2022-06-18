// CSS
import "./Main.css";
import "../../index.css";

// Other Files and Hooks
import SideBar from "../sideBar/SideBar";
import Songs from "../songs/Songs";

// let songs_obj = [
//   {
//     id: 1,
//     artist: "Neffex",
//     name: "Cold",
//   },

//   {
//     id: 1,
//     artist: "Neffex",
//     name: "Cold",
//   },

//   {
//     id: 1,
//     artist: "Neffex",
//     name: "Cold",
//   },

//   {
//     id: 1,
//     artist: "Neffex",
//     name: "Cold",
//   },
// ];

function Main() {

  // const CLIENT_ID = "b39c9c2f4fa346a69e4cdbcafefd5185"
  // const REDIRECT_URI = "http://localhost:3000"
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  // const RESPONSE_TYPE = "token"

  // let url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

  return (
    <div className="main">
      <div className="container">
        <div className="main__inner">
          <SideBar />
          <Songs />
        </div>
      </div>
    </div>
  );
}

export default Main;
