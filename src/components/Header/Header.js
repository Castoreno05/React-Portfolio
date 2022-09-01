import React from "react";
import Download from "../Downloads/Download"
import Nav from "../Navbar/Nav"
import "../Header/Header.css";

export default function Header() {
  return (
    <div className="container-header">
      <Nav/>
      <h6 className="about">Welcome, I'm</h6>
      <h1 className="about">Matthew Castoreno</h1>
      <div className="about imageDiv"></div>
      <h6 className="about">Full Stack Web Developer</h6>
      <Download />
    </div>
  );
}
