import React from 'react'
import styled from 'styled-components'

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
      localStorage.setItem('movie_uuid', profilefilter)
    }
    console.log('saved')
}


const ProfileCard = ({profiles}) => {
  const link = `all/`
  return (
    <>
    <Linkto href={link} onClick={Storage(profiles.uuid)}>
    <Square>
    <Smile>
        ^_^
    </Smile>
    </Square>
    <Name>{profiles.name}</Name>
    </Linkto>
    </>
  )
}

export default ProfileCard