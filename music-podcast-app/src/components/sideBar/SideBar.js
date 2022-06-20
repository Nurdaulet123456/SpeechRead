// CSS
import "./SideBar.css";
import "../../index.css";

// Import other files

import Podcast from "../../img/icon/mic.png";
import Play from "../../img/icon/play.png";
import Discover from "../../img/icon/compass.png";
import AddPlayList from "../../img/icon/add.png";
import HeadPhones from "../../img/icon/headphone-symbol.png";
import Artist from "../../img/icon/artist.png";
import PlayList from "../../img/icon/playlist.png";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
// import useAuth from "../Hooks/useAuth";

function SideBar() {
  const CLIENT_ID = "b39c9c2f4fa346a69e4cdbcafefd5185";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;

    let accessToken = window.localStorage.getItem("token");

    if (!accessToken && hash) {
      accessToken = hash
        .substring(1)
        .split("&")
        .find((item) => item.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";

      window.localStorage.setItem("token", accessToken);
    }
    setAccessToken(accessToken);
  }, []);

  const hangleRemove = (e) => {
    e.preventDefault();
    setAccessToken("");

    window.localStorage.removeItem("token");
  };
  return (
       <div className="sideBar">
      <div className="registration">
        <img
          className="registration__img"
          src="https://via.placeholder.com/40x40"
          alt=""
        />
        {!accessToken ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            className="login"
          >
            Login
          </a>
        ) : (
          <a href="google.com" className="login" onClick={hangleRemove}>
            Log out
          </a>
        )}
      </div>

      <div className="menu">
        <nav className="nav">
          <div className="nav__flex">
            <img src={Podcast} alt="" style={{ width: "18px" }} />
            {/* <a href="google.com" className="nav__link">
              Podcast
            </a> */}
            <Link to='/podcast' className="nav__link">Podcast</Link>
          </div>
          <div className="nav__flex">
            <img src={Play} alt="" style={{ width: "18px" }} />
            <a href="google.com" className="nav__link">
              Videos
            </a>
          </div>
          <div className="nav__flex" style={{ marginBottom: "0" }}>
            <img src={Discover} alt="" style={{ width: "18px" }} />
            <a href="google.com" className="nav__link">
              Discover
            </a>
          </div>
        </nav>
      </div>

      <div className="music">
        <h1 className="nav__title">Your Music</h1>
        <nav className="nav">
          <div className="nav__flex">
            <img src={HeadPhones} alt="" style={{ width: "18px" }} />
            <Link to='/' className="nav__link">
              Songs
            </Link>
          </div>
          <div className="nav__flex">
            <img src={Play} alt="" style={{ width: "18px" }} />
            <Link to='/albums' className="nav__link">
              Albums
            </Link>
          </div>
          <div className="nav__flex" style={{ marginBottom: "0" }}>
            <img src={Artist} alt="" style={{ width: "18px" }} />
            <a href="google.com" className="nav__link">
              Artist
            </a>
          </div>
        </nav>
      </div>

      <div className="playlist">
        <div className="title__flex">
          <h1 className="nav__title">Your PlayList</h1>
          <a href="google.com">
            <img src={AddPlayList} alt="" style={{ width: "18px" }} />
          </a>
        </div>
        <nav className="nav">
          <div className="nav__flex">
            <img src={PlayList} alt="" style={{ width: "10px" }} />
            <a href="google.com" className="nav__link">
              Foverites
            </a>
          </div>
          <div className="nav__flex">
            <img src={PlayList} alt="" style={{ width: "10px" }} />
            <a href="google.com" className="nav__link">
              New Vibes
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
