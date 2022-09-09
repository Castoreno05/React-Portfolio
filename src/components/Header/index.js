import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" sticky="top" expand="xxl">
        <Navbar.Brand>
          <a href="https://github.com/Castoreno05/Project_3">
          <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          </a>
          Matthew Castoreno
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link
              href="/"
              // onClick={() => handlePageChange("Home")}
              // className={
              //   currentPage === "Home" ? "nav-link active" : "nav-link"
              // }
            >
              {/* <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home */}
            </Nav.Link>
            <Nav.Link
              href="/dashboard"
              // onClick={() => handlePageChange("Dashboard")}
              // className={
              //   currentPage === "Dashboard" ? "nav-link active" : "nav-link"
              // }
            >
              {/* <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon> Dashboard */}
            </Nav.Link>
            <Nav.Link
              href="/resources"
              // onClick={() => handlePageChange("Resources")}
              // className={
              //   currentPage === "Resources" ? "nav-link active" : "nav-link"
              // }
            >
              {/* <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon> Resources */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section className="aboutMe"></section>
    </div>
  );
}

/* <div>
          <Nav />
        </div>
        <div>
          <h6 className="about">Welcome, I'm</h6>
          <h1 className="about">Matthew Castoreno</h1>
          <div className="about imageDiv"></div>
          <h6 className="about">Full Stack Web Developer</h6>
        </div> */
