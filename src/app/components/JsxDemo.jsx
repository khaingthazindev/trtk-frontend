export default function JsxDemo()
{
   let person = {
      name: "Johnson",
      theme: {
         backgroundColor: 'lightgreen',
         color: 'pink',
         width: '300px'
      },
      profile: {
         borderRadius: '100%',
         width: '100px',
         height: '100px',
      }
   }
   return (<div style={person.theme}>
      {person.name}
      <img style={person.profile} src="https://react.dev/images/docs/scientists/MK3eW3Am.jpg" alt="Profile"/>
   </div>)
}