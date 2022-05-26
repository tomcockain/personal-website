import React from 'react'
import { FlexBox, ProjectsContainer, Title, Container, ProjectTitle, ProjectImage } from './ProjectsElements'
import { useInView } from 'react-intersection-observer'
import spotifyGame from '../../images/spotify-game.gif';
import poster from '../../images/poster.gif';
import calculator from '../../images/calculator.gif';
import booklist from '../../images/booklist.gif';


import ProjectBox from '../ProjectBox';

const Projects = () => {
  const artist = false;
  const colour = 'white';
  const opacity = '0.03';
  const size = {
    height: '540px',
    width: '400px'
  }
  const projects = [
    {
      title: 'Spotify Quiz Game',
      image: spotifyGame,
      subTitle: '2021 • MEAN',
      technologies: ['Mongo', 'Express', 'Angular', 'Node'] 
    },
    {
      title: 'LastFM Poster Generator',
      image: poster,
      subTitle: '2022 • React',
      technologies: ['Mongo', 'Express', 'Angular', 'Node'] 
    },
    {
      title: 'React List Practice (Basic Hooks Practice)',
      image: booklist,
      subTitle: '2022 • React',
      technologies: ['Mongo', 'Express', 'Angular', 'Node']
    },
    {
      title: 'Calculator (useReducer + CSS Practice)',
      image: calculator,
      subTitle: '2022 • React',
      technologies: ['Mongo', 'Express', 'Angular', 'Node'] 
    }
  ]

  const [listRef1, inView1] = useInView();
  return (

      <ProjectsContainer>
        <Title ref={listRef1} inView={inView1}>Projects</Title>
        <FlexBox>
          {projects.map((project) => (
            <ProjectBox artist={artist}project={project} size={size} opacity={opacity} colour={colour}></ProjectBox>
          ))}
        </FlexBox>
      </ProjectsContainer>



    )
}

export default Projects