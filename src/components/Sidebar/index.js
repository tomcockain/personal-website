import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,
SideBtnWrap, SidebarRoute } from './sidebarElements'


const Sidebar = ({isOpen, toggle})=> {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='Skills' onClick={toggle} >
                    Skills
                </SidebarLink>
                <SidebarLink to='Music' onClick={toggle}>
                    Music
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/contactme'>
                    Contact Me
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar