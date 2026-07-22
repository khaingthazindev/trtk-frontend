'use client';

import './tab.css'
import {useState} from "react";

function TabHeader({header, onClick}) {
   return <div onClick={onClick} className={"tab-header"}
   >{header}</div>;
}

export default function CustomTab({headers, children}) {
   const [activeTab, setActiveTab] = useState(0);

   const onClickHandler = (index) => {
      setActiveTab(index);
   }

   return (<>
      <div>
         {
            headers.map((header, index) => <TabHeader key={index} onClick={() => onClickHandler(index)}
                                                      header={header}/>)
         }
      </div>
      <div className='tab-content'>
         {children[activeTab]}
      </div>
   </>)
}