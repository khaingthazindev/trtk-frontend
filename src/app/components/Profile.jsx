export default function Profile() {
   let name = "Someone";
   return (<div>
      <h3>{name}</h3>
      <img
         src="https://react.dev/images/docs/scientists/MK3eW3Am.jpg"
         alt="Katherine Johnson"
         width={100}
         height={100}
         className={'profile'}
      />
   </div>)
}

export function Another() {
   return (<div>
      Another Component
   </div>)
}