// TODO: import css files
import "../../index.css";
import "./Main.css";

// TODO: import other files
import MainImgaes from "../../images/icons/freepik--Character--inject-31.svg";
import FinishImage from "../../images/icons/Finish.svg";
import Language from '../../images/icons/language.png';
import { LoginModal } from "../modal/Modal";
import {Login} from "../Autorizations/Login";
import ButtonLogout from "../Button/Button";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet'


const Main = () => {
  const [loginModal, setloginModal] = useState(false);

  return (
    <>
    <Helmet>
      <title>Count Words</title>
    </Helmet>
      <div className="main">
      <div className="container">
      <div 
        className="main__inner">
          <div className="main__img">
            <img className="img" src={MainImgaes} alt="" />
          </div>

          <div className="main__content">
            <h1 
            className="main__title">
              Сайт для скорость чтение и чтение по таймеру
            </h1>
           {
            localStorage.getItem('token') 
            ?
            <ButtonLogout /> 
            :
            <button 
            className="btn" 
            onClick={() => setloginModal(true)}>
              Get started
            </button>
          }
          </div>
        </div>

        <img 
        className="img finish__img" 
        src={FinishImage} alt="" 
        width={'800px'}/>
        <Link className='language' to={'/translate'}>
            <img src={Language} alt="" width={'35px'}/>
        </Link>
      </div>
    </div>

    <LoginModal open={loginModal} onClose={() => setloginModal(false)}>
        <Login />
    </LoginModal>
    </>
  );
};

export default Main;
