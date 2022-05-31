import React, { useState } from 'react'
import { Link, Container, ProjectImage, ProjectTitle, ShortAbout, Card, Background, ImageContainer} from './ProjectBoxElements'

const ProjectBox = (props) => {
  const artist = props.artist;
  const colour = props.colour;
  const opacity = props.opacity;
  const height = props.size;
  console.log(opacity);
  const [large, setLarge] = useState(false);

  const resize = () =>{
    setLarge(!large);
    console.log(large);
  } 
  return (
    <>
    <Link href={props.project.link} target="_blank">
    <Container onClick={resize} large={large} size={height}>
      <Card size={height} >
        <ImageContainer artist={artist}>
          <ProjectImage src={props.project.image}></ProjectImage>
        </ImageContainer>
        <ProjectTitle>{props.project.title}</ProjectTitle>
        <ShortAbout>{props.project.subTitle}</ShortAbout>      
      </Card>
      <Background size={height} colour={colour} opacity={opacity}></Background>       
    </Container>
    </Link>
    </>
  )
}

export default ProjectBox