// CSS
import "./App.css";
import "../../index.css";

// TODO: import others file
import { useState, useEffect } from "react";
import { Header } from "../header/Header";
import Main from "../main/Main";
import Translate from "../Translate/Translate";
import Profile from "../profile/Profile";
import PrivateRoutes from "../utils/PrivateRoutes";
import EditProfile from "../profile/Edit-Profile/Edit-Profile";
import ErrorMessage from "../Page-404/Page404";
import Speech from "../speechToText/Speech";
import Spinner from "../spinner/Spinner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onLoading();
    setTimeout(() => {
      onLoded();
    }, 2000);
  }, []);

  const onLoded = () => {
    setLoading(false);
  };

  const onLoading = () => {
    setLoading(true);
  };

  const spinner = loading ? <Spinner /> : null;
  const content = !loading ? <Contents /> : null;
  return (
    <>
      {spinner}
      {content}
    </>
  );
}

const Contents = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <PrivateRoutes exact path="/game">
            <Speech />
          </PrivateRoutes>
          <PrivateRoutes exact path="/translate">
            <Translate />
          </PrivateRoutes>
          <PrivateRoutes exact path="/profile">
            <Profile />
          </PrivateRoutes>
          <PrivateRoutes exact path="/edit/">
            <EditProfile />
          </PrivateRoutes>
          <Route exact path="*">
            <ErrorMessage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
