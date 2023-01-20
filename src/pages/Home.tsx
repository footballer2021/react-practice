import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <h1>こんにちは</h1>
        <div>
            <Link to="/Counter1">Counter1</Link>
        </div>
        <div>
            <Link to="/Counter2">Counter2</Link>
        </div>
    </>
  )
}

export default Home