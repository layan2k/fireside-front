import React from 'react'
import styled from 'styled-components'
import NavLog from '../components/common/NavLog'
import {useRouter} from 'next/router'
import Head from 'next/head'

const Container = styled.div`
    min-height: 100vh;
    height: auto;
    background-color: #010b20;
    overflow: hidden;
    position:relative;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 130px;
    padding-right: 130px;
    padding-top: 20px;
    @media only screen and (max-width:480px){
       padding: 0;
       flex-direction: column;
    }
`
const MyAcc = styled.h1`
    color: #e6e6e6;
    text-decoration: underline;
    text-align: center;
    font-size: 30px;
`
const TBD = styled.p`
    color: #e6e6e6;
    text-align: center;
    font-size: 15px;
    margin-top:20px;
`

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #010b13;
  width: 100px;
  border: solid 3px #e6e6e6;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  &:hover{
    background: #3772FF;
  }
  &:active{
      background-color: orange;
  }
`


const ISSERVER = typeof window === "undefined"

const Logout = (router) =>{
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        router.push('/')
    }
}

const MyAccount = () => {
    const Router = useRouter()
  return (
      <>
    <Head>
      <title>My Account</title>
    </Head>
      <NavLog />
    <Container>

        <Wrapper>
            <MyAcc>Manage Account</MyAcc>
            <TBD>To Be Futher Developed</TBD>
            <Button onClick={Logout(Router)}>LogOut</Button>

        </Wrapper>
    </Container>
      </>
  )
}

export default MyAccount