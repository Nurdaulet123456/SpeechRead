import { LogoutModal } from "../modal/Modal";
import LogoutAndProfile from "../childrenModalsWindow/LogoutAndProfile";
import { useState } from "react";

const Logout = () => {
  const [open, setOpen] = useState(false)
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
                <img className="logout_img" src="https://via.placeholder.com/40x40" alt="" onClick={() => setOpen(true)}/>
              </nav>
          </div>
        </div>
      </div>

      <LogoutModal open={open} close={() => setOpen(false)}>
        <LogoutAndProfile />
      </LogoutModal>
    </>
  );
};

export default Logout;
