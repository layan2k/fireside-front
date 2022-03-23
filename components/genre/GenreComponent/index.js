import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
    flex-basis: 33%;
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
`
const MovieTitle = styled.span`
  color:#e6e6e6;
  text-decoration: underline #e6e6e6;
  align-items: center;
  justify-content: center;
  text-align: center;
`


const GenreCompnent = ({data}) => {

  const setUUID = () =>{
    localStorage.setItem('movieuuid', data.uuid)
  }
  return (
    <>
            <Container onClick={setUUID}>
            <Image src={data.get_thumbnail}  alt='image' height='200px' width='300px'/>
            <MovieTitle>{data.title}</MovieTitle>
            </Container>
    </>
  )
}

export default GenreCompnent