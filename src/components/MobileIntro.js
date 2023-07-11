import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Me from "../Videos/MatthewC.png";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";
import { MobileContactMe } from "./MobileContactMe";

function MobileIntro() {
  const [showFullText, setShowFullText] = useState(false);
  const introText =
    "An experienced and dedicated professional with a proven ability to effectively communicate and display empathy in all interactions. These skills were honed through my rewarding career as a Process Operator in the Oil and Gas Industry. Seeking a full stack developer role in a collaborative and supportive work environment, where I can utilize my skills and knowledge to contribute to the success of the team. ";

  const shortenText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, text.lastIndexOf(" ", maxLength)) + "... ";
  };
  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <Container>
      <div className="header">
        <div className="imageDiv">
          <img src={Me} alt="Matthew Castoreno" />
          <h1>Matthew Castoreno</h1>
        </div>
        <div className="info">
          <div className="email">
            <AiFillMail />
            <span>matthew.castoreno@yahoo.com</span>
          </div>
          <div className="phone">
            <AiFillPhone />
            <span>(832) 433-4371</span>
          </div>
          <div className="map">
            <BsFillPinMapFill />
            <span>Houston, Texas</span>
          </div>
          <div className="buttonDiv">
            <a href="MatthewCastoreno.pdf" download="MatthewCastoreno.pdf">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="title">
          <h2>Full Stack Developer</h2>
        </div>
        <div className="description">
          <p>
            {showFullText ? introText : shortenText(introText, 180)}
            {showFullText ? (
              <a href="#" onClick={handleToggleText}>
                show less
              </a>
            ) : (
              <a href="#" onClick={handleToggleText}>
                show more
              </a>
            )}
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="contactTitle">
          <h2>Contact Me</h2>
        </div>
        <MobileContactMe />
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.25rem;
  padding-top: 2rem;
  .header {
    display: flex;
    justify-content: center;
    gap: 3px;
    .imageDiv {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      img {
        height: 125px;
        width: 125px;
        border-radius: 50%;
        box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.42);
      }
      h1 {
        white-space: nowrap;
        font-size: 18px;
      }
    }
    .info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 3px;
      .email,
      .phone,
      .map {
        display: flex;
        align-items: center;
        gap: 5px;
        svg {
          margin: 0;
          font-size: 14px;
        }
        span {
          font-size: 14px;
        }
      }
      .buttonDiv {
        display: flex;
        justify-content: center;
        padding-top: 0.25rem;
        gap: 5px;
        a {
          text-decoration: none;
          border: solid black 1.5px;
          color: inherit;
          background: none;
          padding: 0.25rem;
          font-size: 14px;
          border-radius: 5px;
        }
        a:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }
  .intro {
    .title {
      h2 {
        font-size: 16px;
        text-align: center;
      }
    }
    .description {
      p {
        white-space: normal;
      }
    }
  }
  .contact {
    .contactTitle {
      h2 {
        font-size: 16px;
        text-align: center;
      }
    }
  }
  //   .serviceContainer {
  //     .serviceTitle {
  //       h2 {
  //         font-size: 16px;
  //         text-align: center;
  //       }
  //     }
  //     .services {
  //       display: grid;
  //       grid-template-columns: repeat(2, 1fr);
  //       .service {
  //         h3 {
  //           font-size: 14px;
  //           text-align: center;
  //         }
  //       }
  //     }
  //   }
`;

export default MobileIntro;
