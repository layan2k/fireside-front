import React from 'react'
import styled from 'styled-components'
import NavLog from '../common/NavLog'
import Searchcomponent from '../common/Searchcomponent'
import TVComponent from './TVComponent'

const ContainerHero = styled.div`
  height:200vh;
  overflow: hidden;
  position:relative;
  background-color: #010b20;
`
const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #e6e6e6;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

`
const Headii = styled.div`
    color: #e6e6e6;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-bottom: 50px;
`

const VideoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;

`
const Linkdirc = styled.a`

`

const Footer = styled.footer`
    color: #e6e6e6;
    margin-top: 50px;
    text-align: center;
    font-size: 15px;
`


const TVHero = () => {
  return (
    <>
        <ContainerHero>
        <NavLog />
        <br />
        <Searchcomponent />
        <Divider />
        <Wrapper>
            <Headii>TV Shows</Headii>
            <Divider />
            <VideoContainer>
                <Linkdirc href='#'><TVComponent/></Linkdirc>
                <Linkdirc><TVComponent/></Linkdirc>
                <Linkdirc><TVComponent/></Linkdirc>
                <Linkdirc><TVComponent/></Linkdirc>
                <Linkdirc><TVComponent/></Linkdirc>
                <Linkdirc><TVComponent/></Linkdirc>
                <Linkdirc><TVComponent/></Linkdirc>
                <Linkdirc><TVComponent/></Linkdirc>
                <Linkdirc><TVComponent/></Linkdirc>
            </VideoContainer>
            <Divider />
            <Footer>
            ©️Copyright FireSide 2020
            </Footer>


        </Wrapper>


        </ContainerHero>




    </>
  )
}

export default TVHero