// CSS
import "./App.css";
import "../../index.css";

// Other Files and Hooks
import Main from "../main/Main";
import Albums from "../albums/Albums";
import Podcast from "../podcast/Podcast";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/main">
            <Albums />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/podcast">
            <Podcast />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
