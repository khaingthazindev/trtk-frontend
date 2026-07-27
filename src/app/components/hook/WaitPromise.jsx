'use client';

import {Suspense, use} from 'react';

async function getData() {
   await new Promise(resolve => {
      setTimeout(resolve, 5000);
   });

   return "getData Promise";
}

function Child1() {
   let data = use(getData());
   console.log('with use data: ', data);

   let withoutData = getData();
   console.log('without use data: ', withoutData);

   return (<div>
      Child1
      {data}
   </div>)
}

function Child2() {
   return (<div>
      Child2
   </div>)
}

export default function WaitPromise() {
   return (<div>
      <Child2 />
      <Suspense fallback={<h2>Loading...</h2>}>
         <Child1 />
      </Suspense>
   </div>)
}