import React, { useState, useEffect} from 'react'
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Degrees from '../../components/Degrees'
import Experience from '../../components/Experience'
import Projects from '../../components/Projects'
import './index.css';

function Home() {


  const [isOpen, setIsOpen] = useState(false);
  

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        <HeroSection/>
        <Degrees></Degrees>
        <Experience></Experience>
        <Projects></Projects>
    </>
  )
}

export default Home