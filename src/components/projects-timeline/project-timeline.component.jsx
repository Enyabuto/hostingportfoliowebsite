import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

//Projects logo or picture.
import InstagramClone from '../../assets/img/projects/instagram-clone.webp';
import LoginPage from '../../assets/img/projects/loginpage.webp';

// skills used in projects
import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

import './projects-timeline.styles.css';



const ProjectTimeline = () => {
    return (
        <div id='projects'>
            <h1 className='pt-3 text-center font-details-b pb-3'>PROJECTS</h1>
            <Timeline>
                <Events>
                <ImageEvent
                    date="11/30/2020"
                    className="text-center"
                    text="Instagram-clone"
                    src={InstagramClone}
                    alt="Instagram-clone"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey="0"
                                        className="p-2 text-center accordian-main"
                                    >
                                        PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong>This is an instagram-clone created with react and mnay other stuff.
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>You have to be logged in to post a picture</li>
                                                <li>Powered by React,Material UI and Firebase</li>
                                                <li>You can create and account</li>
                                                <li>You can post a comment to</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_HTML5}
                                                        alt="HTML 5"
                                                        rounded
                                                        className="image-style m-1"
                                                    ></Image>{" "}
                                                    HTML5
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_CSS3}
                                                        alt="CSS 3"
                                                        rounded
                                                        className="image-style m-1"
                                                    ></Image>{" "}
                                                    CSS3
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_REACT}
                                                        alt="React"
                                                        rounded
                                                        className="image-style1 m-1"
                                                    ></Image>{" "}
                                                    React
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_MATERIALUI}
                                                        alt="Material-UI"
                                                        rounded
                                                        className="image-style1 m-1"
                                                    ></Image>{" "}
                                                    Material-UI
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image
                                                            src={L_GIT}
                                                            alt="Git"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>
                                                        Git
                                                    </span>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                                href="https://instagram-react-clone-osoro.web.app/"
                                target="_blank"
                            >
                                SEE LIVE
                            </UrlButton>
                            <UrlButton
                                href="https://github.com/Enyabuto/instagram-react.js--clone"
                                target="_blank"
                            >
                                SOURCE CODE
                            </UrlButton>                       
                        </div>
                    </div>
                </ImageEvent>

                <ImageEvent
                    date="10/01/2020"
                    className="text-center"
                    text="Login page"
                    src={LoginPage}
                    alt="Login Page"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey="0"
                                        className="p-2 text-center accordian-main"
                                    >
                                        PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong>This is a login page powered by HTML,CSS and JavaScript hosted by Firebase.
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Powered by HTML,CSS,Javascript and hosted by Firebase</li>
                                                <li>Email and password filed together with reset password</li>
                                                
                                            </ul>
                                            <hr />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_HTML5}
                                                        alt="HTML 5"
                                                        rounded
                                                        className="image-style m-1"
                                                    ></Image>{" "}
                                                    HTML5
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_CSS3}
                                                        alt="CSS 3"
                                                        rounded
                                                        className="image-style m-1"
                                                    ></Image>{" "}
                                                    CSS3
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_JAVASCRIPT}
                                                        alt="JavaScript"
                                                        rounded
                                                        className="image-style1 m-1"
                                                    ></Image>{" "}
                                                    JavaScript
                                                    </span>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                                href="https://login-page-a4aa7.web.app/"
                                target="_blank"
                            >
                                SEE LIVE
                            </UrlButton>
                            <UrlButton
                                href=""
                                target="_blank"
                            >
                                SOURCE CODE
                            </UrlButton>                       
                        </div>
                    </div>
                </ImageEvent>
                </Events>
            </Timeline> 
        </div>
    )
}

export default ProjectTimeline
