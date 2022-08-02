// ? import CSS files and icons
import "./Repo.css";

// ? import other files
import React, { useState, useEffect, useDeferredValue } from "react";
import { useHttp } from "../../../../hooks/http.hooks";

const KeyWord = () => {
  const [key, setKey] = useState([]);
  const [search, setSearch] = useState({
    searchTab: "",
  });
  const { request, loading } = useHttp();
  const [showMore, setShowMore] = useState(false);
  const searchKey = useDeferredValue(search.searchTab);

  useEffect(() => {
    request("http://localhost:8080/api/keywords", "GET", null).then((data) =>
      setKey([...data])
    );
  }, [request]);

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
        </div>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="content__key">
            {key
              .slice(0, numberOfKey)
              ?.filter(
                (i) =>
                  i.keyWords?.toLowerCase().includes(searchKey.toLowerCase()) ||
                  ""
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
        )}
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
