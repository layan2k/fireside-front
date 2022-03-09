import styled from "styled-components"
import SignNav from "../components/SignNav"
import Head from "next/head"
import Link from "next/link"
import axiosInstance from '../components/axios'
import {useRouter} from 'next/router'
import { useState } from 'react'

const Container = styled.div`
  height:100vh;
  overflow: hidden;
  position:relative;
  background-color: #080708;

`
const SignUp = styled.div`
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





const Signup = () => {
  const router = useRouter()

  const InitialFormFata = Object.freeze({
    username: '',
    email: '',
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
    .post(`/auth/users/`, {
      username: formData.username,
      email: formData.email,
      password: formData.password,

    })
    .then((res) => {
      router.push('/login');
      console.log(res);
      console.log(res.data);
    });
};

  return (
    <><Head>
      <title>SignUp</title>
    </Head>
    <Container>
      <SignNav butn="Sign In" btnlin="/login" link="/" />
      <SignUp>
        <Form method="POST">
          <TypIn onChange={handleChange} type="text" placeholder="Username" name="username" id="username" required></TypIn>
          <TypIn onChange={handleChange} type="text" placeholder="Email" name="email" id="email" required></TypIn>
          <TypIn onChange={handleChange} type="password" placeholder="Password" name="password" id="password" required></TypIn>
          <Button onClick={handleSubmit}>Create</Button>
          <Message>Already registered? <Lin><Link href="/login">Sign In</Link></Lin></Message>
        </Form>
      </SignUp>

    </Container>

    </>
  )
}

export default Signup