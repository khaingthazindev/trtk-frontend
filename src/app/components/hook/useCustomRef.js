'use client';

import {useState} from "react";

export default function useCustomRef(value) {
   const [state, setState] = useState({
      current: value
   })

   return state;
}