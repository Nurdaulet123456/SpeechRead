// TODO: import css files
import "../../index.css";
import "./Main.css";

// TODO: import other files
import MainImgaes from "../../images/icons/freepik--Character--inject-31.svg";
import FinishImage from "../../images/icons/Finish.svg";
import Language from '../../images/icons/language.png';
import { LoginModal } from "../modal/Modal";
import Login from "../Autorizations/Login";
import { useState } from "react";
import { motion } from 'framer-motion'

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Main = () => {
  const [loginModal, setloginModal] = useState(false);

  return (
    <>
      <div className="main">
      <motion.div 
      className="container" 
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit">
        <div 
        className="main__inner">
          <motion.div 
          className="main__img"
          variants={item}>
            <motion.img className="img" src={MainImgaes} alt="" variants={itemMain}/>
          </motion.div>

          <div className="main__content">
            <motion.h1 
            className="main__title" 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{ delay: 1}}>
              Сайт для скорость чтение и чтение по таймеру
            </motion.h1>
            <motion.button 
            className="btn" 
            onClick={() => setloginModal(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              Get started
            </motion.button>
          </div>
        </div>

        <img 
        className="img finish__img" 
        src={FinishImage} alt="" 
        width={'800px'}/>

        <div className='language'>
            <img src={Language} alt="" width={'35px'}/>
            <h4 className='language_title'>RU</h4>
        </div>
      </motion.div>
    </div>

    <LoginModal open={loginModal} onClose={() => setloginModal(false)}>
        <Login />
    </LoginModal>
    </>
  );
};

export default Main;
