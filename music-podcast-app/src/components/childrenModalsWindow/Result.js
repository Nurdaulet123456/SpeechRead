import React from "react";
import useResult from "../hooks/Result";

const Result = ({ note }) => {
  const { w, p, r } = useResult(note);

  return (
    <>
      <div className="modal__header">
        <h3 className="title">Результат</h3>

        <div className="modal__header-content">
          <p>
            Слова <br />
            <span>{w}</span>
          </p>

          <p>
            Страница <br />
            <span>{p}</span>
          </p>

          <p>
            Скорость <br />
            <span>{r}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Result;
