import styled from "styled-components"

const Container = styled.div`
    margin: 160px 445px 0 445px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    @media only screen and (max-width:480px){
        margin: 0;
        margin-top: 150px;
        }


`
const Tt = styled.h1`
    color: #e6e6e6;
    font-size: 24px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media only screen and (max-width:480px){
        width:100%;
        }
`
const Reg = styled.h4`
    margin-top: 20px;
    color: #e6e6e6;
    font-size: 15px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media only screen and (max-width:480px){
        width:100%;
        color: #3772FF;
        }
`
const ExecArea = styled.form`
    display: flex;
    margin-top: 20px;
    @media only screen and (max-width:480px){
        flex-direction: column-reverse;
        }
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
    @media only screen and (max-width:480px){
        background-color: #e6e6e6;
        color: #080708;
        width: 100%;
        }
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
    @media only screen and (max-width:480px){
        width: 100%;
        height: 60px;
        margin-top: 30px;
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