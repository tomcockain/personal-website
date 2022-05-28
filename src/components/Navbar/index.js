import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {


    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
    <>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    Home
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='education' spy={true} smooth={true} exact={true} offset={-80} duration={500}>Education</NavLinks>                       
                    </NavItem>
                    <NavItem>
                        <NavLinks to='languages' spy={true} smooth={true} exact={true} offset={-80} duration={500}>Languages</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects' spy={true} smooth={true} exact={true} offset={-80} duration={500}>Projects</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to= 'contact' spy={true} smooth={true} exact={true} offset={-80} duration={500}>Contact Me</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar