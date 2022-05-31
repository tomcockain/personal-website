import React, {useState, useEffect} from 'react'
import { HeroContainer, HeroText, HeroSubText, HeroTitle, FlexBox, HeroImageContainer, ArrowImage } from './HeroElements'
import  InfoSection  from '../InfoSection'
import ProjectBox from '../ProjectBox'
import Curve from '../Curve'
// import profilePicture from '../../images/profile.svg';
import profilePicture from '../../images/me.jpg';
import twigs from '../../images/twigs.jfif';
import burial from '../../images/burial.jfif';
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
      link: 'https://open.spotify.com/artist/0uCCBpmg6MrPb1KY2msceF'
    },
    {
      title: 'FKA Twigs',
      image: twigs,
      subTitle: 'Artist',
      link: 'https://open.spotify.com/artist/6nB0iY1cjSY1KyhYyuIIKH'
    },
    {
      title: 'Tom Cockain',
      image: profilePicture,
      subTitle: 'Web Developer',
      link: 'https://www.linkedin.com/in/tom-cockain-b3771618b/'
    },
    {
      title: 'The Avalanches',
      image: avalanches,
      subTitle: 'Artist',
      link: 'https://open.spotify.com/artist/3C8RpaI3Go0yFF9whvKoED'
    },
    {
      title: 'JPEGMAFIA',
      image: jpegmafia,
      subTitle: 'Artist',
      link: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO'
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