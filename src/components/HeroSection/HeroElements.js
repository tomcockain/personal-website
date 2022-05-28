import styled, {keyframes} from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr repeat(2, 1fr) 0.5fr;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, red , yellow);
  z-index: 10;
  justify-content: center;
  align-items: center;
`

export const HeroTitle = styled.h1`
  margin-top: 5%;
  text-align: center;
  font-family: 'Gotham';
  letter-spacing: -0.05em;
  font-size: 4rem;
  color: #223c5f;
`
export const HeroImage = styled.img`
  height: 300px;


`
export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeroText = styled.div`
  margin-top: 10px;
  text-align: center;
  font-family: 'Gotham';
  letter-spacing: -0.05em;
  font-size: 2rem;
  color: #223c5f;
`
export const HeroSubText = styled(LinkScroll)`
  margin:auto;
  width: 35%;
  font-family: 'Gotham';
  letter-spacing: -0.05em;
  font-size: 3rem;
  color: #223c5f;
  text-align: center;
  align-self: start;
  z-index: 2;
  cursor: pointer;
  font-weight: bold;
  &:hover {
        
        color: #c6daf5;
        transition: 0.3s ease-in-out;
        opacity: 0.9;
    }
`
export const ArrowImage = styled.img`
  transform: translateY(10px);
  height: 70px;
  
`
export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  column-gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
