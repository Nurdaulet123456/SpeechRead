// TODO: import css files
import "./Modal.css";
import ReactDom from "react-dom";
import CloseImg from "../../images/icons/Close.svg";
import { CSSTransition } from "react-transition-group";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal">
        <div className="modal__inner">
          <div className="modal__content">
            <button className="close__btn" onClick={onClose}>
              <img src={CloseImg} alt="" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </>,

    document.getElementById("portal")
  );
};

const LoginModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div>
      <CSSTransition
        in={open}
        timeout={100}
        classNames={"open-modal"}
        unmountOnExit
      >
        <div className="modal">
          <div className="modal__inner">
            <div className="modal__content">
              <button className="close__btn" onClick={onClose}>
                <img src={CloseImg} alt="" />
              </button>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>,

    document.getElementById("portal")
  );
};

const ProfileAndResult = ({ openAuto, children, close }) => {
  if (!openAuto) return null;
  return (
    <>
      <div className="modal">
        <div className="modal__inner">
          <div className="modal__content">
            <button className="close__btn" onClick={close}>
              <img src={CloseImg} alt="" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export { Modal, LoginModal, ProfileAndResult };
