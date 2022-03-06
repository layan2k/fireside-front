import styled from "styled-components"
import SignNav from "../components/SignNav"
import Head from "next/head"

const Container = styled.div`
  height:100vh;
  overflow: hidden;
  position:relative;
  background-color: #080708;
`

const login = () => {
  return (
    <><Head>
      <title>SignIn</title>
    </Head>
    <Container>
      <SignNav butn="Sign In" />
    </Container>

    </>
  )
}

export default login