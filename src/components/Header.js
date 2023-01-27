import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState("navButtons");
  const [close, setClose] = useState(false);
  const [svg, setSvg] = useState(false);

  const changeClass = () => {
    setClose(!close);
    if (open === "navButtons") {
      setOpen("navButtons active");
    } else {
      setOpen("navButtons");
    }
    setTimeout(() => {
      setSvg(!svg);
    }, 500);
  };

  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <h1>M.C.C.</h1>
        </Link>
      </div>
      <div className="navBar">
        {svg ? (
          <AiOutlineClose onClick={changeClass} />
        ) : (
          <GrMenu onClick={changeClass} />
        )}
      </div>
      <div className={open}>
        <ul>
          <li>
            <Link onClick={changeClass} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={changeClass}>Projects</Link>
          </li>
          <li>
            <Link to="/skills" onClick={changeClass}>Skills</Link>
          </li>
          <li>Contact Me</li>
        </ul>
        <AiOutlineClose onClick={changeClass} />
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
  height: 30px;
  background-color: white;
  .logo {
    cursor: pointer;
    a {
      text-decoration: none;
      color: inherit;
      h1 {
        font-size: 28px;
        font-family: "Pacifico", cursive;
      }
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
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    top: -30%;
    right: 1%;
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
      gap: 1rem;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      list-style: none;
      padding: 1rem;
      li {
        font-size: 20px;
        a {
          color: inherit;
          text-decoration: none;
        }
      }
    }
    svg {
      cursor: pointer;
      position: relative;
      left: 92%;
      top: -5%;
    }
  }
  .navButtons.active {
    transition: 500ms ease-in-out;
    top: 0;
  }
  @media screen and (max-width: 600px) {
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
      svg {
        display: none;
      }
    }
    .navButtons.active {
      transition: 850ms;
      top: 10%;
      right: 0;
    }
  }
  @media screen and (max-width: 400px) {
    .navButtons {
      ul {
        gap: 0rem;
        li {
          font-size: 14px;
        }
      }
    }
  }
`;
