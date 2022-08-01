// ? import CSS files and icons
import "./Repo.css";

// ? import other files
import React, { useState, useEffect, useDeferredValue } from "react";
import Spinner from "../../../../spinner/Spinner";
import Servers from "../../../../../servers/Servers";

const KeyWord = () => {
  const [key, setKey] = useState([]);
  const [search, setSearch] = useState({
    searchTab: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const searchKey = useDeferredValue(search.searchTab)
  const {getAllResultAndKeys} = Servers();
  
  useEffect(() => {
    getAllResultAndKeys('http://localhost:8080/api/keywords', setKey)
  }, []);

  const changeHandler = (event) => {
    setIsLoading(true)
    setSearch({
      searchTab: event.target.value,
    });
    setIsLoading(false)
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
        </div>
      {
        isLoading ? (<Spinner />) :
        (
          <div className="content__key">
          {
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
              ))}
        </div>
        )
      }
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
