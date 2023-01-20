import React, { useReducer} from 'react'
import Header from '../components/Header';
import CounterPart from '../components/CounterPart';

const Counter2 = () => {
 const valCalc = (prev:number,{sign,num}:{sign:string,num:number}) => {
    switch(sign){
        case "add" : return prev + num;
        case "minus" : return prev - num;
        default : return prev
    }
 }

 const countUp = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch({sign:"add",num:2});
 }

 const countDown = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch({sign:"minus", num:3});
 }

 const [val, dispatch] = useReducer(valCalc,0);
  return (
    <>
        <Header />
        <h2>useReducerとuseContextの試しです。</h2>
        <CounterPart val={val} countUp={countUp} countDown={countDown}/>
    </>
    
  )
}

export default Counter2