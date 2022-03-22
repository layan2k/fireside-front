import React from 'react'
import styled from 'styled-components'
import MovieComponent from '.'
import NavLog from '../../common/NavLog'
import Searchcomponent from '../../common/Searchcomponent'
import {useState, useEffect} from 'react'
import axiosInstance from '../../common/axios'

const ContainerHero = styled.div`
  min-height: 150vh;
  height:auto;
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
const ISSERVER = typeof window === "undefined"

const Storage =() => {
    let movieuuid = ''
    if(!ISSERVER){
        movieuuid = localStorage.getItem('movie_age')
    }
    return movieuuid
}

const age = Storage()


const MovieHero = () => {
    const [Query, setQuery] = useState("");
    const [GetData, setGetData] = useState([]);

    // Get Response
    const getMovies =  async() => {
        const response = await axiosInstance.get("/api/video/")
        return response.data
    }

    useEffect(() => {

        const getAllMovies = async () => {
            const AllMovies = await getMovies();
            if(AllMovies) setGetData(AllMovies);
        }
        getAllMovies();
    }, []);

  return (

    <>
        <ContainerHero>
        <NavLog />
        <br />
        <Searchcomponent Query={Query} setQuery={setQuery}  />
        <Divider />
        <Wrapper>
            <Headii>Movies</Headii>
            <Divider />
            <VideoContainer>
                {GetData.filter((movies)=> movies.movie_type.includes("single",Query, age)).map((movres) =>
                <Linkdirc  key={movres.id} href='#'>
                        <MovieComponent data={movres}/>
                        </Linkdirc>

                )}

            </VideoContainer>
            <Divider />
            <Footer>
            ©️Copyright FireSide 2022
            </Footer>


        </Wrapper>


        </ContainerHero>




    </>
  )

}

export default MovieHero
