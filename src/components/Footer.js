import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <h1>Github Pages</h1>
      <div className="footerNav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
      <div className="rights">
        <p>© Github Pages and Matthew Castoreno. All rights reserved.</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  padding: 2rem;
  h1 {
    padding: 1rem;
    padding-top: 0;
    color: white;
    text-align: center;
    margin: 0;
  }
  .footerNav {
    display: flex;
    padding: 1rem;
    gap: 2rem;
    justify-content: center;
    a {
      text-decoration: none;
      color: white;
    }
  }
  .rights {
    p {
      padding: 1rem;
      text-align: center;
      color: white;
      margin: 0;
    }
  }
`;
