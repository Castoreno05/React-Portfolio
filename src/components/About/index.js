import React from "react";
import Louvre from "../../Images/Louvre.jpg";
import "./about.css";

export default function About() {
  return (
    <section id="about">
      <div className="aboutSection">
        <div className="picDiv">
          <img
            id="myPic"
            src={Louvre}
            alt="Matthew Castoreno at the Louvre Museum"
          ></img>
        </div>
        <div className="aboutDiv">
          <h2>About Me</h2>
          <p>
            Hello, my name is Matthew Castoreno. I am currently based out of the
            Houston, Texas area. Earlier this year, I made the decision to
            change my career path, and pursue web development. Prior to making
            that change, my professional career was in the Oil and Gas indusrty.
            Throughout that journey I obtained aspirations of utilizing  
          </p>
        </div>
      </div>
    </section>
  );
}
