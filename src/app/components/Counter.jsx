'use client';

import {useState} from "react";

export default function Counter()
{
   // let count = 0;
   const [count, setCount] = useState(0);

   const onClickHandler = () => {
      setCount(count + 1);
      console.log('onClickHandler count: ', count);
   }

   return (<div>
      <h3>Counter : {count}</h3>
      <button onClick={onClickHandler}>Increase By 1</button>
   </div>)
}