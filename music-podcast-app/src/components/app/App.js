// CSS
import "./App.css";
import "../../index.css";

// Other Files and Hooks
import Main from "../main/Main";
import Albums from "../albums/Albums";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/main">
            <Main/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Albums />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
