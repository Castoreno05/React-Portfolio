import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faHouse, faDiagramProject, faFile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" fixed="top" expand="xxl">
        <Navbar.Brand>
          <a href="https://github.com/Castoreno05/Project_3">
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link
              href="/"
            >
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link
              href="/projects"
            >
              <FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link
              href="/about"
            >
              <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link
              href="/resume"
            >
              <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section className="intro">
        <h1 className="name">Matthew Castoreno</h1>
        <div className="paragraphDiv">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
        </div>
        <div className="socialLinks">
        <FontAwesomeIcon id="githubLink" icon={faEnvelope}></FontAwesomeIcon>
        <FontAwesomeIcon id="resumeLink" icon={faEnvelope}></FontAwesomeIcon>
        <FontAwesomeIcon id="linkedinLink" icon={faEnvelope}></FontAwesomeIcon>
        </div>
      </section>
    </div>
  );
}

