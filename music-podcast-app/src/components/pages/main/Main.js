// TODO: import css files
import "../../../index.css";
import "./Main.css";

// TODO: import other files
import { LoginModal } from "../../modal/Modal";
import { Login } from "../../Autorizations/Login";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Video from "../../../assets/video.mp4";

const Main = () => {
  const [loginModal, setloginModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Count Words</title>
      </Helmet>
      <div className="main__page">
        <video src={Video} loop autoPlay muted />
        <div className="container">
          <div className="main__inner">
            <div className="content">
              <h2 className="main__title">Welcome to CountWords!</h2>
              <p className="main__subtitle">
                CSS code-golfing game is here! Use your CSS skills to replicate
                targets with smallest possible code. Feel free to check out the
                targets below and put your CSS skills to test.
              </p>
            <button className="button get-started" onClick={() => setloginModal(true)}>Get Stared</button>
            </div>
          </div>
        </div>
      </div>
      <LoginModal open={loginModal} onClose={() => setloginModal(false)}>
        <Login />
      </LoginModal>
    </>
  );
};

export default Main;
