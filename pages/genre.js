import React from 'react'
import GenreHero from '../components/genre'
import Head from 'next/head'

const genrePage = () => {
  return (
    <>
      <Head>
      <title>Genres</title>
      </Head>
        < GenreHero />
    </>
  )
}

export default genrePage