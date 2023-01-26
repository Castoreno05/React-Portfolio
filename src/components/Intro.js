import React from "react";
// import { Link } from "react-scroll";
// import { FaHome, FaUserAlt, FaGithub, FaLinkedin } from "react-icons/fa";
// import { GiFootprint } from "react-icons/gi";
// import { BsArrowDownCircleFill } from "react-icons/bs";
// import { SiMinutemailer } from "react-icons/si";
// import { FaLaptopCode } from "react-icons/fa";
// import { ImFilePdf } from "react-icons/im";
import styled from "styled-components";

export default function Intro() {
  return (
    <Container className="header">
      <div className="introContainer">
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
  background-color: white;
  padding: 2rem;
  padding-top: 0;
  .introContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    section {
      h1 {
        margin: 0;
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
          margin: 0rem;
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
