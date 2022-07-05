// ? import CSS files
import "../../../../index.css";
import "./ProfileData.css";

// ? import other files and hooks
import React from "react";

const ProfileData = () => {
  return (
    <>
      <div className="profile__data">
        {/* Avatar */}
        <div className="avatar">
          <img
            className="img profile__avatar"
            src="https://via.placeholder.com/304x304"
            alt=""
          />
          <div className="profile__status"></div>
        </div>

        {/* Profile Content */}

        <ul className="profile__content">
          <li>
            <h1 className="contact">
              <span className="name" itemProp="name">
                Nurdaulet
              </span>
              <br />
              <span className="username" itemProp="username">
                Nurdaulet123456
              </span>
            </h1>
          </li>

          <li>
            <button className="btn profile__btn">Edit Profile</button>
          </li>

          <li>
            <span className="city">Almaty</span>
          </li>

          <li>
            <a className="link" href="asdsad.com" target={"_blank"}>
              https://www.linkedin.com/in/nurdaulet-toregaliv-550657
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileData;
