import React from 'react'
import styled from 'styled-components'
import axiosInstance from '../common/axios'
import NavLog from '../common/NavLog'
import Searchcomponent from '../common/Searchcomponent'
import GenreCompnent from './GenreComponent'
import {useState , useEffect} from 'react'

const ContainerHero = styled.div`
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
const HeadingTwo = styled.div`
    color: #e6e6e6;
    font-size: 10;
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-bottom: 10px;
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

const GenreHero = () => {
    const [Query, setQuery] = useState("");
    const [GetData, setGetData] = useState([]);

    // Get Response
    const getMovies =  async() => {
        const response = await axiosInstance.get("/api/video/")
        return response.data
    }

    useEffect(() => {

        const getTVShows = async () => {
            const TVShows = await getMovies();
            if(TVShows) setGetData(TVShows);
        }
        getTVShows();
    }, []);

  return (
    <>
        <ContainerHero>
        <NavLog />
        <br/>
        <Searchcomponent  Query={Query} setQuery={setQuery}/>
        <Divider />
        <Wrapper>
            <Headii>Genres</Headii>
            <Divider />
            <HeadingTwo>Action</HeadingTwo>
            <Divider />
            <VideoContainer>
                {GetData.filter((gen)=> gen.genre.includes('action', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Drama</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('drama', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Horror</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('horror', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Comedy</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('comedy', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Fiction</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('fiction', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Romance</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('romance', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Documentary</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('documentary', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Animation</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('animation', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Fantasy</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('fantasy', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Sports</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('sports', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Spirituality</HeadingTwo>
            <Divider />
            <VideoContainer>
            {GetData.filter((gen)=> gen.genre.includes('spirituality', Query)).map((genref)=>
                    <Linkdirc key={genref.id} href='#'><GenreCompnent data={genref}/></Linkdirc>
                )}
            </VideoContainer>
            <Divider />
            <HeadingTwo>Sports</HeadingTwo>
            <Divider />

            <Footer>
            ©️Copyright FireSide 2022
            </Footer>


        </Wrapper>


        </ContainerHero>




    </>
  )
}

export default GenreHero