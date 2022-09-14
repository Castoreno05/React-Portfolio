import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item interval={2000}>
                <a
                  href="https://github.com/Castoreno05/BootcampBlog"
                  target="_blank"
                >
                  <img
                    className="d-block w-100 imageOne"
                    style={{ height: "500px" }}
                  />
                </a>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <a
                  href="https://github.com/Castoreno05/WeatherApp"
                  target="_blank"
                >
                  <img
                    className="d-block w-100 imageTwo"
                    style={{ height: "500px" }}
                  />
                </a>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <a
                  href="https://github.com/Castoreno05/TeamProfileGenerator"
                  target="_blank"
                >
                  <img
                    className="d-block w-100 imageThree"
                    style={{ height: "500px" }}
                  />
                </a>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
