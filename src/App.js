import "./App.css";
import NavBar from "./component/navbar/NavBar";
import Home from "./component/home/Home";
import Skills from "./component/skills/Skills";
import Portifolio from "./component/portifolio/Portifolio";
import Contacts from "./component/contact/Contacts";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Portifolio/>
      <Skills/>
      <Contacts/> 
    </div>
  );
}

export default App;
