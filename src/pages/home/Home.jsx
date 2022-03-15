import React, { useState } from "react";
import Video from "../../assets/videos/video.mp4";
import { Button } from "../../components/button/ButtonStyled";
import {
  HomeBackground,
  HomeContainer,
  HomeContent,
  HomeP,
  HomeH1,
  HomeBtn,
  VideoBackground,
  ArrowForward,
  ArrowRight,
} from "./HomeStyled";
const Home = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HomeContainer id="home">
        <HomeBackground>
          <VideoBackground src={Video} autoPlay loop muted />
        </HomeBackground>
        <HomeContent>
          <HomeH1>Virtual Banking Made easy</HomeH1>
          <HomeP>
            Sign up for a new account today and recieve 12$ credit towards your
            next payment
          </HomeP>
          <HomeBtn>
            <Button
              to="signup"
              primary="true"
              dark="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtn>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default Home;
