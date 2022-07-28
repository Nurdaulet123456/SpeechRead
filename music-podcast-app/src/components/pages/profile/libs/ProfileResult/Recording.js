import React, {useState, useEffect} from 'react';
import Servers from '../../../../../servers/Servers';

const Recording = () => {
  const [record, setRecord] = useState([])
  const {getAllResultAndKeys} = Servers()
  
  useEffect(() => {
     getAllResultAndKeys('http://localhost:8080/api/records', setRecord);
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
