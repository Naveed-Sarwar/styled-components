import React from 'react'
import { HomeBackground,HomeContainer,Video } from './HomeStyled';
const Home = () => {
  return (
    <HomeContainer>
        <HomeBackground>
            <Video autoplay loop muted src={Video} type='video/mp4'/>
        </HomeBackground>
    </HomeContainer>
  )
}

export default Home;