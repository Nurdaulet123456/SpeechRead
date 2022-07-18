import React, { useState } from "react";
import HearBeat from "../../images/icons/heartbeat.svg";

const Result = ({ note }) => {
  const [count, setCount] = useState(0);
  
  const isNote = {
    word: note.split(" ").length <= 1 ? 0 : note.split(" ").length,
    page: note.split(" ").length > 100 ? setCount(count + 1) : count,
    race: ((note.split(" ").length / 60) * 100).toFixed(0) <= 2
    ? "0wpm"
    : `${((note.split(" ").length / 60) * 100).toFixed(0)}wpm`
  }

  return (
    <>
      <div className="modal__header">
        <h3 className="title">Результат</h3>

        <div className="modal__header-content">
          <p>
            Слова <br />
            <span>
              {isNote.word}
            </span>
          </p>

          <p>
            Страница <br />
            <span>
              {isNote.page}
            </span>
          </p>

          <p>
            Скорость <br />
            <span>
                {isNote.race}
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
