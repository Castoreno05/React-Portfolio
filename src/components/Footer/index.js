import React, { useState } from "react";
import Modal from "../Modal";
import "./footer.css";
import { Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFileCsv } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="footer" id="foot">
      <div className="footerContainer">
        <h1 className="ghPages">Github Pages</h1>
        <Navbar variant="none" style={{ justifyContent: "center" }}>
          <Nav className="footerNav">
            <Link to="header" spy={true} smooth={true} duration={500}>
              <p>Home</p>
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <p>About</p>
            </Link>
            <Link
              className="reset"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p>Skills</p>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <p>Projects</p>
            </Link>
            <Link
              to="message"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(true)}
            >
              <p>Contact</p>
            </Link>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} />
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
          <a
            href="Matthew Castoreno Resume.pdf"
            download="Matthew Castoreno Resume.pdf"
          >
            <FaFileCsv id="resumeLink" />
          </a>
        </div>
        <div classname="rights">
          <p>© Github Pages and Matthew Castoreno. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
