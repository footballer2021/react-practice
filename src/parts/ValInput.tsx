import React, { useContext } from 'react'
import { Counter3Context } from '../pages/Counter3';
import { Counter3DispatchContext } from '../pages/Counter3';

const ValInput = ({name}:{name:string}) => {
  const state = useContext(Counter3Context);
  const dispatch = useContext(Counter3DispatchContext);

  const numChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "a"){
      dispatch({calcType:state.calcType, a:Number(e.target.value),b:state.b});
    } else if(e.target.name === "b"){
      dispatch({calcType:state.calcType, a:state.a,b:Number(e.target.value)});
    } 
  }

  return (
    <div>     
      {name}:<input type="number" name={name} value={state[name]} onChange={(e) => {numChange(e)}}/>
    </div>
  )
}

export default ValInput