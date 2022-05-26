import React, {useState, useEffect} from 'react'
import { ExperienceConatiner, Title, GraphFlexBox, Bar, Text, ImageJS, ImageJS2, Background } from './ExperienceElements'
import { useInView } from 'react-intersection-observer'
import JSImage from '../../images/JS.png';

const Experience = () => {

  const [listRef1, inView1] = useInView(); 

  const [barRef1, inView2] = useInView(); 
  const [barRef2, inView3] = useInView(); 
  const [barRef3, inView4] = useInView(); 
  const [barRef4, inView5] = useInView(); 



  const barChartData = ['90%','70%','60%','40%'];
  const barChartColour = ['#cdf564', '#00e1cc', 'black', 'white']

  return (
    <Background>
    <ImageJS src={JSImage}></ImageJS>
    <ImageJS2 src={JSImage}></ImageJS2>
    <ExperienceConatiner>
      <Title  ref={listRef1} inView={inView1}>My Top Languages of 2022</Title>
      
      <GraphFlexBox>
        <Bar ref={barRef1} value={barChartData[0]} colour={barChartColour[0]} inView={inView2}>
          <Text inView={inView2}><b>#1</b> JavaScript ES6</Text>
        </Bar>
        <Bar ref={barRef2} value={barChartData[1]} colour={barChartColour[1]} inView={inView3}>
          <Text inView={inView3}><b>#2</b> HTML</Text>
        </Bar>
        <Bar ref={barRef3} value={barChartData[2]} colour={barChartColour[2]} inView={inView4}>
          <Text inView={inView4}><b>#3</b> CSS</Text>
        </Bar>
        <Bar ref={barRef4} value={barChartData[3]} colour={barChartColour[3]} inView={inView5}>
          <Text inView={inView5}><b>#4</b> REST API</Text>  
        </Bar>
      </GraphFlexBox>
    </ExperienceConatiner>
    </Background>
  )
}

export default Experience