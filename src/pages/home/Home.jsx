import React from "react";
import Video from "../../assets/videos/video.mp4";
import { HomeBackground, HomeContainer, VideoBackground } from "./HomeStyled";
const Home = () => {
  return (
    <HomeContainer>
      <HomeBackground>
        <VideoBackground src={Video} autoPlay loop muted />

       </HomeBackground>
       <HomeContent>
           <HomeH1>Virtual Banking Made easy</HomeH1>
           <HomeP>Sign up for a new account today and recieve 12$
               credit towards your next payment
           </HomeP>
       </HomeContent>
    </HomeContainer>
  );
};

export default Home;
