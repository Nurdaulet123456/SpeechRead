import React, {useEffect} from 'react';
import HearBeat from '../../images/icons/heartbeat.svg';

const Result = ({ note }) => {
    useEffect(() => {
        console.log(note);
    }, []);
  return (
    <>

        <div className="modal__header">
            <h3 className="title">Результат</h3>

            <div className="modal__header-content">
                <p>Слова <br /><span>{note.split(' ').length <= 1 ? '' : note.split(' ').length}</span></p>
                {/* <p>Страница <br /><span>120</span></p> */}
                <p>Скорость <br /><span>{`${((note.split(' ').length / 60) * 100).toFixed(0)}wpm`}</span></p>
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
