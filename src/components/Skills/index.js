import React from "react";
import "./skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Skills() {
  return (
    <div className="skills">
      <div className="education">
        <h3 className="skillTitle">Education</h3>
        <div className="education-columns">
          <h2>University of Texas - Austin, Texas</h2>
          <p className="info"><em>Full-stack web development</em> <span>•</span> 2022</p>
          <div className="skillColumn">
            HTML, CSS, Javascript, MySQL, MongoDB, Express, React.js
          </div>
          <h2>San Jacinto College - Pasadena, Texas</h2>
          <p className="info"><em>Process Technology</em> <span>•</span> 2016</p>
          <div className="skillColumn">
            Ei omittam disputationi concludaturque per, cum ex labores appareat.
            Eam maiestatis dissentiunt ut. At mel altera aperiri mandamus. Eam
            offendit scripserit te.Ei omittam disputationi concludaturque per,
            cum ex labores appareat. Eam maiestatis dissentiunt ut. At mel
            altera aperiri mandamus. Eam offendit scripserit te.
          </div>
        </div>
      </div>
      <div className="work">
        <h3 className="skillTitle">Work</h3>
        <div className="work-columns">
          <h2>Eurecat US Inc</h2>
          <p className="info"><em>Process Operator</em> <span>•</span> 2022</p>
          <div className="skillColumn">
            Ei omittam disputationi concludaturque per, cum ex labores appareat.
            Eam maiestatis dissentiunt ut. At mel altera aperiri mandamus. Eam
            offendit scripserit te.Ei omittam disputationi concludaturque per,
            cum ex labores appareat. Eam maiestatis dissentiunt ut. At mel
            altera aperiri mandamus. Eam offendit scripserit te.
          </div>
          <h2>The Lubrizol Corporation</h2>
          <p className="info"><em>Process Operator</em> <span>•</span> 2016-2020</p>
          <div className="skillColumn">
            Ei omittam disputationi concludaturque per, cum ex labores appareat.
            Eam maiestatis dissentiunt ut. At mel altera aperiri mandamus. Eam
            offendit scripserit te.Ei omittam disputationi concludaturque per,
            cum ex labores appareat. Eam maiestatis dissentiunt ut. At mel
            altera aperiri mandamus. Eam offendit scripserit te.
          </div>
        </div>
      </div>
      <div className="strengths">
        <h3 className="skillTitle">Skills</h3>
        <Container className="groupContainer">
          <Row>
            Skill 1
          </Row>
          <Row>
            Skill 2
          </Row>
          <Row>
            Skill 3
          </Row>
        </Container>
        <Container className="groupContainer">
          <Row>
            Skill 1
          </Row>
          <Row>
            Skill 2
          </Row>
          <Row>
            Skill 3
          </Row>
        </Container>
        <Container className="groupContainer">
          <Row>
            Skill 1
          </Row>
          <Row>
            Skill 2
          </Row>
          <Row>
            Skill 3
          </Row>
        </Container>
      </div>
    </div>
  );
}
