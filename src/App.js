import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';


// components
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import MyTitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import './App.css';

const  App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
    </div>
  );
};

export default App;
