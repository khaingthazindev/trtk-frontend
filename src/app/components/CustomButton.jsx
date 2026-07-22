'use client';

export default function CustomButton({label, onClick})
{
   return (<button type="button" onClick={onClick}>
      {label}
   </button>)
}