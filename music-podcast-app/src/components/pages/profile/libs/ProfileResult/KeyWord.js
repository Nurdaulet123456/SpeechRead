// ? import CSS files and icons
import "./Repo.css";

// ? import other files
import React, { useState, useEffect, useDeferredValue } from "react";
import axios from "axios";

const KeyWord = () => {
  const [key, setKey] = useState([]);
  const [search, setSearch] = useState({
    searchTab: "",
  });
  const [showMore, setShowMore] = useState(false);
  const searchKey = useDeferredValue(search.searchTab)
  useEffect(() => {
    try {
      axios.get("http://localhost:8080/api/keywords").then((res) => {
        setKey(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const changeHandler = (event) => {
    setSearch({
      searchTab: event.target.value,
    });
  };

  const handleClickShowMore = () => {
    setShowMore(true);
  };

  const numberOfKey = showMore ? key.length : 5;

  return (
    <>
      <div className="profile__result key__word">
        <div className="search__key-word">
          <input
            type="text"
            name="search"
            value={searchKey}
            placeholder="Find a word..."
            onChange={(event) => changeHandler(event)}
          />
          <button className="button">Search</button>
        </div>

        <div className="content__key">
          {key.length > 0 ?
            key
              .slice(0, numberOfKey)
              ?.filter(
                (i) =>
                  i.keyWords
                    ?.toLowerCase()
                    .includes(searchKey.toLowerCase()) || ""
              )
              ?.map((item, id) => (
                <div className="key__date" key={id}>
                  <h3 className="key">
                    <span className="word">{item.keyWords}</span>
                  </h3>

                  <div className="date__key">
                    <span className="month">{item.data}</span>
                  </div>
                </div>
              ))
            :
            (
              <p>No Words</p>
            )}
        </div>
        <div className="button_block">
          <button className="button" onClick={() => handleClickShowMore()}>
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default KeyWord;
