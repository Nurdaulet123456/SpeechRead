import React from 'react';
import HearBeat from '../../images/icons/heartbeat.svg';

const Result = ({ note }) => {
  return (
    <>

        <div className="modal__header">
            <h3 className="title">Результат</h3>

            <div className="modal__header-content">
                <p>Слова <br /><span>120</span></p>
                <p>Страница <br /><span>120</span></p>
                <p>Скорость <br /><span>30wpm</span></p>
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
