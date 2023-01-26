import React, { useState } from "react";
import styled from "styled-components";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [close, setClose] = useState("navButtons");
  const [menuBar, setMenuBar] = useState(false);

  const changeClass = () => {
    setMenuBar(!menuBar);
    if (close === "navButtons") {
      setClose("navButtons active");
    } else {
      setClose("navButtons");
    }
  };

  return (
    <Container>
      <div className="logo">
        <h1>M.C.C.</h1>
      </div>
      <div className="navBar">
        {menuBar ? (
          <AiOutlineClose onClick={changeClass} />
        ) : (
          <GrMenu onClick={changeClass} />
        )}
      </div>
      <div className={close}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  width: 100%;
  border-bottom: solid black 0.025rem;
  padding: 1rem;
  height: 40px;
  background-color: white;
  .logo {
    cursor: pointer;
    h1 {
      font-size: 32px;
      font-family: "Pacifico", cursive;
    }
  }
  .navBar {
    svg {
      padding-right: 3rem;
      font-size: 32px;
      cursor: pointer;
    }
  }
  .navButtons {
    display: flex;
    justify-content: center;
    position: fixed;
    top: -30%;
    right: 10%;
    width: 300px;
    height: 25vh;
    background-color: white;
    border: solid black 0.1rem;
    border-top: none;
    transition: 500ms ease-in-out;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      list-style: none;
      padding: 1rem;
      li {
        font-size: 20px;
      }
    }
  }
  .navButtons.active {
    transition: 500ms ease-in-out;
    top: 0;
  }
  @media screen and (max-width: 650px) {
    .navButtons {
      background-color: transparent;
      width: 100%;
      height: 8vh;
      top: 10%;
      right: -100%;
      border: none;
      transition: 850ms;
      ul {
        flex-direction: row;
        gap: 2rem;
        li {
          font-weight: bold;
        }
      }
    }
    .navButtons.active {
      transition: 850ms;
      top: 10%;
      right: 0;
    }
  }
`;
