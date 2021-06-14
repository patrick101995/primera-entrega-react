import logo from "./logo.svg";
import "./App.css";
import { CardComponent } from "./components/index.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <img src="..." alt="hola" />
        <div style={{ backgroundColor: "#eeee" }}></div>
        <CardComponent />
      </header>
    </div>
  );
}

export default App;
