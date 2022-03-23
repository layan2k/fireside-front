import React from 'react'
import styled from 'styled-components'
import NavLog from '../common/NavLog'
import Searchcomponent from '../common/Searchcomponent'
import TVComponent from './TVComponent'
import axiosInstance from '../common/axios'
import {useEffect , useState} from 'react'

const ContainerHero = styled.div`
  min-height:200vh;
  height: auto;
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

const TVHero = () => {

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
        <br />
        <Searchcomponent Query={Query} setQuery={setQuery} />
        <Divider />
        <Wrapper>
            <Headii>TV Shows</Headii>
            <Divider />
            <VideoContainer>
                {GetData.filter((tv) => tv.movie_type.includes('seasonal')).filter((que)=>que.movie_type.title.include(Query)).filter((agl)=> agl.age_limit.includes(age)).map((tvshows)=>
                    <Linkdirc key={tvshows.id} href='/video'><TVComponent data={tvshows}/></Linkdirc>
                )}


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