import logo from "./logo.svg";
import "./App.css";
import { CardComponent } from "./components/CardComponent/index.jsx";
import { NavBar } from "./components//NabBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-9"></div>
              <ItemListContainer greeting={"Bienvenido!!"}/>
            </div>
          </div>
        </div>
  );
}

export default App;
