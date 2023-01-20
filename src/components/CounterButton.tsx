import React from 'react'
import { EventType } from '../type/EventType';

const CounterButton = ({sign,num,countChange}:{sign:string,num:number,countChange:EventType}) => {
  return (
    <>
        <button onClick={countChange}>{sign}{num}</button>
    </>
  )
}

export default CounterButton