'use client';

import {useRef} from "react";

export default function FocusInput() {
   const inputRef = useRef(null);
   const handleFocus = () => {
      inputRef.current.focus();
   }
   return (<div>
      <input type="text" ref={inputRef}/>
      <button type={'button'} onClick={handleFocus}>Focus</button>
   </div>)
}