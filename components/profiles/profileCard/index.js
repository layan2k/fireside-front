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



const ProfileCard = ({profiles}) => {
  const link = `all/`
  const setAge =  () =>{
    localStorage.setItem('movie_age', profiles.age_limit)
  }

  return (
    <>
    <Container>
    <Linkto href={link} onClick={setAge}>
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