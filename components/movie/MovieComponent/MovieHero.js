import React from 'react'
import styled from 'styled-components'
import MovieComponent from '.'
import NavLog from '../../common/NavLog'
import Searchcomponent from '../../common/Searchcomponent'

const ContainerHero = styled.div`
  height:200vh;
  overflow: hidden;
  position:relative;
  background-color: #080708;
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


const MovieHero = () => {
  return (
    <>
        <ContainerHero>
        <NavLog />
        <Searchcomponent />
        <Divider />
        <Wrapper>
            <Headii>Movies</Headii>
            <Divider />
            <VideoContainer>
                <Linkdirc href='#'><MovieComponent/></Linkdirc>
                <Linkdirc><MovieComponent/></Linkdirc>
                <Linkdirc><MovieComponent/></Linkdirc>
                <Linkdirc><MovieComponent/></Linkdirc>
                <Linkdirc><MovieComponent/></Linkdirc>
                <Linkdirc><MovieComponent/></Linkdirc>
                <Linkdirc><MovieComponent/></Linkdirc>
                <Linkdirc><MovieComponent/></Linkdirc>
                <Linkdirc><MovieComponent/></Linkdirc>
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

export default MovieHero