import styled, {keyframes} from 'styled-components'

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr repeat(3, 1fr);
  height: 92vh;
  width: 100%;
  background: linear-gradient(to right, red , yellow);
  z-index: 10;
  justify-content: center;
  align-items: center;

`

export const HeroTitle = styled.h1`
  margin-top: 10px;
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
  text-align: center;
  font-family: 'Gotham';
  letter-spacing: -0.05em;
  font-size: 2rem;
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
  z-index: 2;

  .span{
    color: white;
  }
`
export const ArrowImage = styled.img`
  height: 50px;
`
export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  column-gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
