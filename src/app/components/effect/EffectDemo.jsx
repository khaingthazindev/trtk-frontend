'use client';

import {useEffect, useState} from "react";

export default function EffectDemo() {
   let [value, setValue] = useState(0);

   useEffect(() => {
      console.log('Effect fired 1');
   }, [value]);

   useEffect(() => {
      console.log('Effect fired 2');
   }, []);

   console.log('Rendered');

   const btnHandler = () => {
      setValue(value + 1);
   }

   return (<div>
      EffectDemo {value}
      &nbsp;<button onClick={btnHandler}>Click me</button>
   </div>)
}