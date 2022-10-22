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
import { GrMysql } from "react-icons/gr";
import { GiPipes } from "react-icons/gi";
import { AiFillTag, AiFillControl } from "react-icons/ai";
import { BsFillCloudArrowDownFill } from "react-icons/bs";

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
            Created applications that applied front and back end development
            using a variety of languages, frameworks, servers and databases.
            Collaborated with cohorts to produce high-quality applications using
            HTML, CSS, JavaScript, MySQL, MongoDB, Express.js, React.js,
            Handlebars, Bootstrap and Materialize.
          </div>
          <h2>San Jacinto College - Pasadena, Texas</h2>
          <p className="info">
            <em>A.A.S. Process Technology</em> <span>•</span> 2016
          </p>
          <div className="skillColumn">
            Completed the Associates of Applied Science degree in Process
            Technology with 20 trained hours operating the Honeywell Distributed
            Control System (DCS). Start-up and shut-down San Jacinto Central
            Glycol Unit. Identify and troubleshoot unit field equipment.
            Illustrated and analyzed piping and instrumentation diagrams.
          </div>
        </div>
      </div>
      <div className="work">
        <h3 className="skillTitle">Experience</h3>
        <div className="work-columns">
          {/* <h2>Eurecat US Inc</h2>
          <p className="info">
            <em>Process Operator</em> <span>•</span> 2022
          </p>
          <div className="skillColumn">
            Facillitated unit safety walk-throughs to inspect unit equipment and
            verified that it complies with operation standards. Recorded and
            accounted for data relating to production recipe. Met deadlines to
            produce quality finished batches, while following safety practices
            and procedures. Off-loaded acid bulk trucks into storgage vessel's.
            Assigned project manager to implement new feed line into blender
            tank to increase the rate of flow.
          </div> */}
          <h2>The Lubrizol Corporation</h2>
          <p className="info">
            <em>Blend Technician / </em>
            <em>Process Operator</em> <span>•</span> 2015-2020
          </p>
          <div className="skillColumn">
            Managed unit operations by utilizing a distributed control system to
            effectively and efficiently transfer finished products into storage
            tanks, rail cars and bulk trucks. Administered safety meetings that addressed
            abnormal field conditions, production flow and maintenance updates.
            Documented and entered required data for board and field operations.
            Field experience includes: troubleshooting, performing preventative
            maintenance on unit equipment and combining raw materials with
            additives into finished products using unit systems. Coordinated
            unit project involving Engineering, Maintenance, Instrumentation and Operations to
            supplement a 20% increase in production flow.
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
                <SiHtml5 className="html" />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              CSS
              <span className="skillIcon">
                <SiCss3
                  style={{ color: "#264de4", height: "25px", width: "25px" }}
                />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              JavaScript
              <span className="skillIcon">
                <SiJavascript className="javascript" />
              </span>
            </p>
          </Row>
          <span>Intermediate</span>
          <br></br>
          <Row>
            <p>
              jQuery
              <span className="skillIcon">
                <SiJquery className="jquery" />
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
                <SiReact className="react" />
              </span>
            </p>
          </Row>
          <span>Intermediate</span>
          <br></br>
          <Row>
            <p>
              Node.js
              <span className="skillIcon">
                <DiJavascript1 className="node" />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              MySQL
              <span className="skillIcon">
                <GrMysql className="mysql" />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              MongoDB
              <span className="skillIcon">
                <SiMongodb className="mongo" />
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
                <GiPipes className="pipes" />
              </span>
            </p>
          </Row>
          <span>Experienced</span>
          <br></br>
          <Row>
            <p>
              Lock-out/Tag-out
              <span className="loto">
                <AiFillTag className="tag" />
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
                <BsFillCloudArrowDownFill className="sap" />
              </span>
            </p>
          </Row>
          <span>Intermediate</span>
        </Container>
      </div>
    </div>
  );
}
