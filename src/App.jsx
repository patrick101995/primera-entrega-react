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
        <ItemListContainer greeting={"Bienvenido!!"}/>
        <CardComponent />
      </header>
    </div>
  );
}

export default App;
