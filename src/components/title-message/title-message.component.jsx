import React from 'react'
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 70px;
    }
    .sub {
      font-size: 57px;
      letter-spacing: 2px;
    }
  }
`;


const TitleMessage = () => {
    return (
        <MyTitleMessage>
             <div className="titleMessage">
                <div className="heading">
                    <div className="main text-center mb-3">
                        Hi, I am
                        <br />
                        <span>
                            <strong>Elisha Osoro Nyabuto</strong>
                        </span>
                    </div>
                    <div className="sub">
                        <Typewriter
                            options={{
                            strings: ["Front End Developer + Mobile Development", "Learner", "Gamer"],
                            autoStart: true,
                            loop: true,
                            delay: 50
                            }}
                        />
                    </div>
                </div>
             </div>   
        </MyTitleMessage>
    );
};

export default TitleMessage