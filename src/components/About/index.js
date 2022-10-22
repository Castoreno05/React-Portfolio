import React from "react";
// import Louvre from "../../Images/Louvre.jpg";
import "./about.css";

export default function About() {
  return (
    <section id="about">
      <div className="aboutSection">
        {/* <div className="picDiv">
          <img
            id="myPic"
            src={Louvre}
            alt="Matthew Castoreno at the Louvre Museum"
          ></img>
        </div> */}
        <div className="aboutDiv">
          <h2>About Me</h2>
          <p>
            Hello, my name is Matthew Castoreno. I am currently based out of the
            Houston, Texas area. Earlier this year, I made the decision to
            shift my career path and pursue web development. Prior to making
            that change, my professional career was in the Oil and Gas indusrty.
            Throughout my experience I was exposed to technology that sparked an interest in web development.
            I realized the enjoyment in creating applications using methods learned in operations. Moving forward with my new found passion, I aspire to collaborate on a team that sharpens my skills and encourages growth. In my free time
            I enjoy traveling, camping, hiking and staying physically active playing sports.
          </p>
        </div>
        <div className="contactDiv">
          <h2>Contact Information</h2>
          <p>Matthew Castoreno</p>
          <p>Houston, Texas</p>
          <p>matthew.castoreno@yahoo.com</p>
        </div>
      </div>
    </section>
  );
}
