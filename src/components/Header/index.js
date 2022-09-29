import React, { useState } from "react";
import Modal from "../Modal";
import "./header.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUserAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { ImFilePdf } from "react-icons/im";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
          opacity: ".8",
        }}
      >
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
            offset={20}
            smooth={true}
            duration={500}
          >
            <Button variant="none" className="navBtns">
              <FaLaptopCode id="code" />
            </Button>
          </Link>
          <br></br>
          <Button
            variant="none"
            className="navBtns"
            onClick={() => setIsOpen(true)}
          >
            <SiMinutemailer id="mail" />
          </Button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} />
          <br></br>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <Button variant="none" className="navBtns">
              <FaUserAlt id="user" />
            </Button>
          </Link>
          <br></br>
          <Link to="footer" spy={true} smooth={true} duration={500}>
            <Button variant="none" className="navBtns">
              <GiFootprint id="foot" />
            </Button>
          </Link>
        </Nav>
      </Navbar>
      <section className="intro">
        <h1 className="name">Matthew Castoreno</h1>
        <div className="paragraphDiv">
          <p>
            Dedicated Full-stack web developer with professional experience in
            Process Technology. Industrious Operator specialized in managing
            unit/software processing systems. Currently in pursuit of a
            challenging position that will increase my knowledge in this field.
            I enjoy utilizing my skills and experience to solve time sensitive
            and complex problems.
          </p>
        </div>
      </section>
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
          <ImFilePdf id="resumeLink" />
        </a>
      </div>
      <div className="arrowDown">
        <Link to="about" spy={true} smooth={true} duration={500}>
          <BsArrowDownCircleFill className="arrow" />
        </Link>
      </div>
    </div>
  );
}
