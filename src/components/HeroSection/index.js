import React, {useState, useEffect} from 'react'
import { HeroContainer, HeroText, HeroSubText } from './HeroElements'
import  InfoSection  from '../InfoSection'
import Curve from '../Curve'

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY]);
  
  return (
    <HeroContainer >
      <HeroText>Hi! I'm Tom. <br></br>I'm a web developer.</HeroText>
      <HeroSubText>This is my CV <span>wrapped</span></HeroSubText>
      <Curve offsetY={offsetY}/>
    </HeroContainer>
  )
}

export default HeroSection