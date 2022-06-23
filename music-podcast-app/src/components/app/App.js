// CSS
import "./App.css";
import "../../index.css";

// TODO: import others file
import Header from "../header/Header";
import Main from "../main/Main";
import Game from "../Game/Game";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
