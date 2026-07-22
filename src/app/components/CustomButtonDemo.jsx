'use client';

import CustomButton from "@/app/components/CustomButton";

export default function CustomButtonDemo()
{
   return (<div>
      <CustomButton label='Click Me' onClick={() => alert('clicked')} />
   </div>)
}