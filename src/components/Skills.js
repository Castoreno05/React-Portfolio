import React from "react";
// import "./Skills/skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiReact,
  SiMongodb,
  SiHandlebarsdotjs,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { GiPipes } from "react-icons/gi";
import { AiFillTag, AiFillControl, AiFillDatabase } from "react-icons/ai";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import styled from "styled-components";

export default function Skills() {
  return (
    <Container className="skills">
      <div className="work">
        <h1>Experience</h1>
        <div className="historyContainer">
          <h3>The Lubrizol Corporation</h3>
          <p>
            <em>
              Blend Technician / Process Operator <span>• 2015-2020</span>{" "}
            </em>
          </p>
          <div className="skillColumn">
            Managed unit operations by utilizing a distributed control system to
            effectively and efficiently transfer finished products into storage
            tanks, rail cars and bulk trucks. Administered safety meetings that
            addressed abnormal field conditions, production flow and maintenance
            updates. Documented and entered required data for board and field
            operations. Field experience includes: troubleshooting, performing
            preventative maintenance on unit equipment and combining raw
            materials with additives into finished products using unit systems.
            Coordinated unit project involving Engineering, Maintenance,
            Instrumentation and Operations to supplement a 20% increase in
            production flow.
          </div>
        </div>
      </div>
      <div className="strengths">
        <h1>Skills</h1>
        <div className="groupContainer">
          <section className="groupSection">
            <p>
              HTML5
              <SiHtml5 />
            </p>
            <p>
              CSS
              <SiCss3 />
            </p>
            <p>
              JavaScript
              <SiJavascript className="javascript" />
            </p>
            <p>
              jQuery
              <SiJquery className="jquery" />
            </p>
            <p>
              SQL
              <AiFillDatabase className="sql" />
            </p>
          </section>
          <section className="groupSection">
            <p>
              React
              <SiReact />
            </p>

            <p>
              Node.js
              <DiJavascript1 />
            </p>

            <p>
              MySQL
              <GrMysql />
            </p>

            <p>
              MongoDB
              <SiMongodb />
            </p>

            <p>
              Handlebars
              <SiHandlebarsdotjs />
            </p>
          </section>
          <section className="groupSection">
            <p>
              P&IDs
              <GiPipes className="pipes" />
            </p>

            <p>
              Lock-out/Tag-out
              <span className="loto">
                <AiFillTag className="tag" />
              </span>
            </p>

            <p>
              Honeywell DCS
              <AiFillControl id="rogue" />
            </p>

            <p>
              SAP/SAP HANA
              <BsFillCloudArrowDownFill className="sap" />
            </p>

            <p>
              Bootstrap
              <FaBootstrap className="bootstrap" />
            </p>
          </section>
        </div>
      </div>
      <div className="education">
        <h1>Education</h1>
        <div className="educationContainer">
          <div className="educationSection">
            <h3>University of Texas - Austin, Texas</h3>
            <p>
              <em>
                Full-stack web development <span>• 2022</span>
              </em>
            </p>
            <div className="skillColumn">
              Created applications that applied front and back end development
              using a variety of languages, frameworks, servers and databases.
              Collaborated with cohorts to produce high-quality applications
              using HTML, CSS, JavaScript, MySQL, MongoDB, Express.js, React.js,
              Handlebars, Bootstrap and Materialize.
            </div>
          </div>
          <div className="educationSection">
            <h3>San Jacinto College - Pasadena, Texas</h3>
            <p>
              <em>
                A.A.S. Process Technology <span>• 2016</span>
              </em>
            </p>
            <div className="skillColumn">
              Completed the Associates of Applied Science degree in Process
              Technology with 20 trained hours operating the Honeywell
              Distributed Control System (DCS). Start-up and shut-down San
              Jacinto Central Glycol Unit. Identify and troubleshoot unit field
              equipment. Illustrated and analyzed piping and instrumentation
              diagrams.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  background-color: white;
  .work {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      padding: 2rem;
    }
    .historyContainer {
      width: 80%;
      text-align: center;
      .skillColumn {
        padding: 1rem;
      }
    }
  }
  .strengths {
    display: flex;
    flex-direction: column;
    h1 {
      text-align: center;
      padding: 2rem;
    }
    .groupContainer {
      display: flex;
      justify-content: space-evenly;
    }
  }
  .education {
    h1 {
      text-align: center;
      padding: 2rem;
    }
    .educationContainer {
      display: flex;
      .educationSection {
        text-align: center;
        padding 2rem;
      }
    }
  }
`;
