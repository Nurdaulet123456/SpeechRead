// ? import CSS files
import "../../../../../index.css";
import "./ProfileData.css";

// ? import other files and hooks
import React, {useState, useEffect} from "react";
import { useHttp } from "../../../../hooks/http.hooks";
import { Link } from "react-router-dom";

let user = JSON.parse(localStorage.getItem("user-info"));

const ProfileData = () => {
  const [id, setId] = useState([])
  const {request} = useHttp()


  useEffect(() => {
    request('http://localhost:8080/api/edit', 'GET', null)
    .then(data => setId([...data]))
    console.log(id)
  }, [request])

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
        </div>

        {/* Profile Content */}

        <ul className="profile__content">
          <li>
            <h1 className="contact">
              <span className="name" itemProp="name">
                {user._id && user.name}
              </span>
              <br />
              <span className="username" itemProp="username">
                {user._id && user.username}
              </span>
            </h1>
          </li>

          <li>
            <Link className="button profile__btn" to={`/edit/${user._id}`}>
              Edit Profile
            </Link>
          </li>

          <li>
            <span className="city">Almaty</span>
          </li>

          <li>
            <a
              className="link"
              href="asdsad.com"
              target={"_blank"}
              style={{ color: "black" }}
            >
              https://www.linkedin.com/in/nurdaulet-toregaliv-550657
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileData;
