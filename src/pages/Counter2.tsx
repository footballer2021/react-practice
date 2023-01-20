import React from 'react'
import Header from '../components/Header';
import CounterPart from '../components/CounterPart';
import { CounterProvider } from '../context/CounterContext';

const Counter2 = () => {
  return (
    <>
        <Header />
        <h2>useReducerとuseContextの試しです。</h2>
        <CounterProvider>
            <CounterPart />
        </CounterProvider>        
    </>
    
  )
}

export default Counter2