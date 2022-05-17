import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = ({toggle}) => {
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Home
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='About'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Skills'>Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Music'>Music</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to= 'contact'>Contact Me</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar