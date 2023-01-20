import { useReducer,useContext,createContext } from "react";

const CounterContext = createContext<number>(0)
const CounterDispatchContext = createContext<React.Dispatch<{
    sign: string;
    num: number;
}>>(() => {} );

const CounterProvider = ({children}:{children:React.ReactNode}) => {
    const valCalc = (prev:number,{sign,num}:{sign:string,num:number}) => {
        switch(sign){
            case "+" : return prev + num;
            case "-" : return prev - num;
            default : return prev
        }
     }

    const [val, dispatch] = useReducer(valCalc,0);

    return (
        <CounterContext.Provider value={val}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    )
}

const useCounter = () => {
    return useContext(CounterContext);
}

const useCounterDispatch = () => {
    return useContext(CounterDispatchContext);
}

export { CounterProvider, useCounter, useCounterDispatch}