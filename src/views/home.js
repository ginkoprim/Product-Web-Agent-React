import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Web Agent</title>
        <meta property="og:title" content="Product Web Agent" />
      </Helmet>
    </div>
  )
}

export default Home
