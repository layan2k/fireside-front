import React from 'react'
import styled from 'styled-components'

const Mobile = styled.div`
    background-color: #080708;
    height:75%;
    width:100%;
    position: absolute;
    right: 0px;
    top: -6px;
    padding: 10px 12px;
    display:flex;
`
const CloseIcon = styled.div`
    display:flex;
    justify-content: flex-end;
    font-size:24px;
`
const MobileOptions = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    padding-top: 10px;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const MobileOption = styled.div`
    font-size: 24px;
    margin-top: 12px;
    display:flex;
    border-bottom:2px solid #e6e6e6 ;
`
const MobileOptionLink = styled.a`
    text-decoration:none;
    color:#e6e6e6;
    display:flex;
`



const NavBarMobile = ({isOpen, setisOpen}, logolink) => {
  return (
    <Mobile>
    <CloseIcon onClick={() => setisOpen(!isOpen)}>
    <i className="fi fi-rr-cross" style={{color:"#e6e6e6"}}></i>
    </CloseIcon>
    <MobileOptions>
        <MobileOption>
    <MobileOptionLink href="#projects" >
    Get Started
        </MobileOptionLink>
        </MobileOption>

    <MobileOption>
        <MobileOptionLink href="#skills" >
            Skills
        </MobileOptionLink>
    </MobileOption>
    <MobileOption>
        <MobileOptionLink href="#resume" >Resume
        </MobileOptionLink>
    </MobileOption>
    <MobileOption>
        <MobileOptionLink href="#contact" >Contact
        </MobileOptionLink>
    </MobileOption>
    </MobileOptions>


</Mobile>
  )
}

export default NavBarMobile