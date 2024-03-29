// TODO: import css files
import "./Header.css";
import "../../index.css";
// TODO: import other files
import { Modal, LoginModal } from "../modal/Modal";
import { useState } from "react";
import Register from "../Autorizations/Register";
import { Login } from "../Autorizations/Login";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [loginModal, setloginModal] = useState(false);
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className={header ? "header active" : "header"}>
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <h2 className="header__title">CountWords</h2>
            </div>
              <nav className="nav">
                <button className="nav__link" onClick={() => setisOpen(true)}>
                  Регистрация
                </button>
                <button
                  className="nav__link"
                  onClick={() => setloginModal(true)}
                >
                  Войти
                </button>
              </nav>
          </div>
        </div>
      </div>

      <Modal open={isOpen} onClose={() => setisOpen(false)}>
        <Register />
      </Modal>

      <LoginModal open={loginModal} onClose={() => setloginModal(false)}>
        <Login />
      </LoginModal>
    </>
  );
};

export { Header };
