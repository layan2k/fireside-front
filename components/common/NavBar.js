import styled from "styled-components"


const Container = styled.div`
    height: 104px;
    background-color: #010b13;
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
    padding-top: 20px;
`
const Right = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-top: 20px;
`
const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
`
const Logo = styled.h1`
    font-weight: bold;
    color: #e6e6e6;
    padding-bottom: 10px;
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
    padding-bottom:15px ;
    cursor: pointer;
    &:hover{
        color: #3772FF;
        text-decoration: #3772FF;
    }

`
const Button = styled.button`
    background-color: #010b13 ;
    border: 2px solid #e6e6e6;
    color: #e6e6e6;
    white-space: nowrap;
    font-size: 14px;
    width: 96px;
    height: 40px;
    margin-left:25px;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover{
        background-color: #3772FF;
    }
`
const Pagein = styled.a`
    text-decoration: none;
`


const NavBar = ({logolink, login, signup}) => {
  return (
    <Container>
        <Wrapper>
        <Left><a href={logolink} style={{"textDecoration":"none"}}><Logo>FireSide</Logo></a>
        </Left>
            <Menu>
                <Center>
                <Pagein href="/"></Pagein><MenuItem>Home</MenuItem>
                <Pagein href="/login"><MenuItem>Movies</MenuItem></Pagein>
                <Pagein href="/login"><MenuItem>TV Shows</MenuItem></Pagein>
                <Pagein href="/login"><MenuItem> Genre</MenuItem></Pagein>
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