import styled from "styled-components"
import * as React from 'react'


const Container = styled.div`
    height: 80px;
    background-color: #080708;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
    align-items: center;
    padding-left: 130px;
    padding-right: 130px;
    padding-top: 20px;
    border-bottom:solid 1px #e6e6e6 ;
`
const Left = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 35px;
    cursor:pointer ;
`
const Right = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 35px;
`
const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 35px;
`
const Logo = styled.h1`
    font-weight: bold;
    color: #e6e6e6;
    padding: auto;
`
const Button = styled.button`
    background-color: red ;
    padding: 5px 19px;
    border: none;
    color: #e6e6e6;
    white-space: nowrap;
    font-size: 14px;
    width: 96px;
    height: 30px;
    margin-left:25px;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover{
        background-color: #3772FF;
    }
    @media only screen and (max-width:480px){
        display: none;
    }
`

const ISSERVER = typeof window === "undefined"

const SmallScreen =() => {
  let screen = ''
  if(!ISSERVER){
      screen = window.screen.width <= 480 ? true : false
  }
  return screen
}


const SignNav = ({butn, link, btnlin}) => {

const bigScreen = SmallScreen()
  return (
    <Container>
      <Wrapper>
        <Left>
        {!bigScreen &&
          <a href={link}><i className="fi fi-rr-home" style={{color:"#e6e6e6", fontSize:"30px"}}  ></i></a>
        }
        </Left>
        <Center>
          {!bigScreen &&
          <Logo>FireSide</Logo>
          }
          {
            bigScreen &&
            <a href={link}><Logo>FireSide</Logo></a>
          }
        </Center>
        <Right>
          <a href={btnlin}><Button>{butn}</Button></a>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default SignNav