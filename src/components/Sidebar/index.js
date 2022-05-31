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
                    Education
                </SidebarLink>
                <SidebarLink to='Skills' onClick={toggle} >
                    Languages
                </SidebarLink>
                <SidebarLink to='Music' onClick={toggle}>
                    Projects
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