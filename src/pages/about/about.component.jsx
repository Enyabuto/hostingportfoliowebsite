import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./about.style.css";


const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Elisha Osoro Nyabuto</strong>
                <br />
                Passionate front-end web developer with 3 years of experience
                using JavaScript, React, Node and HTML &CSS to build all aspects
                of the user experience and user interface for client-facing
                landing pages. Specializes using React, React Native and Redux
                to develop and implement high-responsive user interface
                components. Seeking to leverage broad development experience and
                hands-on technical expertise in a challenging role in front end
                development. A quick learner with relentless passion to improve
                my skills.
                <br /> <br />
                <Row>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://s3.amazonaws.com/attachments.angel.co/5642536-24aa180050d7708261487987ce428df0.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20210310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210310T001439Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1f16172d43d4ca262ac0568286620786d7bd76963088318e54b5c95b648c2f89"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/Enyabuto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-dark">
                          Github
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/elisha-nyabuto-1636661bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
