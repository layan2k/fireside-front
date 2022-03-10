import Head from 'next/head'
import styled from 'styled-components'
import NavBar from '../common/NavBar'
import Text from '../common/Text'
import Style from '../../styles/Home.module.css'


const Container = styled.div`
  height:100vh;
  overflow: hidden;
  position:relative;
`


export default function Home() {
  return (
    <div className={Style.main}>
    <Head>
      <title>FireSide</title>

    </Head>
    <Container>
      <NavBar logolink="/" login="/login" signup="/signup" />
      <Text />
    </Container>
    </div>
  )
}
