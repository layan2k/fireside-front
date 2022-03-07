import React from 'react'
import styled from 'styled-components'
import NavLog from '../components/NavLog'

const Conatiner = styled.div`
  height:100vh;
  overflow: hidden;
  position:relative;
  background-color: #080708;
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
const Button= styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #DF2935;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  border-radius: 30px ;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  &:hover{
    background: #3772FF;
  }

`
const Main_Text = styled.h1`
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: 300;
    margin: 0 0 10px 0;
    padding: 0 0 10px 0;
    color: #080708 ;
`
const TypIn = styled.input`
    border:0;
    font-size: 14px;;
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    &:not(:focus):invalid, :not(:focus):invalid{
     color: #080708;
    outline-color: #080708;
    }
`
const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 3px 0;
    color:#080708 ;
`
const FormSection = styled.section`
    margin: 0 0 15px 0;
    position: relative;
    &:last-of-type{
        margin: 0 0 25px 0;
    }
`



const payment = () => {
  return (
    <>

<Conatiner>

<NavLog logolink="/" login="/login" signup="/signup" />


        <Form action="#" method="post">

<Main_Text>Payment Form</Main_Text>

<FormSection>
  <Label >Card number</Label>
  <TypIn  name="cc-number" autComplete="cc-number" inputMode="numeric" pattern="[\d ]{10,30}" required />
</FormSection>

<FormSection>
  <Label htmlFor="cc-name">Name on card</Label>
  <TypIn  name="cc-name" autoComplete="cc-name" pattern="[\p{L} \-\.]+" required/>
</FormSection>

<FormSection >
  <div>
    <Label >Expiry date</Label>
    <TypIn id="cc-exp" name="cc-exp" autoComplete="cc-exp" placeholder="MM/YY" maxLength="5" required/>
  </div>
  <div>
    <Label >Security code</Label>
    <TypIn  name="cc-csc" autoComplete="cc-csc" inputMode="numeric" maxLength="3" required/>
    <div style={{color:"#080708", fontSize:"12px"}} >Back of card, last 3 digits</div>
  </div>
</FormSection>

<Button id="complete-payment">Complete payment</Button>

</Form>
</Conatiner>
    </>
  )
}

export default payment