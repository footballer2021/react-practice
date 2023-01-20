import React from 'react'
import CounterResult from './CounterResult';
import CounterButton from './CounterButton';

const CounterPart = () => {
  return (
    <>
        <CounterResult />
        <CounterButton sign="+" num={2} />
        <CounterButton sign="-" num={3} />
        <CounterButton sign="+" num={5} />
        <CounterButton sign="-" num={7} />
    </>
  )
}

export default CounterPart