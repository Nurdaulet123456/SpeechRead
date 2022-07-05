// ? import CSS files
import './Profile.css';

// ? import other file
// import { useState, useEffect } from 'react';
import ProfileData from './libs/ProfileData/ProfileData';
import ProfileResult from './libs/ProfileResult/ProfileResult';


const Profile = () => {



  return (
    <div className='main profile'>
      <div className="container">
        <div className="profile__inner">
            <ProfileData />

            <div className="content__link">
               <nav className="nav">
                  <button className='result__btn active'>Результаты</button>
                  <button className='result__btn'>Ключевые слова</button>
                  <button className='result__btn'>Рекорды</button>                 
                </nav> 
            <ProfileResult />
            </div>
        </div>
      </div>

      <div className="border"></div>
    </div>
  );
}

export default Profile;
