import Head from 'next/head'
import styled from 'styled-components'
import NavBar from '../common/NavBar'
import Text from '../common/Text'
import Style from '../../styles/Home.module.css'
import { useState } from 'react'
import NavBarMobile from '../common/NavBarMobile'


const Logo = styled.h1`
    font-weight: bold;
    color: #e6e6e6;
    padding: auto;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left:150px ;
    margin-right: 150px;
    font-size: 45x;

`


const Container = styled.div`
  height:100vh;
  overflow: hidden;
  position:relative;
  width: 100%;

  @media only screen and (max-width:480px){
        max-width: 480px;
        }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: row;
`
const MenuIcon = styled.div`
  font-size: 24px;
  color: #e6e6e6;
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-left: 3px;
;
`
const ISSERVER = typeof window === "undefined"

const SmallScreen =() => {
  let screen = ''
  if(!ISSERVER){
      screen = window.screen.width <= 480 ? true : false
  }
  return screen
}



export default function Home() {
  const[isOpen, setisOpen] = useState(false);
  const Screen = SmallScreen()
  return (
    <div className={Style.main}>
    <Head>
      <title>FireSide</title>

    </Head>
    <Container>
      {!Screen &&
      <NavBar logolink="/" login="/login" signup="/signup"  />}
      {Screen &&
      <MobileMenu>

        <MenuIcon  onClick={() => setisOpen(!isOpen)}><a href=""></a><i className="fi fi-rr-align-justify" style={{color:"#e6e6e6", fontSize:"24px"}}></i></MenuIcon>
          {isOpen && <NavBarMobile isOpen={isOpen} setisOpen={setisOpen}  logolink="/"/>}
          <Logo>FireSide</Logo>
      </MobileMenu>}

      <Text />
    </Container>
    </div>
  )
}
