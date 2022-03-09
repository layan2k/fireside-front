import styled from "styled-components"
import SignNav from "../components/SignNav"
import Head from "next/head"
import Link from "next/link"
import axiosInstance from '../components/axios'
import Router from 'next/router'
import { useState } from 'react'

const Container = styled.div`
  height:100vh;
  overflow: hidden;
  position:relative;
  background-color: #080708;

`
const LoginCon = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
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
`

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #DF2935;
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

const Message = styled.p`

`
const Lin = styled.span`
    color:#3772FF ;
    font-size:15px ;
    &:active{
    color:#FDCA40 ;
  }
`





const Login = () => {
  const InitialFormFata = Object.freeze({
    username: '',
    password: '',
  })

const [formData, updateFormData] = useState(InitialFormFata);

const handleChange = (e) => {
  updateFormData({
    ...formData,
    // Trimming any Whitespace
    [e.target.name]: e.target.value.trim(),
  })
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);

  axiosInstance
    .post(`/auth/jwt/create`, {
      username: formData.username,
      password: formData.password,
    })
    .then((res) => {
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token');
				Router.push('/');
				//console.log(res);
				//console.log(res.data);
			});
	};

        return (
    <><Head>
      <title>SignIn</title>
    </Head>
    <Container>
      <SignNav butn="Sign Up" btnlin="/signup" link="/" />
      <LoginCon>
        <Form>
          <TypIn type="text" placeholder="Username" name="username" id="username" onChange={handleChange} required></TypIn>
          <TypIn type="password" placeholder="Password" onChange={handleChange} name="password" id="password" required></TypIn>
          <Button onClick={handleSubmit}>login</Button>
          <Message>Not Registered? <Lin><Link href="/signup">Create an account</Link></Lin></Message>
        </Form>
      </LoginCon>

    </Container>

    </>
  )
}

export default Login