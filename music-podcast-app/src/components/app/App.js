// CSS
import "./App.css";
import "../../index.css";

// Other Files and Hooks
import Main from "../main/Main";
import Albums from "../albums/Albums";
import Podcast from "../podcast/Podcast";
import LyricsSong from "../lyrics/LyricsSong/LyricsSong";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useEffect, useState } from "react";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        

          <Route exact path="/albums">
            <Albums />
          </Route>

          <Route exact path="/podcast">
            <Podcast />
          </Route>

          <Route exact path='/lyricssongs'>
            <LyricsSong />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
