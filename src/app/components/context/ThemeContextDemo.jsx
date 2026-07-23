'use client';

import {ThemeContext} from "@/app/components/context/ThemeContext";
import {useContext, useState} from "react";

function GrandParent()
{
   return (<div>
      GrandParent
      <Parent />
   </div>)
}

function Parent()
{
   return (<div>
      Parent
      <Child />
   </div>)
}

function Child()
{
   const theme = useContext(ThemeContext);
   return (<div style={{color: theme.color}}>
      Child
   </div>)
}

export default function ThemeContextDemo()
{
   const [color, setColor] = useState('green');
   const handleClick = () => {
      setColor('black');
   }
   return (<div>
      <div>
         <button onClick={handleClick}>dark</button>
      </div>
      <ThemeContext.Provider value={{color}}>
         ThemeContextDemo
         <GrandParent />
      </ThemeContext.Provider>
   </div>)
}