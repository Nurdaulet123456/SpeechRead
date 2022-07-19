import './Explanation.css';

import React from 'react';
import { Link } from 'react-router-dom';

const ExplanationHeader = () => {
  return (
    <>
      <div className="exlanation-header">
        <div className="container">
            <div className="explanation-header__inner">
                <div className="explain-header__nav">
                    <Link className="explanation-header__link" to={'/game'}>Game</Link>
                    <Link className="explanation-header__link" to={'/translate'}>Translate</Link>
                    <Link className="explanation-header__link" to={'/profile'}>Profile</Link>
                    <Link className="explanation-header__link" to={'/edit'}>Edit Profile</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ExplanationHeader;
