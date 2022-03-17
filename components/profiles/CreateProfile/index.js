import React from 'react'
import styled from 'styled-components'
import  Head  from 'next/head'
import NavLog from '../../common/NavLog'

const Container = styled.div`
  height:100vh;
  overflow: hidden;
  position:relative;
  background-color: #010b20;

`
const LoginCon = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  @media only screen and (max-width:480px){
       width: 100%;
    }
`
const Form = styled.form`
  position: relative;
  z-index: 1;
  background: #e6e6e6;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  @media only screen and (max-width:480px){
      width: 100%;
      margin-top: 25px;
      background: none;
      box-shadow: none;
    }
`
const TypIn = styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  @media only screen and (max-width:480px){
    margin-top: 30px;
    }
`

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #010b13;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  &:hover{
    background: #3772FF;
  }
`
const Opl = styled.option`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  @media only screen and (max-width:480px){
    margin-top: 30px;
    }
`
const Sel = styled.select`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  @media only screen and (max-width:480px){
    margin-top: 30px;
    }
`


const MakeProfile = () => {
  return (
    <>
    <Head>
      <title>Create Profile</title>
    </Head>
    <Container>
      <NavLog/>
      <LoginCon>
        <Form>
          <TypIn type="text" placeholder="Name" name="name" id="name"  required></TypIn>
          <Sel>
          <Opl value="All" id="All" name="All">All</Opl>
          <Opl value="Kids" id="Kids" name="Kids">Kids</Opl>
          </Sel>
          <Button >Create</Button>
        </Form>
      </LoginCon>

    </Container>
    </>
  )
}

export default MakeProfile