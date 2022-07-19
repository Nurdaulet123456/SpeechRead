import './GetStarted.css';

import React from 'react';
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <>
        <div className="getStared">
            <div className="container">
                <h3 className='started__text'>Let's start then</h3>
                <div className="getStarted__btn">
                    <Link className='main-block__btn' to={'/game'}>Get Started</Link>
                </div>
            </div>
        </div>
    </>
  );
}

export default GetStarted;
