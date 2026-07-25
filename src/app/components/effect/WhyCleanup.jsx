'use client';

import {useEffect, useState} from "react";

function CurrentTime({dateTime}) {
   return <h1 style={{marginTop: '10px'}}>{dateTime.toLocaleTimeString()}</h1>;
}

export default function WhyCleanup() {
   const [dateTime, setDateTime] = useState(new Date());
   const [showTime, setShowTime] = useState(true);

   useEffect(() => {
      let timeInterval = setInterval(() => {
         setDateTime(new Date());
         console.log('useEffect setInterval');
      }, 1000);

      return () => {
         console.log('cleanup function for setInterval');
         clearInterval(timeInterval);
      }
   }, []);

   const handleShowTime = (e) => {
      setShowTime(!showTime);
      console.log('showTime: ', e.target.checked);
   }

   return (<div>
      <div><input type="checkbox" checked={showTime ? true: false} onChange={handleShowTime} id="showTime"/> <label htmlFor="showTime">Show Time</label>
      </div>
      {showTime && <CurrentTime dateTime={dateTime}/>}
   </div>)
}