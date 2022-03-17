import styled from "styled-components"
import Link from 'next/link'


const Container = styled.div`
    height: 110px;
    background-color: #010b13;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 130px;
    padding-right: 130px;
    padding-top: 20px;

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

const AcoountSqr = styled.button`
  width: 150px;
  height: 50px;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  background-color: #010b13 ;
  border:2px solid #e6e6e6 ;
  border-radius: 30px ;
  padding:15px ;
  cursor:pointer ;
  &:hover{
      background-color:#3772FF ;
  }
  &:active{
      background-color: #FDCA40 ;
  }

`
const AccountText = styled.span`
    color: #e6e6e6 ;
    margin-left:5px ;
    font-size:14px ;

`


const NavLog = ({logolink, login, signup}) => {
  return (
    <Container>
        <Wrapper>
        <Left><a href={logolink} style={{"textDecoration":"None"}}><Logo>FireSide</Logo></a>
        </Left>
            <Menu>
                <Center>
                <MenuItem>Home</MenuItem>
                <MenuItem>Movies</MenuItem>
                <MenuItem>TV Shows</MenuItem>
                <MenuItem> Genre</MenuItem>
                </Center>
            </Menu>
            <Right>
                <AcoountSqr>
                    <i className="fi fi-rr-user" style={{color:"#e6e6e6"}}></i>
                    <AccountText>My Account</AccountText>
                </AcoountSqr>
                </Right>
        </Wrapper>


    </Container>
  )
}

export default NavLog