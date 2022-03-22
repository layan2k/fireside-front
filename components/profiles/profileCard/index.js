import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Square = styled.div`
    width: 160px;
    height: 160px;
    background: blue;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`
const Smile = styled.p`
    color: #e6e6e6;
    font-size: 40px;
    padding: 45px;
    font-weight: bolder;
`
const Name = styled.h3`
    color: #e6e6e6;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-top: 2px;
`
const Linkto = styled.a`
text-decoration: none;
`

const ISSERVER = typeof window === "undefined"

const Storage =(uuid) => {
    const profilefilter =String(uuid)
    if(!ISSERVER){
      if (localStorage.getItem('movie_age')) {
        localStorage.removeItem('movie_age')
      }
      localStorage.setItem('movie_age', profilefilter)
    }
    console.log('saved')
}


const ProfileCard = ({profiles}) => {
  const link = `all/`
  const id = profiles.age_limit
  return (
    <>
    <Container>
    <Linkto href={link} onClick={Storage(id)}>
    <Square>
    <Smile>
        ^_^
    </Smile>
    </Square>
    <Name>{profiles.name}</Name>
    </Linkto>
    </Container>
    </>

  )
}

export default ProfileCard