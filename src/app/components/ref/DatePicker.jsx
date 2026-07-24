'use client';
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import {useEffect, useRef} from "react";

datepickerFactory($);

export default function DatePicker() {
   const datepicker = useRef(null);
   useEffect(() => {
      $(datepicker.current).datepicker();
      return () => {
         $(datepicker.current).datepicker('destroy')
      };
   }, []);

   return (<div>
      <input type={'text'} ref={datepicker} />
   </div>)
}