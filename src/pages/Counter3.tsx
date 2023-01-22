import React, { useReducer, createContext } from 'react'
import Header from '../components/Header'
import { stateType } from '../type/Counter3Type'
import { actionType } from '../type/Counter3Type'
import ValInput from '../parts/ValInput';

const Counter3Context = createContext<stateType>({calcType:"add",a:0,b:0,total:0})
const Counter3DispatchContext = createContext<React.Dispatch<actionType>>(() => {} );

const Counter3 = () => {
  const CALCULATE_OPTIONS = ["add", "minus", "multiple", "divide"]
  const initVal = {
    calcType: "add",
    a: 0,
    b: 0,
    total:0
  }

  const calc = (prev:stateType, {calcType, a, b}:actionType) => {
    switch(calcType){
        case "add" : return {...prev,calcType:"add",a, b, total:a + b}
        case "minus" : return {...prev,calcType:"minus",a, b, total:a - b}
        case "multiple" : return {...prev,calcType:"multiple",a, b, total:a * b}
        case "divide" : return {...prev,calcType:"divide",a, b, total:a / b}
        default: return prev;
    }
  }

  const [ state, dispatch ] = useReducer(calc,initVal);

  const calcChange =(e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({a:state.a,b:state.b, calcType:e.target.value});
  }

  return (
    <>
        <Header />
        <Counter3Context.Provider value={state}>       
          <Counter3DispatchContext.Provider value={dispatch}>
            <ValInput name="a"/>
            <ValInput name="b"/>
            <select name="calcType" onChange={calcChange}>
              {
                CALCULATE_OPTIONS.map(calc => {
                  return <option key={calc} value={calc}>{calc}</option>
                })}
            </select>
            <h3>結果:{state.total}</h3>
          </Counter3DispatchContext.Provider>
        </Counter3Context.Provider> 
    </>
  )
}

export { Counter3, Counter3Context, Counter3DispatchContext } 