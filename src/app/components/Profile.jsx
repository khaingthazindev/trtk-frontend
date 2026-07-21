export default function Profile({profile, size = 100}) {
   return (<div>
      <h3>{profile.name}</h3>
      <img
         src={profile.image}
         alt="Katherine Johnson"
         width={size}
         height={size}
         className={'profile'}
      />
   </div>)
}

export function Another() {
   return (<div>
      Another Component
   </div>)
}