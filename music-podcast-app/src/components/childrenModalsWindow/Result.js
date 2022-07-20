import React from "react";
import useResult from "../hooks/useResult";
import HearBeat from "../../images/icons/heartbeat.svg";


const Result = ({ note }) => {

  const {w, p, r} = useResult(note);

  return (
    <>
      <div className="modal__header">
        <h3 className="title">Результат</h3>

        <div className="modal__header-content">
          <p>
            Слова <br />
            <span>
              {w}
            </span>
          </p>

          <p>
            Страница <br />
            <span>
              {p}
            </span>
          </p>

          <p>
            Скорость <br />
            <span>
                {r}
            </span>
          </p>
        </div>

        <div className="heartbeat">
          <img
            className="img heartbeat"
            src={HearBeat}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      </div>
      <div className="words">
        <button>Смотреть словa</button>
      </div>
    </>
  );
};

export default Result;
