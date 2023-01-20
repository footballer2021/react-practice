import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Counter1 from '../pages/Counter1';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Counter1" element={<Counter1 />}/>
    </Routes>
  )
}

export default Router