import React from 'react'
import CounterResult from './CounterResult';
import CounterButton from './CounterButton';
import { EventType } from '../type/EventType';

const CounterPart = ({val, countUp, countDown}:{val:number,countUp:EventType,countDown:EventType}) => {
  return (
    <>
        <CounterResult val={val}/>
        <CounterButton sign={"+"} num={2} countChange={countUp}/>
        <CounterButton sign={"-"} num={3} countChange={countDown}/>
    </>
  )
}

export default CounterPart