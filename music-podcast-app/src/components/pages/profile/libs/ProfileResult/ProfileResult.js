// ? import CSS files
import "./Repo.css";

// ? Import other files
import React, { useState, useEffect } from "react";
import { useHttp } from "../../../../hooks/http.hooks";

// let user = JSON.parse(localStorage.getItem("user-info"))
const ProfileResult = () => {
  const [result, setResult] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const {loading, request} = useHttp()
  const handleClickShowMore = () => {
    setShowMore(true);
  };


  useEffect(() => {
    try {
    request('http://localhost:8080/api/result', 'GET', null)
      .then(data => setResult([...data]))
    } catch (error) {}
  }, [request]);

  const numberOfResults = showMore ? result.length : 5;
  return (
    <>
      <div className="profile__result">
        <div className="profile__content">
          <h3 className="result__btn activity">Contribution activity</h3>

          {loading ? <p className="loading">Loading...</p> : 
          result.slice(0, numberOfResults)?.map((item, id) => (
            <div className="every__day-activity" key={id}>
              <h3 className="date">
                <span className="month">{item.date}</span>
              </h3>

              <div className="TimelineItem">
                <div className="TimelineItem-body">
                  <details
                    open={"open"}
                    className="Details-element details-reset"
                  >
                    <summary
                      className="btn-link f4 Link--muted no-underline lh-condensed width-full"
                      role={"button"}
                    >
                      <span className="color-fg-default ws-normal text-left">
                        Сегодня учил {item.words} слов и {item.page} страниц и
                        скорость {item.racer}
                      </span>
                    </summary>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button_block">
        <button className="button" onClick={() => handleClickShowMore()}>
          Show More
        </button>
      </div>
    </>
  );
};

export default ProfileResult;
