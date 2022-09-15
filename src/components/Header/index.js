import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import {
  faPhone,
  faHouse,
  faFileCode,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import jsPDF from "jspdf";
import resume from "../../Images/Resume.PNG";
import "./header.css";

export default function Header() {
  const pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(resume, "PNG", 65, 20, 500, 400);
    doc.save("resume.pdf");
    console.log("saved");
  };

  return (
    <div className="header" id="header">
      <Navbar
        variant="dark"
        style={{ position: "fixed", bottom: "40%", right: "0", width: "150px" }}
      >
        {/* <Navbar.Brand>
          <a href="https://github.com/Castoreno05/Project_3" />
        </Navbar.Brand> */}
        {/* <Navbar.Toggle /> */}
        {/* <Navbar.Collapse> */}
        <Nav
          style={{
            display: "flex",
            flexDirection: "column",
            width: "auto",
          }}
        >
          <Link
            to="header"
            spy={true}
            smooth={true}
            duration={500}
            style={{ width: "auto" }}
          >
            <Button>
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </Button>
          </Link>
          <br></br>
          <Link to="projects" spy={true} offset={-200} smooth={true} duration={500}>
            <Button>
              <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
            </Button>
          </Link>
          <br></br>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            </Button>
          </Link>
          <br></br>
          <Button onClick={pdfGenerate}>Resume</Button>
        </Nav>
        {/* </Navbar.Collapse> */}
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
        <h3>About Me</h3>
        <Link to="about" spy={true} smooth={true} duration={500}>
          <FontAwesomeIcon
            className="arrow"
            icon={faArrowCircleDown}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}
