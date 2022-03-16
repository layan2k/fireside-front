import  Head  from 'next/head'
import React from 'react'
import Profile from '../components/profiles'

const profiles = () => {
  return (
    <>
    <Head>
        <title>Who&apos;s Watching?</title>
    </Head>
    <Profile />
    </>
  )
}

export default profiles