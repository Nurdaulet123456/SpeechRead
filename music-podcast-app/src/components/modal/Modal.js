// TODO: import css files
import "./Modal.css";
import ReactDom from "react-dom";
import CloseImg from "../../images/icons/Close.svg";
import { motion } from "framer-motion";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <motion.div 
      className="modal"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <div className="modal__inner">
          <div className="modal__content">
            <motion.button 
            className="close__btn" 
            onClick={onClose}
            whileHover={{transform: 'rotate(90deg)'}}>
              <img src={CloseImg} alt="" />
            </motion.button>
            {children}
          </div>
        </div>
      </motion.div>
    </>,

    document.getElementById("portal")
  );
};

const LoginModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <motion.div 
      className="modal"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <div className="modal__inner">
          <div className="modal__content">
            <motion.button 
            className="close__btn" 
            onClick={onClose}
            whileHover={{transform: 'rotate(90deg)'}}>
              <img src={CloseImg} alt="" />
            </motion.button>
            {children}
          </div>
        </div>
      </motion.div>
    </>,

    document.getElementById("portal")
  );
};

export { Modal, LoginModal };
