import styled from "styled-components"
import * as React from 'react'


const Container = styled.div`
    height: 104px;
    background-color: #080708;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
    align-items: center;
    padding-left: 130px;
    padding-right: 130px;
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
`
const Icon = styled.i`
  color:#e6e6e6 ;
`

const SignNav = ({butn, link, btnlin}) => {


  return (
    <Container>
      <Wrapper>
        <Left>
          <a href={link}><i className="fi fi-rr-home" style={{color:"#e6e6e6"}}  ></i></a>
        </Left>
        <Center>
          <Logo>FireSide</Logo>
        </Center>
        <Right>
          <a href={btnlin}><Button>{butn}</Button></a>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default SignNav