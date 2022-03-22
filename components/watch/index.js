import React from 'react'
import axiosInstance from '../common/axios'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import NavLog from '../common/NavLog'



const ContainerHero = styled.div`
  min-height:100vh;
  height: auto;
  overflow: hidden;
  position:relative;
  background-color: #010b20;
`

const Headii = styled.div`
    color: #e6e6e6;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-bottom: 30px;
`
const Wrapper = styled.div`
display: flex;
margin-top: 50px;
`
const TitleDes = styled.h6`
text-decoration: underline;
color: #e6e6e6;
font-weight: bold;
font-size: large;
`

const ISSERVER = typeof window === "undefined"

const Storage =() => {
    let movieuuid = ''
    if(!ISSERVER){
        movieuuid = localStorage.getItem('movieuuid')
    }
    return movieuuid
}
const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #e6e6e6;
    align-items: center;
    justify-content: center;
`

const Footer = styled.footer`
    color: #e6e6e6;
    margin-top: 50px;
    text-align: center;
    font-size: 15px;
`
const Left = styled.div`
display: flex;
width: 50%;
flex-direction: column;

`
const Descrip = styled.p`
margin-top:20px ;
color: #e6e6e6;
`

const Right = styled.div`

`

const movieuuid = Storage()

const Watch = () => {

    const [GetWatch, setGetWatch] = useState([]);

    const getMovies =  async() => {
        const response = await axiosInstance.get(`/api/movie/detail/${movieuuid}/`)
        return response.data
    }

    useEffect(() => {

        const getTVShows = async () => {
            const TVShows = await getMovies();
            if(TVShows) setGetWatch(TVShows);
        }
        getTVShows();
    }, []);

    console.log(GetWatch)
  return (
    <ContainerHero>
        <NavLog/>
        <Headii>{GetWatch.title}</Headii>
        <ReactPlayer  url={GetWatch.get_movies} controls={true} width="100%" height="450px"/>
        <Wrapper>
            <Left>
            <TitleDes>{GetWatch.title}</TitleDes>
            <Descrip>{GetWatch.description}</Descrip>
            </Left>

        </Wrapper>
        <Divider />

            <Footer>
            ©️Copyright FireSide 2020
            </Footer>


    </ContainerHero>
  )
}

export default Watch