import React, { useState } from "react";
import styled from "styled-components";
import Me from "../Videos/MatthewC.png";
import { AiFillMail, AiFillPhone, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";
import { ContactMe } from "./ContactMe";

function Intro() {
  const [openModal, setOpenModal] = useState(false);
  const handleContact = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  return (
    <>
      <Container>
        <div className="leftContainer">
          <p>Full Stack Developer</p>
          <div className="contactInfo">
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
          </div>
          <div className="buttonDiv">
            <button>Download CV</button>
            <button onClick={handleContact}>Contact Me</button>
          </div>
        </div>
        <div className="rightContainer">
          <img src={Me} alt="Matthew Castoreno" />
          <h1>Matthew Castoreno</h1>
          <p>
            An experienced and dedicated professional with a proven ability to
            effectively communicate and display empathy in all interactions.
            These skills were honed through my rewarding career as a Process
            Operator in the Oil and Gas Industry. Seeking a full stack developer
            role in a collaborative and supportive work environment, where I can
            utilize my skills and knowledge to contribute to the success of the
            team.
          </p>
        </div>
      </Container>
      <AboutContainer>
        <button>
          Projects <AiOutlineArrowRight />
        </button>
      </AboutContainer>
      {openModal && (
        <Modal>
          <ContactMe setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: 2rem;
  padding-top: 4rem;
  background-color: white;
  .leftContainer {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 1rem;
    p {
      font-weight: bold;
      font-size: 50px;
      text-align: center;
      color: black;
      margin: 0rem;
    }
    .contactInfo {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      .email,
      .phone,
      .map {
        display: flex;
        align-items: center;
        gap: 5px;
        svg {
          margin: 0;
          font-size: 18px;
        }
        span {
          font-size: 20px;
        }
      }
    }
    .buttonDiv {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      gap: 8px;
      button {
        background: none;
        padding: 0.5rem;
        font-size: 16px;
        cursor: pointer;
        width: 150px;
        border-radius: 5px;
      }
      button:hover {
        background-color: black;
        color: white;
      }
    }
  }
  .rightContainer {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    img {
      margin: auto;
      border-radius: 10%;
      box-shadow: -1px 4px 35px 2px rgba(0, 0, 0, 0.59);
      height: 300px;
      width: 300px;
    }
    h1 {
      margin: 0;
      color: black;
      text-align: center;
      font-size: 50px;
      font-family: "Pacifico", cursive;
    }
    p {
      font-size: 18px;
      line-height: 2;
    }
  }
`;
const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 3rem;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background: none;
    padding: 0.5rem;
    font-size: 16px;
    cursor: pointer;
    width: 150px;
    border-radius: 5px;
  }
  button:hover {
    background-color: black;
    color: white;
  }
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 101vh;
  width: 100%;
  transform: translate(-50%, -50%);
  transition: 0.2s;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10000;
`;

export default Intro;
