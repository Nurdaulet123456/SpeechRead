// ? import CSS files
import "./Profile.css";

// ? import other file
import ProfileData from "./libs/ProfileData/ProfileData";
import ProfileResult from "./libs/ProfileResult/ProfileResult";
import KeyWord from "./libs/ProfileResult/KeyWord";
import Recording from "./libs/ProfileResult/Recording";
import useActive from "../../hooks/useActive";
import { Helmet } from "react-helmet";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const {
    
    RecordingActive,
    KeyActive,
    ResultActive,
    RecordingActiveHandler,
    ResultActiveHandler,
    KeyActiveHandler,

  } = useActive();
  return (
    <>
      <Helmet>
        <title>{user && `${user.username} (${user.name})`}</title>
      </Helmet>

      <div className="main profile">
        <div className="container">
          <div className="profile__inner">
            <ProfileData />

            <div className="content__link">
              <nav className="nav">
                <button
                  className={`result__btn ${ResultActive ? "active" : ""}`}
                  onClick={ResultActiveHandler}
                >
                  Результаты
                </button>
                <button
                  className={`result__btn ${KeyActive ? "active" : ""}`}
                  onClick={KeyActiveHandler}
                >
                  Ключевые слова
                </button>
                <button
                  className={`result__btn ${RecordingActive ? "active" : ""}`}
                  onClick={RecordingActiveHandler}
                >
                  Рекорды
                </button>
              </nav>
              {ResultActive ? <ProfileResult /> : null}

              {KeyActive ? <KeyWord /> : null}

              {RecordingActive ? <Recording /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
