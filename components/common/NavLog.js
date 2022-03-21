import styled from "styled-components"



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
    @media only screen and (max-width:480px){
       padding: 0;
       flex-direction: column;
    }

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
    @media only screen and (max-width:480px){
       display: none;
    }
`
const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width:480px){
       display: none;
    }
`
const Logo = styled.h1`
    font-weight: bold;
    color: #e6e6e6;
    padding: auto;
    cursor: pointer;
    @media only screen and (max-width:480px){
       justify-content: center;
       align-items: center;
       font-size: 35px;
       margin-top: 25px;
    }
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

const Link = styled.a`
    text-decoration: none;
`


const NavLog = ({logolink, login, signup}) => {
  return (
    <Container>
        <Wrapper>
        <Left><Link href="all"><Logo>FireSide</Logo></Link>
        </Left>
            <Menu>
                <Center>
               <Link href="/all"><MenuItem>Home</MenuItem></Link>
               <Link href="/movies"><MenuItem>Movies</MenuItem></Link>
               <Link href="/tvshows"><MenuItem>TV Shows</MenuItem></Link>
                <Link href="/genre"><MenuItem> Genre</MenuItem></Link>
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