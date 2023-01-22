import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Counter1 from '../pages/Counter1';
import Counter2 from '../pages/Counter2';
import { Counter3 } from '../pages/Counter3';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Counter1" element={<Counter1 />}/>
        <Route path="/Counter2" element={<Counter2 />}/>
        <Route path="/Counter3" element={<Counter3 />}/>
    </Routes>
  )
}

export default Router