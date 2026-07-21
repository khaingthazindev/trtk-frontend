function User()
{
   return (<div>
      User
   </div>)
}

function Admin()
{
   return (<div>
      Admin
   </div>)
}

export default function UserAccount({role})
{
   // if condition is complex then do it in js
   // if not then do it in jsx

   /*
   let comp;
   if (role === 'admin') {
      comp = <Admin />
   } else if (role === 'user') {
      comp = <User />
   } else {
      comp = null
   }
   */

   let mapping = {
      'admin': <Admin />,
      'user': <User />,
   }
   return (<div>
      {/*{ role === 'admin' ? <Admin /> : <User />}
      { role === 'admin' && <Admin /> }
      { 0 && <Admin /> }
      {comp}*/}

      {mapping[role]}
   </div>)
}