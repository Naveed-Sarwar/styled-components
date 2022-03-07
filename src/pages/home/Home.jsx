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
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Heading,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
  Column1,
  Column2,
  TextWrapper,
  BtnWrap,
} from "./HomeStyled";
const Home = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  darkText,
  Img,
  alt,
  description,
  buttonLable,
  lightText
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HomeContainer>
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
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtn>
        </HomeContent>
      </HomeContainer>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home">{buttonLable}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Home;
