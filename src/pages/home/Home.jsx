import React from 'react'

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