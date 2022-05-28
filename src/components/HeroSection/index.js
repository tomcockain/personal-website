import React, {useState, useEffect} from 'react'
import { HeroContainer, HeroText, HeroSubText, HeroTitle, FlexBox, HeroImageContainer, ArrowImage } from './HeroElements'
import  InfoSection  from '../InfoSection'
import ProjectBox from '../ProjectBox'
import Curve from '../Curve'
// import profilePicture from '../../images/profile.svg';
import profilePicture from '../../images/me.jpg';
import brianEno from '../../images/brian eno.png';
import burial from '../../images/burial.jpg';
import avalanches from '../../images/avalanches.jfif';
import jpegmafia from '../../images/peggy.jfif';
import downArrow from '../../images/down-arrow.svg';



const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const artist = true;
  const colour = 'black'
  const opacity = '0.1';
  const size = {
    height:'400px',
    width: '296.29px'
  };

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY]);
  
  const projects = [
    {
      title: 'Burial',
      image: burial,
      subTitle: 'Artist',
    },
    {
      title: 'Brian Eno',
      image: brianEno,
      subTitle: 'Artist',
    },
    {
      title: 'Tom Cockain',
      image: profilePicture,
      subTitle: 'Web Developer',
      technologies: ['Mongo', 'Express', 'Angular', 'Node'] 
    },
    {
      title: 'The Avalanches',
      image: avalanches,
      subTitle: 'Artist',
    },
    {
      title: 'JPEGMAFIA',
      image: jpegmafia,
      subTitle: 'Artist',
    }
  ]

  
  return (
    <HeroContainer >
      <HeroTitle>Hi! I'm Tom.</HeroTitle>
      <HeroText>I'm looking to be a <b>front-end</b> web developer</HeroText>
      <FlexBox>
          {projects.map((project) => (
            <ProjectBox artist={artist} project={project} size={size} opacity={opacity} colour={colour}></ProjectBox>
          ))}
      </FlexBox>
      <HeroText>... and I'm a massive Spotify fan</HeroText>
      <HeroSubText to='education' spy={true} smooth={true} exact={true} offset={-80} duration={500}>This is my CV <i>Wrapped</i><br/><ArrowImage src={downArrow} ></ArrowImage></HeroSubText>
      <Curve style={{zIndex: 1}}  offsetY={offsetY}/>
    </HeroContainer>
  )
}

export default HeroSection