import React, { useRef, useEffect, useState } from 'react'
import { DegreesContainer, Title, List, 
ListContainer, Image, TextBox, TextBackground, BlackCover, BlackCoverOuter } from './DegreesElements'
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
    })
    observer.observe(myRef.current);
  }, [])
  const options = {
    threshold: 0.001,
  }
  const [listRef1, inView1] = useInView(); 
  const [listRef2, inView2] = useInView();
  const [backgroundRef, inView3] = useInView(options);  


  return (
    <div id='education'>
    <BlackCoverOuter>
      <BlackCover ref={backgroundRef} inView = {inView3}></BlackCover>
    </BlackCoverOuter>
    <DegreesContainer>
      <Title ref={myRef} isVisible={isVisible}>My Education
      </Title>
      <List>     
         <ListContainer ref={listRef1} inView={inView1}>
          <TextBackground></TextBackground>
          <Image src={require("../../images/uea-logo.jpg")}/>
          <TextBox><b>University of East Anglia</b> - BSc Chemistry - 2.1 </TextBox>
        </ListContainer>
      
        <ListContainer ref={listRef2} inView={inView2}>
          <TextBackground></TextBackground>
          <Image src={require("../../images/bristol-logo.jpeg")}/>
            <TextBox><b>University of Bristol</b> - MSc Computer Science (conversion) - merit</TextBox>
        </ListContainer>       
    </List>
    </DegreesContainer>
    
    </div>
  )
}

export default Degrees