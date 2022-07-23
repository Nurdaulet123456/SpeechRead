// ? import CSS files
import "./Repo.css";

// ? Import other files
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileResult = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8080/api/result")
        .then((res) => setResult(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="profile__result">
        <div className="profile__content">
          <h3 className="result__btn activity">Contribution activity</h3>

          {result &&
            result?.map((item, id) => (
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
    </>
  );
};

export default ProfileResult;
