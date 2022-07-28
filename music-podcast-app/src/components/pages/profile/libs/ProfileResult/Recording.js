import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Recording = () => {

  const [record, setRecord] = useState([])

  useEffect(() => {
      try {
        axios.get('http://localhost:8080/api/records')
        .then(res => setRecord(res.data))
      } catch (error) {
        console.log(error);
      }
  }, [])

  // ! Give Maximum keys
  const maximumRecords = (records) => {
    return Math.max.apply(Math, records.map(item => {
      return item.record
    }))
  }
  
  return (
    <>
        <div className="profile__result recording">
            <div className="recording__content">
                Слова: {maximumRecords(record)}
            </div>
        </div>
    </>
  );
}

export default Recording;
