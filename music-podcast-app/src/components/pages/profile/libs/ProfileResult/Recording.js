import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Recording = () => {

  const [record, setRecord] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/records')
    .then(res => setRecord(res.data))
  }, [])

  // ! Give Maximum keys in objects arrays
  
  const MaxKeyWord = (record) => { 
    return Math.max.apply(Math, record.map((max) => {
      return max.record
    }))
  }
  return (
    <>
        <div className="profile__result recording">
            <div className="recording__content">
                Слова: {MaxKeyWord(record)}
            </div>
        </div>
    </>
  );
}

export default Recording;
