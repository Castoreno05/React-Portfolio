import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./app.css";

function App() {

  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;


