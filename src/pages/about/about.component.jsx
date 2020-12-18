import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import './about.style.css';

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Elisha Osoro Nyabuto</strong>
                <br />I am a passionate programmer and a learner. I am a Junior Front End Developer with Javascript, React.js, Redux, HTML,CSS and working through React native right now.
                <br />
                In January 23 2021 I will finish my Front end + Mobile development bootcamp through 'Nucamp'.
                <br />I love learning about new technologies, the problems that they solve and how can I use them to build better and scalable products.
                <br /> <br />
                <Row>
                  <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                          <a href='#contact'>
                            <Button className='m-2' variant='outline-primary'>
                              Let's talk
                            </Button>
                          </a>
                      </div>
                      <div>
                        <a href='https://www.linkedin.com/resume-builder/urn:li:fs_memberResume:8025937/?edit=true' target='_blank' rel='noopener noreferrer'>
                            <Button className='m-2' variant='outline-success'>
                              My Resume
                            </Button>
                        </a>
                      </div>
                      <div>
                        <a href='https://github.com/Enyabuto' target='_blank' rel='noopener noreferrer'>
                            <Button className='m-2' variant='outline-dark'>
                              Github
                            </Button>
                        </a>
                      </div>
                      <div>
                        <a href='https://www.linkedin.com/in/elisha-nyabuto-1636661bb/' target='_blank' rel='noopener noreferrer'>
                            <Button className='m-2' variant='outline-info'>
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