'use client';

import './modal.css'
import {createPortal} from "react-dom";

export default function Modal() {
   return (<div>
      {createPortal(<div className={'backdrop'}></div>, document.body)}
   </div>)
}