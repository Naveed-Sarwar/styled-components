import React from "react";
import {
  SliderWrapper,
  SliderLink,
  SliderMenu,
  SliderRoute,
  SliderWrap,
  CloseIcon,
  SliderContainer,
  Icon,
} from "./SliderStyled";

const Slider = () => {
  return (
    <SliderContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SliderWrapper>
        <SliderMenu>
          <SliderLink to="about">About</SliderLink>
          <SliderLink to="discover">Discover</SliderLink>
          <SliderLink to="services">Services</SliderLink>
          <SliderLink to="signup">Sign Up</SliderLink>
        </SliderMenu>
        <SliderWrap>
          <SliderRoute to="/signin">Sign In</SliderRoute>
        </SliderWrap>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
