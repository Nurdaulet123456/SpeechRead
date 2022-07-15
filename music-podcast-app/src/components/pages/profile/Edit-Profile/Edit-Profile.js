import "./Edit.Profile.css";

import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const EditProfile = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  return (
    <>
      <Helmet>
        <title>{`Edit Profile (${user && user.name})`}</title>
      </Helmet>
      <div className="main edit-profile">
        <div className="container">
          <div className="edit">
            <div className="edit-profile__btn">
              <Link
                className="button edit__button"
                type="submit"
                to={"/profile"}
              >
                Go to profile
              </Link>
            </div>
            <form className="form">
              <div className="input__form">
                <div className="blocks">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>

                <div className="blocks">
                  <input
                    className="input"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                  />
                </div>

                <div className="blocks">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="blocks">
                  <input
                    className="input"
                    type="text"
                    name="location"
                    placeholder="Enter your location"
                  />
                </div>

                <div className="blocks">
                  <input
                    className="input"
                    type="text"
                    name="url"
                    placeholder="Enter your url"
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <button className="button" type="submit">
                    Update profile
                  </button>
                </div>
              </div>

              <div className="profile__picture">
                <h4 className="pircture">Profile picture</h4>
                <img
                  className="img"
                  src="https://via.placeholder.com/200x200"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
                <div className="upload__file">
                  <input
                    className="file-input__input"
                    id="file-input"
                    type="file"
                  />
                  <label class="file-input__label" for="file-input">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="upload"
                      class="svg-inline--fa fa-upload fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      ></path>
                    </svg>
                    <span>Edit</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
