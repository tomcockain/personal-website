import styled, {keyframes} from 'styled-components'



export const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #191414;
  display: grid;
  grid-template-columns: 0.6fr;
  grid-template-rows:  0.1fr 0.2fr 2fr 0.1fr;
  justify-content: center;
  position: inline-block;
`
const fadeInY = keyframes`
  0% { opacity: 0; transform: translateY(-50px)}
  100% { opacity: 1; transform: translateY(0px)}
`
const fadeOutY = keyframes`
  0% { opacity: 1;  transform: translateY(0px)}
  100% { opacity: 0;  transform: translateY(50px)}
`
export const Title = styled.h2`
  animation: ${(props) => props.inView ? fadeInY : fadeOutY  } 0.7s ease-in-out;
  opacity: 0;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  grid-row-start: 2;
  font-family: 'Gotham';
  font-size: 4rem;
  color: white;
  letter-spacing: -0.03em;
  text-align: center;
  z-index: 60;
`
export const FlexBox = styled.div`
  grid-row-start: 3;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 30px;
  column-gap: 30px;
  margin-top: 10px;
`