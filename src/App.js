import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Images from "./Images/myBG.jpg"
import "./Portfolio.css";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("about-me");

  return (
    <div className="App">
      <Header />
      <About />
      {content === "portfolio" && <Portfolio />}
      {content === "contact" && <Contact />}
    </div>
  );
}

export default App;
