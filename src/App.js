import React from 'react';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Container from 'react-bootstrap/Container';


// components
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Projects from './components/projects-timeline/project-timeline.component';
import './App.css';


const image1 = 'https://img.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_53876-31799.jpg?size=626&ext=jpg'

const  App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <div>
      <Parallax bgImage={image1}>
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <About/>
            </Fade>
          </Container>
        </Parallax>
      </div>
      <div>
        <Container className='container-box rounded'>
          <Slide bottom duration={500}>
            <hr/>
            <Skills/>
          </Slide>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr/>
          <Projects/>
        </Slide>
      </Container>
    </div>
  );
};

export default App;
