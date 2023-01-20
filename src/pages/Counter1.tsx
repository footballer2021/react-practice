import React, { useReducer } from 'react'
import Header from '../components/Header'

type AllValueType = {
    calc:string
    paypay:number
    rakutenpay:number
    total:number
}

type ActionType = {
    calc:string
    paypay:number
    rakutenpay:number
}

const Counter1 = () => {
 const CALCULATE_OPTIONS = ["add", "minus", "multiple", "divide"]

 const pointCalc = (prev:AllValueType, {calc,paypay, rakutenpay}:ActionType) => {
    switch(calc){
        case "add" : return {...prev, calc:"add", paypay, rakutenpay, total: paypay + rakutenpay}
        case "minus" : return {...prev, calc:"minus", paypay, rakutenpay, total: paypay - rakutenpay}
        case "multiple" : return {...prev, calc:"multiple", paypay, rakutenpay,total: paypay * rakutenpay}
        case "divide" : return {...prev, calc:"divide", paypay, rakutenpay, total: paypay / rakutenpay}
        default : return prev
    }
 }

 const [{calc,paypay,rakutenpay,total}, dispatch] = useReducer(pointCalc,{calc:"add", paypay:0, rakutenpay:0, total:0})

 const paypayCalc = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({...{calc,rakutenpay},paypay:Number(e.target.value)});
 }

 const rakutenCalc = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({...{calc,paypay},rakutenpay:Number(e.target.value)});
 }

 const calcChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({calc:e.target.value,paypay,rakutenpay});
 }

  return (
    <>
        <Header/>
        <h1>Counter1</h1>
        <div>
            <div>
                <input type="number" name="paypay" value={paypay} onChange={paypayCalc}/>
            </div>
            <div>
                <input type="number" name="rakutenpay" value={rakutenpay} onChange={rakutenCalc}/>
            </div>
            <select name="calc" onChange={calcChange}>
                {
                    CALCULATE_OPTIONS.map(sign => {
                        return <option key={sign} value={sign}>{sign}</option>
                    })
                }
            </select>
            <h2>結果:{total}</h2>

        </div>
    </>
  )
}

export default Counter1