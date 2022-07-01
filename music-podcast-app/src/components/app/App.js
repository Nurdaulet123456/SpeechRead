// CSS
import "./App.css";
import "../../index.css";

// TODO: import others file
import Header from "../header/Header";
import Main from "../main/Main";
import Game from "../Game/Game";
import Translate from "../Translate/Translate";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
       <Header/>
        <Router>
          <Switch>
          <Route exact path='/'><Main/></Route>
           <Route exact path='/game'><Game/></Route>
           <Route exact path='/translate'><Translate/></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
