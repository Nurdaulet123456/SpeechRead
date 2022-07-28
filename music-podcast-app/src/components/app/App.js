// TODO: CSS
import "../../index.css";

// TODO: import others file
import { useState, useEffect } from "react";
import { Header } from "../header/Header";
import {Main, Speech, Profile, Translate, EditProfile, Extention} from '../pages'
import PrivateRoutes from "../../utils/PrivateRoutes";
import ErrorMessage from "../Page-404/Page404";
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
    <Header />
      {spinner}
      {content}
    </>
  );
}

const Contents = () => {
  return (
    <>
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
          <PrivateRoutes exact path="/edit">
            <EditProfile />
          </PrivateRoutes>
          <PrivateRoutes exact path="/explanation">
            <Extention />
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
