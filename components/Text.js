import styled from "styled-components"

const Container = styled.div`
    margin: 220px 445px 0 445px;
`
const Tt = styled.h1`
    color: #e6e6e6;
    font-style: 24px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Reg = styled.h4`
    margin-top: 20px;
    color: #e6e6e6;
    font-style: 15px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const ExecArea = styled.form`
    display: flex;
    margin-top: 20px;
`
const TypIn = styled.input`
    width: 70%;
    padding: 12px 20px;
    box-sizing: border-box;
    opacity: 0.4;
    background-color: #080708;
    color: #e6e6e6;
    text-align: center;
    font-size: 16px;
    border: none;
`
const Button = styled.button`
    background-color: red ;
    padding: 10px 19px;
    border: none;
    color: #e6e6e6;
    white-space: nowrap;
    font-size: 14px;
    width: 80px;
    height: 60px;
    &:hover{
        background-color: #3772FF;
    }
`


const Text = () => {
  return (
    <Container>
        <Tt>
        The Best Place For your African Entertainment
        With The Best Movies,
        Series And Many More....
        </Tt>
        <Reg>
        Register Now To Start Your 30 Day trial
        </Reg>
        <ExecArea>
            <Button>
                Register
            </Button>
            <TypIn type='text' placeholder="Your Email"/>
        </ExecArea>

    </Container>
  )
}

export default Text