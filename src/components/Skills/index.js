import React from "react";
import "./skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiReact,
  SiMongodb,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { GrMysql, GrCloudSoftware } from "react-icons/gr";
import { GiPipes } from "react-icons/gi";
import { AiFillTag, AiFillControl } from "react-icons/ai";

export default function Skills() {
  return (
    <div className="skills">
      <div className="education">
        <h3 className="skillTitle">Education</h3>
        <div className="education-columns">
          <h2>University of Texas - Austin, Texas</h2>
          <p className="info">
            <em>Full-stack web development</em> <span>•</span> 2022
          </p>
          <div className="skillColumn">
            Worked on course material in a timely manner and created applications that were assigned based on . Collaborated with cohorts to produce high-quality
            applications using HTML, CSS, Javascript, MySQL, MongoDB,
            Express.js, React.js, Handlebars, Bootstrap and Materialize.
          </div>
          <h2>San Jacinto College - Pasadena, Texas</h2>
          <p className="info">
            <em>A.A.S. Process Technology</em> <span>•</span> 2016
          </p>
          <div className="skillColumn">
            Operated the Honeywell Distributed Control System (DCS) to start-up and shut-down San Jacinto Central Glycol Unit.

          </div>
        </div>
      </div>
      <div className="work">
        <h3 className="skillTitle">Work</h3>
        <div className="work-columns">
          <h2>Eurecat US Inc</h2>
          <p className="info">
            <em>Process Operator</em> <span>•</span> 2022
          </p>
          <div className="skillColumn">
            Facillitated unit safety walk-throughs to inspect unit equipment
            and verified that it complies with operation standards. Recorded and accounted for data
            relating to production recipe. Met deadlines to produce quality
            finished batches, while following safety practices and procedures.
            Off-loaded acid bulk trucks into storgage vessel's. Presented a
            project to management that would increase productivity by 20%.
            Assigned project manager to implement new feed line into blender tank to increase the rate of flow.
          </div>
          <h2>The Lubrizol Corporation</h2>
          <p className="info">
            <em>Blend Technician / </em>
            <em>Process Operator</em> <span>•</span> 2015-2020
          </p>
          <div className="skillColumn">
            Managed unit operations by utilizing a distributed control system to
            effectively and efficiently transfer finished products into storage
            tanks, rail cars and bulk trucks. Led safety meetings that addressed
            abnormal field conditions, production flow and maintenence updates.
            Documented and entered required data for board and field operations.
            Field experience includes: troubleshooting, performing preventative
            maintenence on unit equipment and combined raw materials with additives
            into finished products using unit systems.
          </div>
        </div>
      </div>
      <div className="strengths">
        <h3 className="skillTitle">Skills</h3>
        <Container className="groupContainer">
          <Row>
            <p>
              HTML5
              <span className="skillIcon">
                <SiHtml5 />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              CSS
              <span className="skillIcon">
                <SiCss3 />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              Javascript
              <span className="skillIcon">
                <SiJavascript />
              </span>
            </p>
          </Row>
          <span>Intermediate</span>
          <br></br>
          <Row>
            <p>
              jQuery
              <span className="skillIcon">
                <SiJquery />
              </span>
            </p>
          </Row>
          <span>Intermediate</span>
        </Container>
        <Container className="groupContainer">
          <Row>
            <p>
              React
              <span className="skillIcon">
                <SiReact />
              </span>
            </p>
          </Row>
          <span>Intermediate</span>
          <br></br>
          <Row>
            <p>
              Express.js
              <span className="skillIcon">
                <DiJavascript1 />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              MySQL
              <span className="skillIcon">
                <GrMysql />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              MongoDB
              <span className="skillIcon">
                <SiMongodb />
              </span>
            </p>
          </Row>
          <span>Intermediate</span>
        </Container>
        <Container className="groupContainer">
          <Row>
            <p>
              P&IDs
              <span className="skillIcon">
                <GiPipes />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              Lock-out/Tag-out
              <span className="skillIcon">
                <AiFillTag />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              Honeywell DCS
              <span className="skillIcon">
                <AiFillControl id="rogue" />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              SAP/SAP HANA
              <span className="skillIcon">
                <GrCloudSoftware />
              </span>
            </p>
          </Row>
          <span>Intermediate</span>
        </Container>
      </div>
    </div>
  );
}
