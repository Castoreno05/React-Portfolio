import React from "react";
import Collapsible from "../Collapsible";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Applications</h1>
      <Container className="projectContainer">
        <Row className="projectRow">
          <Collapsible label="Bootcamp Blog">
            <div className="imageOne"></div>
            <p>
              The Bootcamp Blog is a MERN stack application that allows users to
              sign-up/log-in and post blogs for other users to read and comment
              on. Create posts in the dashboard and save them to your profile.
              If edits of the post need to be made, the options to delete or
              update are given. When a user submits a post to the homepage, any
              user <strong>currently</strong> signed in will have the
              oppoptunity to leave comments.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="Weather App">
            <div className="imageTwo"></div>
            <p>
              Created a Weather Application with the help of a third party API
              service. Enter a city name in the search bar and the application
              will make an API call to retrieve, then append live data onto the
              home page. The data consists of: tempurature, wind speed,
              humidity, and UV index for the current and five day forecast. Once
              a search has been made the application saves the city in local
              strorage. Doing this allows the user to generate another API call
              to get live results of the weather.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="Professional README Generator">
            <div className="imageThree"></div>
            <p>
              Utilize this command-line application to build a professional
              README.md for current or future projects. Answer the questions and
              give a brief description of the topics after the application has
              been installed and started in the integrated terminal. When the
              questions are finished the application will generate and store a
              README.md inside the Develop folder.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="Workday Planner">
            <div className="imageFour"></div>
            <p>
              Download this application to start tracking and planning your
              workday tasks. When the repository has been cloned, open the
              application within the browser. This application uses local date
              and time to display to the user the past, present, and future
              hours in a workday. Inside the time blocks, add a task and select
              the blue save button. The application will then save the task to
              local storage for future reference.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="codeQuiz">
            <div className="imageFive"></div>
            <p>
              Press play! This module will ask you 5 questions that will put
              your JavaScript, Developer Tools, and basic coding skills to the
              test. Each question is worth 20 points, so try to not miss! With
              every question that is missed, the timer drops 10 seconds,
              increasing the pressure on the player. When the timer runs out the
              game is over and the score that you ended with will display on the
              screen. A "Save initals" and "Input Field" will display. Save your
              initials, reset and play again!
            </p>
          </Collapsible>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
