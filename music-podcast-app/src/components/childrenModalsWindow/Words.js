import React from "react";

const style = {
  textAlign: "center",
  fontWeight: "bold",
  color: "#9a9a9a",
};

const Words = ({ isNote }) => {
  return (
    <>
      <div className="modal__header">
        {!isNote ? (
          <p className="no__words" style={style}>
            No words...
          </p>
        ) : (
          isNote
        )}
      </div>
    </>
  );
};

export default Words;
