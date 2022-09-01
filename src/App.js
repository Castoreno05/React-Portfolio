import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
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
      {/* <Nav setContent={setContent}></Nav> */}
      {content === "portfolio" && <Portfolio />}
      {content === "contact" && <Contact />}
    </div>
  );
}

export default App;
