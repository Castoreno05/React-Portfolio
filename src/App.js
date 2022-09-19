import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import "./app.css";


function App() {
  // const [content, setContent] = useState("about-me");

  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;


