import React, { useState, useEffect } from "react";
import { useHttp } from "../../../../hooks/http.hooks";

const Recording = () => {
  const [record, setRecord] = useState([]);
  const { request, loading } = useHttp();
  useEffect(() => {
    request("http://localhost:8080/api/records", "GET", null).then((data) =>
      setRecord([...data])
    );
  }, [request]);

  // ! Give Maximum keys
  const maximumRecords = (records) => {
    return Math.max.apply(
      Math,
      records.map((item) => {
        return item.record;
      })
    );
  };
  return (
    <>
      <div className="profile__result recording">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="recording__content">
            Слова: {maximumRecords(record)}
          </div>
        )}
      </div>
    </>
  );
};

export default Recording;
