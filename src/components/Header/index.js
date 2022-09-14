import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import {
  faAddressCard,
  faHouse,
  faDiagramProject,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import jsPDF from 'jspdf'
import resume from '../../Images/Resume.PNG'
import "./header.css";

export default function Header() {

  const pdfGenerate = () => {
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    doc.addImage(resume, 'PNG', 65,20,500,400)
    doc.save('resume.pdf')
    console.log('saved')
  }

  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" fixed="top" expand="xxl">
        <Navbar.Brand>
          <a href="https://github.com/Castoreno05/Project_3"/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href="/projects">
              <FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href="/about">
              <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
            </Nav.Link>
            <Button onClick={pdfGenerate}>
              Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section className="intro">
        <h1 className="name">Matthew Castoreno</h1>
        <div className="paragraphDiv">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur."
          </p>
        </div>
        <div className="socialLinks">
          <FontAwesomeIcon id="githubLink" icon={faEnvelope}></FontAwesomeIcon>
          <FontAwesomeIcon id="resumeLink" icon={faEnvelope}></FontAwesomeIcon>
          <FontAwesomeIcon
            id="linkedinLink"
            icon={faEnvelope}
          ></FontAwesomeIcon>
        </div>
      </section>
      <div className="arrowDown">
        <Link to="about" spy={true} smooth={true} duration={500}>
        <FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}
