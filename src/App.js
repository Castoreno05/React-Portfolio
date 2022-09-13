import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import "./app.css";


function App() {
  // const [content, setContent] = useState("about-me");

  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;


