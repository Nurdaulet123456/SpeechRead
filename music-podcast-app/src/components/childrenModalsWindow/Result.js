// import React, {useState} from 'react';
import HearBeat from '../../images/icons/heartbeat.svg';

const Result = ({ note }) => {
    // const [count, setCount] = useState(0);

    // const countPlus = () => {
    //     count = note.split(' ').length > 100 ? setCount(count + 1) : count 
    // }
  return (
    <>

        <div className="modal__header">
            <h3 className="title">Результат</h3>

            <div className="modal__header-content">
                <p>Слова <br /><span>120 {/* {`${note.split(' ').length`} */}</span></p>
                <p>Страница <br /><span>120 {/* {countPlus()} */}</span></p>
                <p>Скорость <br /><span>30wpm {/* {`${((note.split(' ').length / 60) * 100).toFixed(0)}wpm`} */}</span></p>
            </div>

            <div className="heartbeat">
                <img className='img heartbeat' src={HearBeat} alt=""  style={{width: '100px', height: '100px'}}/>
            </div>
        </div>

        <div className="words">
            <button>Смотреть словы</button>
        </div>
    </>
  );
}

export default Result;
