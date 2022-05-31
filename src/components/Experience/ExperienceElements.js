import styled, {keyframes} from 'styled-components'

export const Background = styled.div`
`

export const ExperienceConatiner = styled.div`
  height: 92vh;
  width: 100%;
  background-color: #f037a5;
  display: grid;
  grid-template-columns: 0.6fr;
  grid-template-rows:  0.5fr 0.2fr 2fr 0.5fr;
  justify-content: center;
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
  z-index: 56;
`

export const GraphFlexBox = styled.div`

  grid-row-start: 3;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 3%;
`
const barAnimation = keyframes`
  0% { width: 10%}
  100% {width: ${props => props.value}}
`

export const Bar = styled.div`
  background: ${props => props.colour};
  width: ${props => props.value};
  height: 13%;
  border-radius: 40px;
  animation: ${(props) => props.inView ? barAnimation : {}  } 0.7s ease-in-out;
`
const textAnimation = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`
export const Text = styled.div`
  font-family: 'Gotham';
  font-size: 2rem;
  color: white;
  letter-spacing: -0.03em;
  transform: translateX(10%) translateY(40%);
  color: red;
  animation: ${(props) => props.inView ? textAnimation : {}  } 0.7s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  opacity: 0;
`
export const ImageJS = styled.img`
  z-index: 55;
  height: 10rem;
  transform: translate(40%, 40%);
  position: absolute;
  box-shadow: 5px 5px 5px;
`
export const ImageJS2 = styled.img`
  z-index: 54;
  height: 10rem;
  transform: translate(70%, 70%);
  position: absolute;
  box-shadow: 5px 5px 5px;
  ;
`