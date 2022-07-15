// ? import CSS files and icons
import "./Repo.css";

// ? import other files
import React from "react";

const KeyWord = () => {
  return (
    <>
      <div className="profile__result key__word">
        <div className="search__key-word">
          <input type="text" name="search" placeholder="Find a word..." />
          <button className="btn">Search</button>
        </div>

        <div className="content content__key">
          <div className="key__date">
            <h3 className="key">
              <span className="word">Apple - </span>
              <span className="value">Яблоко</span>
            </h3>

            <div className="date__key">
              <span className="month">November</span>{" "}
              <span className="day">22</span>
            </div>
          </div>

          <div className="key__date">
            <h3 className="key">
              <span className="word">Apple - </span>
              <span className="value">Яблоко</span>
            </h3>

            <div className="date__key">
              <span className="month">November</span>{" "}
              <span className="day">22</span>
            </div>
          </div>

          <div className="key__date">
            <h3 className="key">
              <span className="word">Apple - </span>
              <span className="value">Яблоко</span>
            </h3>

            <div className="date__key">
              <span className="month">November</span>{" "}
              <span className="day">22</span>
            </div>
          </div>

          <div className="key__date">
            <h3 className="key">
              <span className="word">Apple - </span>
              <span className="value">Яблоко</span>
            </h3>

            <div className="date__key">
              <span className="month">November</span>{" "}
              <span className="day">22</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyWord;
