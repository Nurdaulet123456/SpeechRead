import "./Modal.css";

import React from "react";
import Servers from "../../servers/Servers";

const style = {
  textAlign: "center",
  fontWeight: "bold",
  color: "#9a9a9a",
};

const Words = ({ isNote }) => {
  let note = {
    keyWords: isNote.split(" "),
    data: new Date().getHours() + ":" + new Date().getMinutes(),
  };

  const {createResultAndKeys} = Servers()

  const wordAddHandler = async (item) => {
    note = {
      ...note,
      keyWords: item,
    };
    if (note) {
      createResultAndKeys('http://localhost:8080/api/keywords', note);
    }
  };

  return (
    <>
      <div className="modal__header">
        {!isNote ? (
          <p className="no__words" style={style}>
            No words...
          </p>
        ) : (
          note.keyWords?.map((item, i) => (
            <button
              key={i}
              className={`key__words`}
              onClick={() => wordAddHandler(item)}
            >
              {item}
            </button>
          ))
        )}
      </div>
    </>
  );
};

export default Words;
