import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUserAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { ImFilePdf } from "react-icons/im";
import "./header.css";
import styled from "styled-components";

export default function Intro() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container className="header">
      <div className="introContainer">
        {/* <Navbar
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
            <Button title="Home" variant="none" className="navBtns">
              <FaHome id="home" />
            </Button>
          </Link>
          <br></br>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <Button title="About Me" variant="none" className="navBtns">
              <FaUserAlt id="user" />
            </Button>
          </Link>
          <br></br>
          <Link
            to="projects"
            spy={true}
            offset={-25}
            smooth={true}
            duration={500}
          >
            <Button title="Projects" variant="none" className="navBtns">
              <FaLaptopCode id="code" />
            </Button>
          </Link>
          <br></br>
          <Button
            title="Message Me"
            variant="none"
            className="navBtns"
            onClick={() => setIsOpen(true)}
          >
            <SiMinutemailer id="mail" />
          </Button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} />
          <br></br>
          <Link to="footer" spy={true} smooth={true} duration={500}>
            <Button title="Footer" variant="none" className="navBtns">
              <GiFootprint id="redirect" />
            </Button>
          </Link>
        </Nav>
      </Navbar> */}
        <section>
          <h1>Matthew Castoreno</h1>
          <div className="paraDiv">
            <p>
              Front-end Developer & UI/UX Designer
              {/* Dedicated full-stack web developer with professional experience in
              Process Technology. Industrious Operator specialized in managing
              unit and software processing systems. In search of a challenging
              position that will enhance my expertise in web development. My
              technical and mechanical insight in managing unit operations,
              incorporated with a sentiment to gain further knowledge within web
              development, provides me with the confidence and excitement of
              joining an organization. */}
            </p>
          </div>
        </section>
        {/* <div className="navigationDiv">
          <div className="socials">
            <Link href="https://github.com/Castoreno05" target="_blank">
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/matthew-castoreno-4973a923b/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="Matthew Castoreno Resume.pdf"
              download="Matthew Castoreno Resume.pdf"
            >
              <ImFilePdf />
            </Link>
          </div>
          <div className="scroll">
            <Link to="about" spy={true} smooth={true} duration={500}>
              <BsArrowDownCircleFill />
            </Link>
          </div>
        </div> */}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  .introContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    section {
      h1 {
        color: black;
        text-align: center;
        font-size: 85px;
        font-family: 'Pacifico', cursive;
      }
      .paraDiv {
        p {
          font-weight: bold;
          font-size: 28px;
          text-align: center;
          color: black;
          margin-bottom: 0rem;
        }
      }
    }
    .navigationDiv {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-direction: column;
      .socials {
        display: flex;
        justify-content: center;
        a {
          svg {
            font-size: 48px;
            color: black;
          }
        }
      }
      .scroll {
        display: flex;
        justify-content: center;
        a {
          svg {
            font-size: 48px;
            color: black;
          }
        }
      }
    }
  }
  @media screen and (max-width: 745px) {
    .introContainer {
      section {
        h1 {
          font-size: 60px;
        }
        .paraDiv {
          p {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 520px) {
    .introContainer {
      section {
        h1 {
          font-size: 35px;
        }
        .paraDiv {
          p {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
