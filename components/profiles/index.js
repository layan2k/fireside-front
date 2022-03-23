import React from 'react'
import styled from 'styled-components'
import axiosInstance from '../common/axios'
import NavLog from '../common/NavLog'
import ProfileCard from './profileCard'

const Container = styled.div`
  height:100vh;
  overflow: hidden;
  position:relative;
  background-color: #010b20;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

const WHos = styled.h1`
    color: #e6e6e6;
    text-align: center;

`
const ProfileContainer = styled.div`
    display: flex;
    justify-content:space-evenly ;
    align-items: center;

    @media only screen and (max-width:480px){
        flex-direction:column;
        align-items: center;
        }
`
const CreateProfile = styled.a`
  width: 200px;
  height: 50px;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  background-color: #010b13 ;
  border:2px solid #e6e6e6 ;
  padding:10px ;
  cursor:pointer ;
  text-decoration: none;
  &:hover{
      background-color:#3772FF ;
  }
  &:active{
      background-color: #FDCA40 ;
  }

`
const Squbx = styled.span`
    text-decoration: none;
    color: #e6e6e6;
    display: flex;
    align-content: center;
    justify-content: center;
`
const ButtonContainer = styled.div`
display: flex;
margin-left: 610px;
margin-right: 610px;
margin-top: 40px;
`





export default class Profile extends React.Component  {
    state = {
        profiles: []
    }
   async componentDidMount(){
         await axiosInstance
        .get(`/api/profile/`).then(res => {
            const profiles = res.data
            this.setState({ profiles })
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
        }

        render() {
  return (
      <>
      <NavLog logolink="/CreateProfile"/>
    <Container>
        <Wrapper>
            <WHos>Who&apos;s Watching?</WHos>
            <ProfileContainer>
               {this.state.profiles.map((profile) =>
                    <ProfileCard key={profile.id} profiles={profile} />)}
            </ProfileContainer>

            <ButtonContainer>
            <CreateProfile href='\CreateProfile'>
                <Squbx>
                <i className="fi fi-rr-add" style={{marginRight:"8px", marginTop:"3px"}}></i>Create Profile
                </Squbx>
            </CreateProfile>
            </ButtonContainer>
        </Wrapper>
    </Container>
    </>
  )
}
}