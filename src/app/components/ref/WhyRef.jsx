'use client';

import {useState} from "react";
import useCustomRef from "@/app/components/hook/useCustomRef";

export default function WhyRef() {
   let [count, setCount] = useState(0);
   let localCount = 0;
   // let refCount = useRef(0);
   let refCount = useCustomRef(0);

   const handleIncreaseState = () => {
      setCount(count + 1)
   }
   const handleIncreaseLocal = () => {
      localCount++;
      console.log('handleIncreaseLocal localCount: ', localCount);
   }
   const handleIncreaseRef = () => {
      refCount.current = refCount.current + 1;
      console.log('handleIncreaseRef refCount: ', refCount.current);
   }

   return (<div>
      State Counter {count} <br />
      Local Counter {localCount} <br />

      <button type={'button'} onClick={handleIncreaseState}>Increase State</button>
      &nbsp; <button type={'button'} onClick={handleIncreaseLocal}>Increase Local</button>
      &nbsp; <button type={'button'} onClick={handleIncreaseRef}>Increase Ref</button>

   </div>)
}