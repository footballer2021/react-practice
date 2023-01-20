import React from 'react'
import { useCounterDispatch } from '../context/CounterContext';

const CounterButton = ({sign,num}:{sign:string,num:number}) => {
    const dispatch = useCounterDispatch();
  const clickHandler = () => {
    dispatch({sign,num});
  }
  return (
    <>
        <button onClick={clickHandler}>{sign}{num}</button>
    </>
  )
}

export default CounterButton