import "./App.css";
import NavBar from "./component/navbar/NavBar";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Portifolio from "./component/portifolio/Portifolio";
import Contacts from "./component/contact/Contacts";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Skills/>
      <Portifolio/>
      <Contacts/> 
    </div>
  );
}

export default App;
