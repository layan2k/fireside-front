import React from 'react'
import MovieList from '../components/movie'
import Head from 'next/head'

const movies = () => {
  return (
    <>
      <Head>
      <title>Movies</title>
      </Head>
    <MovieList />
    </>
  )
}

export default movies