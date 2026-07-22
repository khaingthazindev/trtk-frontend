'use client';

import { useState } from 'react';

export default function StateProblem1() {
   const [number, setNumber] = useState(0);

   console.log('StateProblem1 number: ', number);

   // setState is async and batch set so number gets 1 not 3

   return (
      <>
         <h1>{number}</h1>
         <button onClick={() => {
            setNumber(number + 1);
            setNumber(number + 1);
            setNumber(number + 1);
         }}>+3</button>
      </>
   )
}
