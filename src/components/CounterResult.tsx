import React from 'react'
import { useCounter } from "../context/CounterContext";

const CounterResult = () => {
  const val = useCounter();
  return (
    <>
        <h3>結果:{val}</h3>
    </>
  )
}

export default CounterResult