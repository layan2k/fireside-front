import React from 'react'
import TVHero from '../components/TVShows'
import Head from 'next/head'

const tvshows = () => {
  return (
    <>
    <Head>
      <title>TV Shows</title>
    </Head>
    <TVHero />
    </>
  )
}

export default tvshows