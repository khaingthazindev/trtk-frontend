'use client';

import {useState} from "react";

export default function ShoppingCart()
{
   let [price, setPrice] = useState(0);
   let [qty, setQty] = useState(0);

   return (<div>
      <form>
         <div>Price <input value={price} onChange={(e) => setPrice(e.target.value)} type="text"/></div>
         <div>Qty <input value={qty} onChange={(e) => setQty(e.target.value)} type="number"/></div>
         <div>Total {price * qty}</div>
      </form>
   </div>)
}