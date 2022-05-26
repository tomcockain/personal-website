import styled, {keyframes} from 'styled-components'
import backgroundImage from '../../images/background.png';

const BackgroundSwipe = keyframes`
  0% { transform: translateX( 0%)}
  100% { transform: translateX(99%)}
`

export const BlackCover = styled.div`
  position: absolute;
  height: 92vh;
  background: black;
  width: 100%;
  transform: translateX(0%);
  animation: ${(props) => props.inView? BackgroundSwipe : {} } 0.7s ease-in;
  animation-fill-mode: forwards;

`
export const BlackCoverOuter = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 45;
  height: 92vh;
  width: 100%;
`
export const DegreesContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr;
  grid-template-rows:  0.5fr 0.2fr 2fr 0.5fr;
  height: 92vh;
  background-color: black;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  justify-content: center;
  z-index: 55;
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
  animation: ${(props) => props.isVisible ? fadeInY : fadeOutY  } 0.7s ease-in-out;
  opacity: 0;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  grid-row-start: 2;
  font-family: 'Gotham';
  font-size: 4rem;
  color: white;
  letter-spacing: -0.03em;
  text-align: center;
  z-index: 50;
`
export const List = styled.div`

  grid-row-start: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
const fadeInX = keyframes`
  0% { opacity: 0; transform: translateX(-100px)}
  100% { opacity: 1; transform: translateX(0px)}
`
const fadeOutX = keyframes`
  0% { opacity: 1;  transform: translateX(0px)}
  100% { opacity: 0;  transform: translateX(100px)}
`
export const ListContainer = styled.div`
  position: relative;
  animation: ${(props) => props.inView ? fadeInX : fadeOutX  } 0.7s ease-in-out;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10%;
  background: "#cdf564";
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;

`
export const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  z-index: 50;
`
export const TextBox = styled.div`
  font-family: 'Gotham';
  font-size: 2rem;
  color: white;
  letter-spacing: -0.03em;
  z-index:50;
`
export const TextBackground = styled.div`
  position: absolute;
  padding: 5%;
  width: 100%;
  height: 90%;
  background: #f037a5;
  opacity: 0.8;
  z-index: 49

`
// export const Shape = styled.div`
//     position: absolute;
//     width: 110vh;
//     height: 1000px;
//     transform: rotate(-50deg) skew(40deg);
//     background: red;
//     z-index: 1;  
// `