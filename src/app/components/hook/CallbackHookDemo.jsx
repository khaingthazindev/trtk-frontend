'use client';

import {memo, useCallback, useState} from "react";

let savedHandler;
function Child({handler}) {
   console.log('Child render...');

   if (!savedHandler) {
      savedHandler = handler;
   }

   console.log('is same: ', savedHandler == handler);
   savedHandler = handler;
}
// Child = memo(Child);

export default function CallbackHookDemo() {
   console.log('Main component render...');
   const [count, setCount] = useState(0);

   const callBack = useCallback(() => {
      console.log('parent callback');
   }, []);

   return (<div>
      <p>Count {count}</p>
      <Child handler={callBack}/>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={callBack}>callback fun</button>

   </div>)
}