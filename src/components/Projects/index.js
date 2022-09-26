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
              update are given. When a user has posted to the homepage, any user
              that is <strong>currently</strong> signed in will have the
              oppoptunity to leave comments.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="Weather App">
            <div className="imageTwo"></div>
            <p>
              Created a Weather App with the help of a third party API service.
              Enter a city name in the search bar and the application will make
              an API call to retrieve then append live data onto the homepage.
              The data consists of: tempurature, wind speed, humidity, and UV
              index for the current and five day forcast. Once a search has been
              made the application saves the search in local strorage. Doing
              this allows the user to generate another API call to get live
              results of the weather.
            </p>
          </Collapsible>
        </Row>
        <Row className="projectRow">
          <Collapsible label="Team Profile">
            <div className="imageThree"></div>
            <p>
              <strong>User Story </strong>
              <br></br>
              AS A social media startup
              <br></br>I WANT an API for my social network that uses a NoSQL
              database
              <br></br>
              SO THAT my website can handle large amounts of unstructured data
              <br></br>
              <br></br>
              <strong>Criteria</strong>
              <br></br>
              GIVEN a social network API
              <br></br>
              WHEN I enter the command to invoke the application
              <br></br>
              THEN my server is started and the Mongoose models are synced to
              the MongoDB database
              <br></br>
              WHEN I open API GET routes in Insomnia for users and thoughts
              <br></br>
              THEN the data for each of these routes is displayed in a formatted
              JSON
              <br></br>
              WHEN I test API POST, PUT, and DELETE routes in Insomnia
              <br></br>
              THEN I am able to successfully create, update, and delete users
              and thoughts in my database
              <br></br>
              WHEN I test API POST and DELETE routes in Insomnia
              <br></br>
              THEN I am able to successfully create and delete reactions to
              thoughts and add and remove friends to a user’s friend list
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
