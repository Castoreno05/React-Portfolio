import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUserAlt,
} from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import "./header.css";

export default function Header() {
  return (
    <div className="header" id="header">
      <Navbar
        variant="dark"
        style={{
          position: "fixed",
          bottom: "25%",
          right: "3%",
          background: "gray",
          borderRadius: "30px",
          height: "375px",
          width: "80px",
          opacity: ".8"
        }}
      >
        {/* <Navbar.Brand>
          <a href="https://github.com/Castoreno05/Project_3" />
        </Navbar.Brand> */}
        {/* <Navbar.Toggle /> */}
        <Nav
          style={{
            margin: "auto",
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
            <Button variant="none" className="navBtns">
              <FaHome id="home" />
            </Button>
          </Link>
          <br></br>
          <Link
            to="projects"
            spy={true}
            offset={-95}
            smooth={true}
            duration={500}
          >
            <Button variant="none" className="navBtns">
              <FaLaptopCode id="code" />
            </Button>
          </Link>
          <br></br>
          <Link to="contact" spy={true} offset={-175} smooth={true} duration={500}>
            <Button variant="none" className="navBtns">
              <SiMinutemailer id="mail" />
            </Button>
          </Link>
          <br></br>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <Button variant="none" className="navBtns">
              <FaUserAlt id="user" />
            </Button>
          </Link>
          <br></br>
          <Link to="footer" spy={true} smooth={true} duration={500}>
          <Button variant="none" className="navBtns">
            <GiFootprint id="foot"/>
          </Button>
          </Link>
        </Nav>
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
      </section>
      <div className="arrowDown">
        <Link to="about" spy={true} smooth={true} duration={500}>
          <BsArrowDownCircleFill className="arrow" />
        </Link>
      </div>
    </div>
  );
}
