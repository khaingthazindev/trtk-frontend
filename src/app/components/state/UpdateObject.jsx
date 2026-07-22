'use client';

import {useState} from "react";

export default function UpdateObject()
{
   let [state, setState] = useState({
      name: 'Someone',
      age: 31
   });

   const onClickHandler = () => {
      setState({
         ...state,
         age: state.age + 1
      });
      console.log('onClickHandler state: ', state);
   }
   return (<div>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>

      <button type='button' onClick={onClickHandler}>Update</button>
   </div>)
}