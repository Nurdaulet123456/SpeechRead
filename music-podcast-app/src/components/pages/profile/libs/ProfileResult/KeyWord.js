// ? import CSS files and icons
import "./Repo.css";

// ? import other files
import React, { useState, useEffect } from "react";
import axios from "axios";

const KeyWord = () => {
  const [key, setKey] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:8080/api/keywords").then((res) => {
        setKey(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="profile__result key__word">
        <div className="search__key-word">
          <input type="text" name="search" placeholder="Find a word..." />
          <button className="button">Search</button>
        </div>

        <div className="content__key">
          {key.lengt === 0
            ? <p>No key words</p>
            : key.map((item, id) => (
                <div className="key__date" key={id}>
                  <h3 className="key">
                    <span className="word">{item.keyWords}</span>
                  </h3>

                  <div className="date__key">
                    <span className="month">{item.data}</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default KeyWord;
