'use client';

import {useState} from "react";

function factorial(n) {
   console.log('Compute factorial: ', n);
   let result = 1;
   for (let i = 1; i <= n; i++) {
      result *= i;
   }

   return result;
}

export default function CallbackHookDemo1() {
   const [n, setN] = useState(0);
   let factorialValue = factorial(n);

   return (<div>
      <input type="text" value={n} onChange={(e) => setN(+e.target.value)}/>
      <p>Factorial of {n}: {factorialValue}</p>
   </div>)
}