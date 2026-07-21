export default function Border({children})
{
   console.log('Border children: ', children);
   return (<div style={{
      border: '1px solid black',
   }}>
      {children}
   </div>)
}