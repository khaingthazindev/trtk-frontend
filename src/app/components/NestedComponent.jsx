function Parent(props)
{
   return (<div>
      Parent
      <Child {...props} />
   </div>)
}

function Child(props)
{
   return (<div style={props.style}>
      Child : {props.label}
   </div>)
}

export default function NestedComponent(props)
{
   return (<div>
      <Parent {...props} />
   </div>)
}