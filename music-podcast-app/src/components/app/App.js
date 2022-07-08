// CSS
import "./App.css";
import "../../index.css";

// TODO: import others file
import {Header} from "../header/Header";
import Main from "../main/Main";
import Game from "../Game/Game";
import Translate from "../Translate/Translate";
import Profile from "../profile/Profile";
import PrivateRoutes from "../utils/PrivateRoutes";
import EditProfile from "../profile/Edit-Profile/Edit-Profile";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Helmet } from 'react-helmet'


function App() {
  return (
    <div className="app">
     <Header/>
        <Router>
          <Switch>
          <Route exact path='/'><Main/></Route>
           <PrivateRoutes exact path='/game'><Game/></PrivateRoutes>
           <PrivateRoutes exact path='/translate'><Translate/></PrivateRoutes>
           <PrivateRoutes exact path='/profile'><Profile/></PrivateRoutes>
           <PrivateRoutes exact path='/edit/'><EditProfile/></PrivateRoutes>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
