export default function Greeting(props)
{
   console.log('Greeting props ', props);
   return (<div>
      Hello {props.name}
   </div>)
}