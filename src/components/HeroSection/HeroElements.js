import styled, {keyframes} from 'styled-components'

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:  repeat(3, 1fr);
  height: 92vh;
  width: 100%;
  background: linear-gradient(to right, red , yellow);
  z-index: 10;
  justify-content: center;
  align-items: center;
  row-gap: 10%;
  position: relative;
`
export const HeroText = styled.h1`
  text-align: center;
  font-family: 'Gotham';
  letter-spacing: -0.05em;
  font-size: 4rem;
  height: 50%;
  color: #223c5f;
`
const animation = keyframes`
  0% { opacity: 0;}
  100% { opacity: 0.9;}
`

export const HeroSubText = styled.h2`
  animation-name: ${animation};
  animation-duration: 5s;
  font-family: 'Gotham';
  letter-spacing: -0.05em;
  font-size: 3rem;
  color: #223c5f;
  text-align: center;
  align-self: start;

  .span{
    color: white;
  }
`
