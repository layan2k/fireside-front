import React from 'react'
import AllMovies from '../components/allmovies.js'
import Head from 'next//head'

const All = () => {
  return (
    <>
      <Head>
      <title>Latest Movies and TV Shows</title>
    </Head>
      <AllMovies />

    </>
  )
}

export default All