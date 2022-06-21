// CSS

import "./Songs.css";
import Play from "../../img/icon/play.png";
import { useEffect, useState } from "react";

// Import Other Files
const Songs = () => {
  // const {id} = 0TnOYISbd1XYRBk9myaseg


//  "https://api.spotify.com/v1/users/jmperezperez"

const [data, setData] = useState([]);
  const userAccessToken = "BQDpRM17WpNOAF8KeeWPBo7pCgMiOhVvsBWHNgV0vFOjxvlX41ZIY-C2JFNa463RLDCQ2cT2XaA-EeU8TfytmdCAcG7-bnufKlJlZ8JerF0qeyWVTg5W17lwmygpPAaMUWTCBmDkaEAzTWWc-HeJpVSGD8ji7ycOIM5EY6nso2AlYKEUrM8G8jg3yhI-YM8GLWfsQaaDuvdOIewCTQKGxAT6DCpEdva1kTsROzBgbuwuV4y5sQvAIo9a5eXWlTzxhOD-BpFBWBI0qhG2M6P8YL1ZRNGI";

  
 useEffect(() => {
  fetch("https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n", {
    method: "GET",
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${userAccessToken}`,
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(newData => setData(newData))
 }, [])

// console.log(data.tracks.items.map(item => item.track));

  return (
    <div className="songs">
      <h1 className="title">Songs</h1>
      <div className="albums__block">
{/* 
      {
       data.artists && data.artists.map(item => (
            <ul key={item.id}>
              <li>{item.name}</li>
            </ul>
          ))
      } */}


      {
       data.tracks.items && data.tracks.items.map((item, index) => (
        <ul key={index}>
          <li>{item.track.duration_ms}</li>
          <li><a href={item.track.external_urls.spotify}>s</a></li>
        </ul>
       ))
      }


      <div className="musics">
        <div className="music__img">
        <img className="img" src="https://via.placeholder.com/45x45" alt="" />
          <h3>01</h3>
        </div>
        <p>Faded-Alan Walker</p>
        <p>Single Album</p>
        <p>4:17</p>
        <a href="google.com">
          <img src={Play} alt="" style={{ width: "18px" }} />
        </a>
      </div>

      <div className="musics">
        <div className="music__img">
          <img className="img" src="https://via.placeholder.com/45x45" alt="" />
          <h3>01</h3>
        </div>
        <p>Faded-Alan Walker</p>
        <p>Single Album</p>
        <p>4:17</p>
        <a href="google.com">
          <img src={Play} alt="" style={{ width: "18px" }} />
        </a>
      </div>
      <div className="musics">
        <div className="music__img">
          <img className="img" src="https://via.placeholder.com/45x45" alt="" />
          <h3>01</h3>
        </div>
        <p>Faded-Alan Walker</p>
        <p>Single Album</p>
        <p>4:17</p>
        <a href="google.com">
          <img src={Play} alt="" style={{ width: "18px" }} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Songs;
