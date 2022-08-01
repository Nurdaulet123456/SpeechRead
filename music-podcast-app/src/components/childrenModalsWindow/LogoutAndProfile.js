import React from "react";
import { Link } from "react-router-dom";

let user = JSON.parse(localStorage.getItem("user-info"));
const LogoutAndProfile = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user-info");
    window.location.reload();
  };
  return (
    <>
    <div className="data">
      <div className="logout__image">
        <img
          className="logout_img"
          src="https://via.placeholder.com/50x50"
          alt=""
        />
      </div>
      <div className="logout_username">Signed in as: {user && <span>{user.username}</span>}</div>
      </div>
      <Link className="button logout_btn" to={"/profile"}>
        Go to profile
      </Link>
      <button className="button logout_btn" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default LogoutAndProfile;
