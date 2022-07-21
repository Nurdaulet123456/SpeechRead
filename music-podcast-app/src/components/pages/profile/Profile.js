// ? import CSS files
import "./Profile.css";

// ? import other file
import ProfileData from "./libs/ProfileData/ProfileData";
// import ProfileResult from "./libs/ProfileResult/ProfileResult";
import KeyWord from "./libs/ProfileResult/KeyWord";
import { Helmet } from "react-helmet";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem('user-info'))
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
                <button className="result__btn">Результаты</button>
                <button className="result__btn active">Ключевые слова</button>
                <button className="result__btn">Рекорды</button>
              </nav>
              <KeyWord />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
