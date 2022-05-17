import React, { useRef, useEffect, useState } from 'react'
import { DegreesContainer, Title, List, 
ListContainer, Image, TextBox, TextBackground, BlackCover } from './DegreesElements'
import { useInView } from 'react-intersection-observer'


const Degrees = () => {

  const myRef = useRef();
  const [isVisible, setIsVisible] = useState(false); 
  console.log('myElementIsVisible', isVisible);

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    }, {
      rootMargin: '-5%',
      threshold: 1
    })
    observer.observe(myRef.current);
  }, [])
  const options = {
    threshold: 1,
  }
  const [listRef1, inView1] = useInView(); 
  const [listRef2, inView2] = useInView();
  const [backgroundRef, inView3] = useInView();  


  return (
    <>
    <BlackCover ref={backgroundRef} inView = {inView3}></BlackCover>
    <DegreesContainer>
      
      <Title ref={myRef} isVisible={isVisible}>My Degrees
      </Title>
      <List>
      
        <ListContainer ref={listRef1} inView={inView1}>
          <TextBackground></TextBackground>
          <Image src={require("../../images/uea-logo.jpg")}/>
          <TextBox>University of East Anglia - BSc Chemistry - 2.1 </TextBox>
        </ListContainer>
      
        <ListContainer ref={listRef2} inView={inView2}>
          <TextBackground></TextBackground>
          <Image src={require("../../images/bristol-logo.jpeg")}/>
            <TextBox>University of Bristol - MSc Computer Science (conversion) - merit</TextBox>
        </ListContainer>       
    </List>
    </DegreesContainer>
    
    </>
  )
}

export default Degrees