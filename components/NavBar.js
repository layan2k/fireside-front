import styled from "styled-components"
import Link from 'next/link'


const Container = styled.div`
    height: 104px;
    background-color: #080708;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 130px;
    padding-right: 130px;

`
const Left = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 35px;
`
const Right = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 35px;
`
const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 35px;
`
const Logo = styled.h1`
    font-weight: bold;
    color: #e6e6e6;
    padding: auto;
    cursor: pointer;
`
const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
`
const MenuItem = styled.li`
    list-style-type: none;
    margin-right: 30px;
    font-size: 15px;
    font-weight: normal;
    color: #e6e6e6;
    padding: 20px;
    white-space: nowrap;
    cursor:  pointer;
    &:hover{
        color: #3772FF;
        text-decoration: underline #3772FF;
    }
`
const Logi = styled.h5`
    color: #e6e6e6;
    white-space: nowrap;
    font-size:14px ;
    text-decoration: underline #e6e6e6;
    font-weight: lighter;
    cursor: pointer;
    &:hover{
        color: #3772FF;
        text-decoration: #3772FF;
    }

`
const Button = styled.button`
    background-color: red ;
    padding: 5px 19px;
    border: none;
    color: #e6e6e6;
    white-space: nowrap;
    font-size: 14px;
    width: 96px;
    height: 30px;
    margin-left:25px;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover{
        background-color: #3772FF;
    }
`

const NavBar = ({logolink, login, signup}) => {
  return (
    <Container>
        <Wrapper>
        <Left><a href={logolink}><Logo>FireSide</Logo></a>
        </Left>
            <Menu>
                <Center>
                <MenuItem>Get Started</MenuItem>
                <MenuItem>Movies</MenuItem>
                <MenuItem>TV Shows</MenuItem>
                <MenuItem> Genre</MenuItem>
                </Center>
            </Menu>
            <Right>
                <a href={login}><Logi>Sign In</Logi></a>
                <a href={signup}><Button>Sign Up</Button></a>
                </Right>
        </Wrapper>


    </Container>
  )
}

export default NavBar