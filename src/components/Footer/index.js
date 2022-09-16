import React from 'react'
import "./footer.css";
import { Nav, Navbar } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaFileCsv,
} from "react-icons/fa"
import { Link } from "react-scroll";
import jsPDF from "jspdf";
import resume from "../../Images/Resume.PNG";

export default function Footer() {
  
  const pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(resume, "PNG", 65, 20, 500, 400);
    doc.save("resume.pdf");
    console.log("saved");
  };

  return (
    <div className='footer' id='foot'>
      <div className='footerContainer'>
        <h1 className='ghPages'>Github Pages</h1>
        <Navbar variant="none">
          <Nav className='footerNav'>
            <Link to="header" spy={true} smooth={true} duration={500}>
              <p>Home</p></Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <p>About</p></Link>
            <Link to="skills" spy={true} smooth={true} duration={500}>
              <p>Skills</p></Link>
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <p>Projects</p></Link>
            <Link to="message" spy={true} smooth={true} duration={500}>
              <p>Contact</p></Link>
          </Nav>
        </Navbar>
        <div className="socialLinks">
          <a href="https://github.com/Castoreno05" target="_blank">
            <FaGithub id="githubLink" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-castoreno-4973a923b/"
            target="_blank"
          >
            <FaLinkedin id="linkedinLink" />
          </a>
          <a onClick={pdfGenerate}>
            <FaFileCsv id="resumeLink" />
          </a>
        </div>
      </div>
    </div>
  )
}
