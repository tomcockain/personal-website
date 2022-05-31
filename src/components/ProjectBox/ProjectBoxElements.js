import styled, {keyframes} from 'styled-components'

export const Link = styled.a`
  /* @media(min-height:500px){
    transform: scale(0.5)
  } */
  height: 50%;
`

export const Card = styled.div`
  position: absolute;
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  position: absolute;
  border-radius: 25px;
  z-index: 2;
`
export const Background = styled.div`
  position: absolute;
  background-color: ${(props) => props.colour};
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  z-index: 2;
  position: absolute;
  border-radius: 25px;
  opacity: ${(props) => props.opacity};
  cursor: pointer;
  
  &:hover {
        opacity: 0.1;
        transition: 0.1s ease-in-out;
    }
`
export const Container = styled.div`
  position: relative;
  flex: 1 1 0;
  min-width: ${(props) => props.size.width};
  max-width: ${(props) => props.size.width};
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  border-radius: 25px;
  align-content: center;
  overflow: hidden;
  &:hover {
        transform: scale(1.05);
        transition: 0.1s ease-in-out;
    }

`
export const ImageContainer = styled.div`
  height: 60%;
  margin: 30px;
  border-radius: ${(props) => props.artist? '500px' : '15px'};
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 50px;
`
export const ProjectImage = styled.img`
  position: absolute;
  width: 110%;

  z-index: 5;
  margin-top: 0%;
`
export const ProjectTitle = styled.div`
  z-index: 6;
  font-family: 'Gotham';
  font-size: 1.5rem;
  color: white;
  letter-spacing: -0.01em;
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
`
export const ShortAbout = styled.div`
  font-family: 'Gotham';
  font-size: 1.2rem;
  color: white;
  letter-spacing: -0.03em;
  opacity: 0.8;
  text-align: left;
  margin: 10px;
  margin-left: 30px;
  margin-right: 30px;
`