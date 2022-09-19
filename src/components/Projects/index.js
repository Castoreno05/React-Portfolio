import React from "react";
import Collapsible from "../Collapsible";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <Container className="projectContainer">
        <Row className="projectRow">
          <Collapsible label="Bootcamp Blog">
            <div className="imageOne"></div>
            <p>
              Lorem ipsum dolor sit amet, putent nostrum disputando cu pro. Ius
              modo maiorum cu, facilis ocurreret eu eos. Ei per vero error. Sed
              iudico causae eu, usu ea noster hendrerit.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="Weather App">
            <div className="imageTwo"></div>
            <p>
              Lorem ipsum dolor sit amet, putent nostrum disputando cu pro. Ius
              modo maiorum cu, facilis ocurreret eu eos. Ei per vero error. Sed
              iudico causae eu, usu ea noster hendrerit.Lorem ipsum dolor sit
              amet, putent nostrum disputando cu pro. Ius modo maiorum cu,
              facilis ocurreret eu eos. Ei per vero error. Sed iudico causae eu,
              usu ea noster hendrerit.Lorem ipsum dolor sit amet, putent nostrum
              disputando cu pro. Ius modo maiorum cu, facilis ocurreret eu eos.
              Ei per vero error. Sed iudico causae eu, usu ea noster hendrerit.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="Team Profile">
            <div className="imageThree"></div>
            <p>
              Lorem ipsum dolor sit amet, putent nostrum disputando cu pro. Ius
              modo maiorum cu, facilis ocurreret eu eos. Ei per vero error. Sed
              iudico causae eu, usu ea noster hendrerit.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="BG">
            <div className="imageFour"></div>
            <p>
              Lorem ipsum dolor sit amet, putent nostrum disputando cu pro. Ius
              modo maiorum cu, facilis ocurreret eu eos. Ei per vero error. Sed
              iudico causae eu, usu ea noster hendrerit.Lorem ipsum dolor sit
              amet, putent nostrum disputando cu pro. Ius modo maiorum cu,
              facilis ocurreret eu eos. Ei per vero error. Sed iudico causae eu,
              usu ea noster hendrerit.Lorem ipsum dolor sit amet, putent nostrum
              disputando cu pro. Ius modo maiorum cu, facilis ocurreret eu eos.
              Ei per vero error. Sed iudico causae eu, usu ea noster hendrerit.
            </p>
          </Collapsible>
        </Row>
      </Container>
    </div>
  );
}


